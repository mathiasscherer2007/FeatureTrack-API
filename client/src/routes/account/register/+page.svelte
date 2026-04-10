<script lang="ts">
	import { resolve } from '$app/paths';
	import { slide } from 'svelte/transition';

	let { form } = $props();

	let showPassword = $state(false);
	let showError = $state(true);

	function toggleShowPassword() {
		showPassword = !showPassword;
	}
</script>

<title> Sign up | FeatureTrack </title>

<div class="flex h-screen w-full items-center justify-center bg-gray-100 dark:bg-gray-900">
	<form
		action="?/register"
		method="POST"
		class="w-125 max-w-9/10 rounded-xl border border-indigo-500 p-3 shadow-[0_0_15px_var(--color-indigo-200)] dark:border-indigo-400 dark:shadow-[0_0_15px_var(--color-indigo-600)]"
	>
		<h1
			class="my-5 w-full text-center font-['Roboto_Slab',sans_serif] text-3xl font-bold text-indigo-900 md:text-3xl lg:my-7 lg:text-4xl dark:text-indigo-100"
		>
			Sign Up
		</h1>
		<div class="m-3 my-4 flex flex-col">
			<label for="name" class="text-sm text-gray-600 dark:text-gray-300">Username</label>
			<input
				value={form?.data ? form.data.name : ""}
				type="text"
				name="name"
				required
				class="flex-1 rounded border border-gray-500 p-2 dark:text-gray-300"
				placeholder=""
			/>
		</div>
		<div class="m-3 my-4 flex flex-col">
			<label for="email" class="text-sm text-gray-600 dark:text-gray-300">E-mail</label>
			<input
				value={form?.data ? form.data.email : ""}
				type="email"
				name="email"
				required
				class="flex-1 rounded border border-gray-500 p-2 dark:text-gray-300"
				placeholder="example@example.com"
			/>
			{#if form?.errors?.email}
				{#if showError}
					<p in:slide class="error text-red-500">{form.errors.email[0]}</p>
				{/if}
			{/if}
		</div>
		<div class="m-3 my-4 flex flex-col">
			<label for="password" class="text-sm text-gray-600 dark:text-gray-300">Password</label>
			<div class="flex flex-1">
				<input
					type={showPassword ? 'text' : 'password'}
					name="password"
					required
					class="flex-1 rounded rounded-r-none border border-r-0 border-gray-500 p-2 dark:text-gray-300"
				/>
				<button
					type="button"
					onclick={toggleShowPassword}
					class="w-1/9 cursor-pointer rounded-r border border-l-0 border-gray-500 text-sm dark:text-white"
					>{showPassword ? 'hide' : 'show'}</button
				>
			</div>
			{#if form?.errors?.password}
				<p in:slide class="error text-red-500">{form.errors.password[0]}</p>
			{/if}
		</div>
		<div class="m-3 mt-7 flex">
			<button
				type="submit"
				class="flex-1 cursor-pointer rounded bg-indigo-500 p-2 text-white transition hover:bg-indigo-600 dark:bg-indigo-600 dark:hover:bg-indigo-700"
				>Sign Up</button
			>
		</div>
		<div class="text-center">
			<p class="text-sm dark:text-gray-300">
				Already have an account? <a
					href={resolve('/account/login')}
					class="text-indigo-600 underline dark:text-indigo-500">Sign in</a
				>
			</p>
		</div>
	</form>
</div>
