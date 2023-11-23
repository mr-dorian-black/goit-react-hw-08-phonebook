import { useDispatch } from 'react-redux';
import { logIn } from 'redux/auth/operations';
import { StyledForm, StyledLabel } from './LoginForm.module';

export const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = e => {
    e.preventDefault();
    const form = e.currentTarget;
    dispatch(
      logIn({
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <StyledForm onSubmit={handleSubmit} autoComplete="off">
      <StyledLabel>
        Email
        <input type="email" name="email" />
      </StyledLabel>
      <StyledLabel>
        Password
        <input type="password" name="password" />
      </StyledLabel>
      <button type="submit">Log In</button>
    </StyledForm>
  );
};
