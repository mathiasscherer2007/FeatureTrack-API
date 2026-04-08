<script>
	import { resolve } from '$app/paths';
</script>

<title>
    Log in | FeatureTrack
</title>

<div class="flex h-screen w-full items-center justify-center bg-gray-100">
	<form
		action="?/login"
		method="POST"
		class="rounded-xl border border-indigo-500 p-3 shadow-[0_0_15px_var(--color-indigo-200)]"
	>
		<h1
			class="my-7 w-full text-center font-['Roboto_Slab',sans_serif] text-4xl font-bold text-indigo-900"
		>
			Log in
		</h1>
		<div class="w-max min-w-100 flex flex-col m-3 my-4">
			<label for="email" class="text-sm text-gray-600">E-mail</label>
			<input type="email" name="email" required class="flex-1 border border-gray-500 p-2 rounded" placeholder="example@example.com" />
		</div>
		<div class="w-max min-w-100 flex flex-col m-3 my-4">
			<label for="password" class="text-sm text-gray-600">Password</label>
			<input type="password" name="password" required class="flex-1 border border-gray-500 p-2 rounded" />
		</div>
        <div class="w-100 m-3 mt-7 flex">
		    <button class="flex-1 border p-2 rounded bg-indigo-500 text-white cursor-pointer hover:bg-indigo-600 transition">Log in</button>
        </div>
		<div class="w-100 text-center">
			<p class="text-sm">Don't have an account? <a href={resolve('/account/register')} class="text-indigo-600 underline">Sign up</a></p>
		</div>
	</form>
</div>
