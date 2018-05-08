console.log('app.js is running');

const app = {
	title: 'JSON Compare',
	subtitle: 'Get the Common Denominator of Multiple JSON Files'
}

const template = (
		<div>
			<h1>{app.title}</h1>
			{app.subtitle && <p>{app.subtitle}</p>}
		</div>
);

const appRoot = document.getElementById("app");
ReactDOM.render(template,appRoot)