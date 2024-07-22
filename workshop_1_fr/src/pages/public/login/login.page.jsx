import { useForm } from 'react-hook-form';

const Login = ({ setFormToShow, setIsUserLoggedIn }) => {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = data => console.log(data);
	return (
		<div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:'10px'}}>
			<form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
				<input type="email" placeholder="Email" {...register('email', { required: true })} />
				{errors.email && <span>This field is required</span>}
				<input type="password" placeholder="Password" {...register('password', { required: true })} />
				{errors.password && <span>This field is required</span>}
				<button type="submit">Login</button>
			</form>
			<button onClick={() => setFormToShow('register')}>Register</button>
		</div>

	)
}

export default Login
