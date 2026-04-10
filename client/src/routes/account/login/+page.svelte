<script>
	import { resolve } from '$app/paths';

	let showPassword = $state(false);

    function toggleShowPassword() {
        showPassword = !showPassword;
    }
</script>

<title>
    Log in | FeatureTrack
</title>

<div class="flex h-screen w-full items-center justify-center bg-gray-100 dark:bg-gray-900">
	<form
		action="?/login"
		method="POST"
		class="max-w-9/10 w-125 rounded-xl border border-indigo-500 dark:border-indigo-400 p-3 shadow-[0_0_15px_var(--color-indigo-200)] dark:shadow-[0_0_15px_var(--color-indigo-600)]"
	>
		<h1
			class="lg:my-7 my-5 w-full text-center font-['Roboto_Slab',sans_serif] lg:text-4xl md:text-3xl text-3xl font-bold text-indigo-900 dark:text-indigo-100"
		>
			Log in
		</h1>
		<div class="flex flex-col m-3 my-4">
			<label for="email" class="text-sm text-gray-600 dark:text-gray-300">E-mail</label>
			<input type="email" name="email" required class="flex-1 border border-gray-500 p-2 rounded dark:text-gray-300" placeholder="example@example.com" />
		</div>
		<div class="flex flex-col m-3 my-4">
			<label for="password" class="text-sm text-gray-600 dark:text-gray-300">Password</label>
			<div class="flex-1 flex">
			    <input type={showPassword ? "text" : "password"} name="password" required class="flex-1 border border-gray-500 border-r-0 rounded-r-none p-2 rounded dark:text-gray-300" />
                <button type="button" onclick={toggleShowPassword} class="w-1/9 text-sm border border-gray-500 border-l-0 rounded-r cursor-pointer dark:text-white">{showPassword ? "hide" : "show"}</button>
            </div>
		</div>
        <div class="m-3 mt-7 flex">
		    <button class="flex-1 p-2 rounded bg-indigo-500 dark:bg-indigo-600 text-white cursor-pointer hover:bg-indigo-600 dark:hover:bg-indigo-700 transition">Log in</button>
        </div>
		<div class="text-center">
			<p class="text-sm dark:text-gray-300">Don't have an account? <a href={resolve('/account/register')} class="text-indigo-600 dark:text-indigo-500 underline">Sign up</a></p>
		</div>
	</form>
</div>
