export default function Posts() {
	const name = JSON.parse(localStorage.getItem('user'));
	console.log(name);
	return <div>Hello {name.firstName}</div>;
}
