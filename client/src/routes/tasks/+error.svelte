<script>
	import { resolve } from '$app/paths';
	import { page } from '$app/state';
</script>

<h1>Ya done goofed!</h1>
<p>{page.status}: {page.error?.message}</p>
<a href={resolve('/account/login')}>Go to login page</a>
