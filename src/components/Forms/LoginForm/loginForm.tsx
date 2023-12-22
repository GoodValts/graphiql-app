import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { useContext, useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { ToastContainer } from 'react-toastify';
import styles from './loginForm.module.scss';
import loginSchema from './yup';
import Input from '../Input/input';
import { auth } from '../../../firebase/firebase';
import { AuthContext } from '../../../controllers/appControllers';
import 'react-toastify/dist/ReactToastify.css';
import { getErrorMessage, getSuccessMessage } from './getMessage';
import textObj from './langData';

type LoginFormValues = {
  email: string;
  password: string;
};

const LoginForm = (): JSX.Element => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [user] = useAuthState(auth);
  const { lang } = useContext(AuthContext);
  const navigate = useNavigate();

  const {
    register,
    handleSubmit,
    formState: { errors, isValid },
  } = useForm({
    mode: 'all',
    resolver: yupResolver(loginSchema(lang)),
  });

  useEffect(() => {
    if (user) {
      setTimeout(() => {
        navigate('/graphQL');
      }, 5000);
    }
  }, [user]);

  const submitForm = (): void => {
    signInWithEmailAndPassword(auth, email, password)
      .then(() => {
        getSuccessMessage(lang);
      })
      .catch((error) => {
        getErrorMessage(error.code, lang);
      });
  };

  return (
    <form className={styles.form} onSubmit={handleSubmit(submitForm)}>
      <h2 className={styles.header}>{textObj[lang].header}</h2>
      <Input<LoginFormValues>
        styles={styles.input}
        label={textObj[lang].email}
        name="email"
        errors={errors.email}
        register={register}
        setState={setEmail}
        required
      />
      <Input<LoginFormValues>
        label={textObj[lang].password}
        name="password"
        errors={errors.password}
        register={register}
        setState={setPassword}
        type="password"
        required
      />
      <input
        className={`${styles.button} ${isValid ? '' : styles.buttonDisabled}`}
        type="submit"
        value={textObj[lang].button}
      />
      <ToastContainer
        position="bottom-center"
        theme="colored"
        closeOnClick
        autoClose={false}
      />
    </form>
  );
};

export default LoginForm;
