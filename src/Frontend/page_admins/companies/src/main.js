function delete_user(indetification) {
	$.ajax({
		url: '/api/companies/' + indetification,
		type: 'DELETE',
		success: function (result) {
			document.getElementById('user-' + indetification).remove();
		},
	});
}

function create_user(indetification, name, postal_code, email, cnpj, created_at) {
	document.getElementById('main-body').innerHTML += `
		<tr id="user-${indetification}">
			<td>
				<img src="https://source.boringavatars.com/beam/${name}" alt="" />
				<a href="#" class="user-link">${name}</a>
				<span class="user-subhead">id: ${indetification}</span>
			</td>
			<td>
				<a href="#">${postal_code}</a>
			</td>
			<td>
				<a href="#">${cnpj}</a>
			</td>
			<td>
				<a href="#">${email}</a>
			</td>
			<td>${created_at}</td>
			<td style="width: 20%">
				<a href="#" class="table-link">
					<span class="fa-stack">
						<i class="fa fa-square fa-stack-2x"></i>
						<i class="fa fa-pencil fa-stack-1x fa-inverse"></i>
					</span>
				</a>
				<a href="#" class="table-link danger" onclick="delete_user(${indetification})">
					<span class="fa-stack">
						<i class="fa fa-square fa-stack-2x"></i>
						<i class="fa fa-trash-o fa-stack-1x fa-inverse"></i>
					</span>
				</a>
			</td>
		</tr>
	`;
}

function add_list_users(users) {
	users.forEach(function (candidate) {
		create_user(candidate.id, candidate.name, candidate.postal_code, candidate.cnpj, candidate.email, candidate.created_at);
	});
}

function update_list_users() {
	let search_param = document.getElementById('search_param').value;
	let search_data = document.getElementById('search_data').value;
	let url = `/api/companies?${search_param}=${search_data}%`;

	$.get(url, function (data) {
		document.getElementById('main-body').innerHTML = '';
		add_list_users(data);
	});
}

$(document).ready(function () {
	document.getElementById('searchForm').addEventListener('submit', function (e) {});
	document.getElementById('search_data').addEventListener('input', function (e) {
		e.preventDefault();
		update_list_users();
	});
	document.getElementById('search_param').addEventListener('change', function (e) {
		e.preventDefault();
		update_list_users();
	});

	$.get('/api/companies', function (data) {
		add_list_users(data);
	});
});
