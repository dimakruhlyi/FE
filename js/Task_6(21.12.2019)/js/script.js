let counterPost = 12;

const showPosts = (count = 6) => {
	fetch('https://jsonplaceholder.typicode.com/posts')
		.then(response => response.json())
		.then(json => {
			let lng = json.length;
			let rootElement = document.getElementById("main_block");
			
			let removeArr = json.splice(0, count);
			
			while(rootElement.firstChild){
				rootElement.removeChild(rootElement.firstChild);
			}
			removeArr.forEach((item, index) => {
				let div = document.createElement("div");
				div.userId = item.userId;
				div.id = `post${item.id}`;
				div.classList.add("post");
				let title = document.createElement("h2");
				title.addEventListener("click", More);
				let body = document.createElement("p");
				title.innerHTML = item.title;
				body.innerHTML = item.body;
				div.appendChild(title);
				div.appendChild(body);
				rootElement.appendChild(div);
			})

			if(count < lng){
				let btn = document.createElement("div");
				btn.classList.add("button");
				btn.addEventListener("click", morePosts);
				btn.innerHTML = "MORE"
				rootElement.appendChild(btn);
			}		
		})
}

const morePosts = () => {
	showPosts(counterPost);
	counterPost = counterPost + 6;	
}

const More = (e) => {
	let rootElement = document.getElementById("main_block");
	let buf;

	while(rootElement.firstChild){
		if (rootElement.firstChild.id === e.target.parentNode.id) {
			buf = rootElement.firstChild;
		}
		rootElement.removeChild(rootElement.firstChild);
	}
	rootElement.appendChild(buf);

	fetch('https://jsonplaceholder.typicode.com/comments')
		.then(response => response.json())
		.then(json => {
			let divComments = document.createElement("div");
			divComments.classList.add("comments");
			let comments = json.filter((item, index) => {
				return `post${item.postId}` == e.target.parentNode.id;
			});
			comments.forEach((item, index) => {
				let div = document.createElement("div");
				div.classList.add("comment");

				let name = document.createElement("div");
				name.innerHTML = item.name;
				name.classList.add("comment-name");
				let email = document.createElement("div");
				email.innerHTML = item.email;
				email.classList.add("comment-email");
				let body = document.createElement("div");
				body.innerHTML = item.body;
				body.classList.add("comment-body");

				div.appendChild(email);
				div.appendChild(name);
				div.appendChild(body);
				divComments.appendChild(div);
			})

			rootElement.appendChild(divComments);

		})
}

const showUsers = () => {
	let rootElement = document.getElementById("main_block");
	while(rootElement.firstChild){
		rootElement.removeChild(rootElement.firstChild);
	}

	fetch('https://jsonplaceholder.typicode.com/users')
		.then(response => response.json())
		.then(json => {
			let divUsers = document.createElement("div");
			divUsers.classList.add("users");

			json.forEach((item, index) => {
				let div = document.createElement("div");
				div.classList.add("user");

				let name = document.createElement("div");
				name.innerHTML = item.name;
				name.classList.add("user-name");
				let email = document.createElement("div");
				email.innerHTML = item.email;
				email.classList.add("user-email");
				let username = document.createElement("div");
				username.innerHTML = item.username;
				username.classList.add("user-username");
				let address = document.createElement("div");
				address.innerHTML = `City: ${item.address.city}, street: ${item.address.street}, suite: ${item.address.suite}`;
				address.classList.add("user-address");

				div.appendChild(name);
				div.appendChild(email);
				div.appendChild(username);
				div.appendChild(address);

				divUsers.appendChild(div);
			})

			rootElement.appendChild(divUsers);
		})
}