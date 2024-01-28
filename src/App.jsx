import { useCallback, useState, useEffect } from 'react';
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import './App.css';

function App() {
	const [length, setLength] = useState(8);
	const [password, setPassword] = useState('');
	const [numberAllowed, setNumberAllowed] = useState(false);
	const [charAllowed, setcharAllowed] = useState(false);

	let passwordGenerator = useCallback(() => {
		let pass = '';
		let str = 'ABDCEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz';
		if (numberAllowed) str += '1234567890';
		if (charAllowed) str += '!@#$%^&*()_+{}[]';

		for (let i = 0; i < length; i++) {
			let char = Math.floor(Math.random() * str.length + 1);
			pass += str.charAt(char);
		}
		setPassword(pass);
	}, [length, numberAllowed, charAllowed, setPassword]);

	useEffect(() => {
		passwordGenerator();
	}, [length, numberAllowed, charAllowed, setPassword]);

	return (
		<>
			<h1 className='text-3xl font-bold text-center mt-20'>
				Password Generator in React
			</h1>
			<div className='mx-auto w-full max-w-md  p-5 mt-10 rounded-xl bg-gray-800 shadow-lg'>
				<div className='flex  items-center  p-3 rounded mb-5'>
					<input
						className='text-black w-full px-2 py-1 text-xl rounded w-60'
						type='text'
						placeholder='Pasword Here'
						value={password}
						readOnly
					/>
					<button className=' bg-black px-2 py-2 rounded'>
						Copy
					</button>
				</div>
				<div className='flex  gap-x-5 '>
					<div className='flex items-center gap-x-1 '>
						<input
							type='range'
							min={6}
							max={100}
							value={length}
							className='cursor-pointer py-auto'
							onChange={e => {
								setLength(e.target.value);
							}}
						/>
						<label>Length:{length}</label>
					</div>
					<div className='flex items-center gap-x-1'>
						<input
							type='checkbox'
							defaultChecked={numberAllowed}
							className='cursor-pointer py-auto'
							onChange={() => setNumberAllowed(prev => !prev)}
						/>
						<label>Numbers</label>
					</div>
					<div className='flex items-center gap-x-1'>
						<input
							type='checkbox'
							defaultChecked={charAllowed}
							className='cursor-pointer py-auto'
							onChange={() => setcharAllowed(prev => !prev)}
						/>
						<label>Charecter</label>
					</div>
				</div>
			</div>
		</>
	);
}

export default App;
