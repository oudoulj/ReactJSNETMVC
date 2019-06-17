import React, { Fragment, useState, useEffect } from 'react';

export default function Test() {
	const [lazySelect, setLazySelect] = useState();
	const [framework, setFramework] = useState();
	useEffect(() => {
		import('react-select').then(component => {
			setLazySelect({ Component: component.default });
		});
	}, []);

	return (
		<Fragment>
			<h2>That line is inside the React test component (Test.jsx)</h2>
			{lazySelect && lazySelect.Component ? (
				<lazySelect.Component
					defaultValue={'React'}
					isMulti
					options={['React', 'Vue', 'Svelte', 'Ember', 'Angular'].map(x => ({ value: x, label: x }))}
					className="basic-multi-select"
					classNamePrefix="select"
					onChange={setFramework}
				/>
			) : 'Loading'}
			<div>{framework ? 'Pick a framework' : null}</div>
		</Fragment>
	);
}
