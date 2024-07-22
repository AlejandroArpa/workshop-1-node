import { useForm } from 'react-hook-form';

const Register = ({setFormToShow}) => {
	const { register, handleSubmit, formState: { errors } } = useForm();
	const onSubmit = data => console.log(data);
	return (
		<div style={{display:'flex', flexDirection:'column', justifyContent:'center', alignItems:'center', gap:'10px'}}>
			<form onSubmit={handleSubmit(onSubmit)} style={{ display: 'flex', flexDirection: 'column', gap: '10px', justifyContent: 'center', alignItems: 'center' }}>
				<input type="text" placeholder="Name" {...register('name', { required: true })} />
				{errors.name && <span>This field is required</span>}
				<input type="email" placeholder="Email" {...register('email', { required: true })} />
				{errors.email && <span>This field is required</span>}
				<input type="password" placeholder="Password" {...register('password', { required: true })} />
				{errors.password && <span>This field is required</span>}
				<button type="submit">Register</button>
			</form>
			<button onClick={() => setFormToShow('login')}>Login</button>
		</div>
	)
}

export default Register
