<script>
	import Title from '../Title.svelte';
	import {themes} from '../../store/store'
</script>

<div class='sticky top-0 z-30 flex h-14 w-full justify-center bg-opacity-90 backdrop-blur transition-all duration-100 
bg-base-100 text-base-content shadow-sm'>
<div class="navbar bg-base-100">
	<div class="flex-none">
		<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
		<!-- svelte-ignore a11y-label-has-associated-control -->
		<label for="my-drawer-2" tabindex="0" class="btn btn-ghost btn-circle">
			<svg
				xmlns="http://www.w3.org/2000/svg"
				class="h-5 w-5"
				fill="none"
				viewBox="0 0 24 24"
				stroke="currentColor"
				><path
					stroke-linecap="round"
					stroke-linejoin="round"
					stroke-width="2"
					d="M4 6h16M4 12h16M4 18h7"
				/></svg
			>
		</label>

		<div class="hidden md:flex flex-auto sm:block">
			<Title />
		</div>
	</div>
	<div class="flex flex-1">
		<!-- spacer-->
	</div>
	<div class="flex-0">
		<div class="items-center flex-none hidden ">
			<a sveltekit:prefetch="" href="/components" class="btn btn-ghost drawer-button normal-case"
				><svg
					width="20"
					height="20"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 24 24"
					class="inline-block h-6 w-6 fill-current md:mr-2"
					><path
						d="M6.5,22 C4.01471863,22 2,19.9852814 2,17.5 C2,15.0147186 4.01471863,13 6.5,13 C8.98528137,13 11,15.0147186 11,17.5 C11,19.9852814 8.98528137,22 6.5,22 Z M17.5,22 C15.0147186,22 13,19.9852814 13,17.5 C13,15.0147186 15.0147186,13 17.5,13 C19.9852814,13 22,15.0147186 22,17.5 C22,19.9852814 19.9852814,22 17.5,22 Z M6.5,11 C4.01471863,11 2,8.98528137 2,6.5 C2,4.01471863 4.01471863,2 6.5,2 C8.98528137,2 11,4.01471863 11,6.5 C11,8.98528137 8.98528137,11 6.5,11 Z M17.5,11 C15.0147186,11 13,8.98528137 13,6.5 C13,4.01471863 15.0147186,2 17.5,2 C19.9852814,2 22,4.01471863 22,6.5 C22,8.98528137 19.9852814,11 17.5,11 Z M17.5,9 C18.8807119,9 20,7.88071187 20,6.5 C20,5.11928813 18.8807119,4 17.5,4 C16.1192881,4 15,5.11928813 15,6.5 C15,7.88071187 16.1192881,9 17.5,9 Z M6.5,9 C7.88071187,9 9,7.88071187 9,6.5 C9,5.11928813 7.88071187,4 6.5,4 C5.11928813,4 4,5.11928813 4,6.5 C4,7.88071187 5.11928813,9 6.5,9 Z M17.5,20 C18.8807119,20 20,18.8807119 20,17.5 C20,16.1192881 18.8807119,15 17.5,15 C16.1192881,15 15,16.1192881 15,17.5 C15,18.8807119 16.1192881,20 17.5,20 Z M6.5,20 C7.88071187,20 9,18.8807119 9,17.5 C9,16.1192881 7.88071187,15 6.5,15 C5.11928813,15 4,16.1192881 4,17.5 C4,18.8807119 5.11928813,20 6.5,20 Z"
					/></svg
				> Components</a
			>
		</div>
		<div title="Change Theme" class="dropdown dropdown-end ">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<div tabindex="0" class="btn gap-1 normal-case btn-ghost">
				<svg
					width="20"
					height="20"
					xmlns="http://www.w3.org/2000/svg"
					fill="none"
					viewBox="0 0 24 24"
					class="inline-block h-5 w-5 stroke-current md:h-6 md:w-6"
					><path
						stroke-linecap="round"
						stroke-linejoin="round"
						stroke-width="2"
						d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
					/></svg
				> <span class="hidden md:inline">Theme</span>
				<svg
					width="12px"
					height="12px"
					class="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 2048 2048"
					><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" /></svg
				>
			</div>
			<div
				class="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px max-h-96 h-[70vh] w-52 overflow-y-auto shadow-2xl mt-16"
			>
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<div class="grid grid-cols-1 gap-3 p-3" tabindex="0">
					{#each themes as theme}
						<div
							class="outline-base-content overflow-hidden rounded-lg outline-2 outline-offset-2"
							data-set-theme={theme}
							data-act-class="outline"
						>
							<div
								data-theme={theme}
								class="bg-base-100 text-base-content w-full cursor-pointer font-sans"
							>
								<div class="grid grid-cols-5 grid-rows-3">
									<div class="col-span-5 row-span-3 row-start-1 flex gap-1 py-3 px-4">
										<div class="flex-grow text-sm font-bold">{theme}</div>
										<div class="flex flex-shrink-0 flex-wrap gap-1">
											<div class="bg-primary w-2 rounded" />
											<div class="bg-secondary w-2 rounded" />
											<div class="bg-accent w-2 rounded" />
											<div class="bg-neutral w-2 rounded" />
										</div>
									</div>
								</div>
							</div>
						</div>
					{/each}
				</div>
			</div>
		</div>
		<div title="Change Language" class="dropdown dropdown-end">
			<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
			<div tabindex="0" class="btn btn-ghost gap-1 normal-case">
				<svg
					class="inline-block h-4 w-4 fill-current md:h-5 md:w-5"
					xmlns="http://www.w3.org/2000/svg"
					width="20"
					height="20"
					viewBox="0 0 512 512"
					><path
						d="M363,176,246,464h47.24l24.49-58h90.54l24.49,58H480ZM336.31,362,363,279.85,389.69,362Z"
					/><path
						d="M272,320c-.25-.19-20.59-15.77-45.42-42.67,39.58-53.64,62-114.61,71.15-143.33H352V90H214V48H170V90H32v44H251.25c-9.52,26.95-27.05,69.5-53.79,108.36-32.68-43.44-47.14-75.88-47.33-76.22L143,152l-38,22,6.87,13.86c.89,1.56,17.19,37.9,54.71,86.57.92,1.21,1.85,2.39,2.78,3.57-49.72,56.86-89.15,79.09-89.66,79.47L64,368l23,36,19.3-11.47c2.2-1.67,41.33-24,92-80.78,24.52,26.28,43.22,40.83,44.3,41.67L255,362Z"
					/></svg
				>
				<svg
					width="12px"
					height="12px"
					class="ml-1 hidden h-3 w-3 fill-current opacity-60 sm:inline-block"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 2048 2048"
					><path d="M1799 349l242 241-1017 1017L7 590l242-241 775 775 775-775z" /></svg
				>
			</div>
			<div
				class="dropdown-content bg-base-200 text-base-content rounded-t-box rounded-b-box top-px mt-16 w-56 overflow-y-auto shadow-2xl"
			>
				<!-- svelte-ignore a11y-no-noninteractive-tabindex -->
				<ul class="menu menu-compact gap-1 p-3" tabindex="0">
					<li>
						<button class="flex active"
							><img
								loading="lazy"
								width="20"
								height="20"
								alt="English"
								src="https://cdnjs.cloudflare.com/ajax/libs/twemoji/14.0.0/svg/1f1ec-1f1e7.svg"
							/> <span class="flex flex-1 justify-between">English </span></button
						>
					</li>
				</ul>
			</div>
		</div>
		<span
			class="tooltip tooltip-bottom before:text-xs before:content-[attr(data-tip)]"
			data-tip="GitHub"
			><div class="flex-none items-center">
				<a
					aria-label="Github"
					target="_blank"
					href="https://github.com/harish876"
					rel="noopener noreferrer"
					class="btn btn-ghost drawer-button btn-square normal-case"
					><svg
						width="20"
						height="20"
						xmlns="http://www.w3.org/2000/svg"
						viewBox="0 0 512 512"
						class="inline-block h-5 w-5 fill-current md:h-6 md:w-6"
						><path
							d="M256,32C132.3,32,32,134.9,32,261.7c0,101.5,64.2,187.5,153.2,217.9a17.56,17.56,0,0,0,3.8.4c8.3,0,11.5-6.1,11.5-11.4,0-5.5-.2-19.9-.3-39.1a102.4,102.4,0,0,1-22.6,2.7c-43.1,0-52.9-33.5-52.9-33.5-10.2-26.5-24.9-33.6-24.9-33.6-19.5-13.7-.1-14.1,1.4-14.1h.1c22.5,2,34.3,23.8,34.3,23.8,11.2,19.6,26.2,25.1,39.6,25.1a63,63,0,0,0,25.6-6c2-14.8,7.8-24.9,14.2-30.7-49.7-5.8-102-25.5-102-113.5,0-25.1,8.7-45.6,23-61.6-2.3-5.8-10-29.2,2.2-60.8a18.64,18.64,0,0,1,5-.5c8.1,0,26.4,3.1,56.6,24.1a208.21,208.21,0,0,1,112.2,0c30.2-21,48.5-24.1,56.6-24.1a18.64,18.64,0,0,1,5,.5c12.2,31.6,4.5,55,2.2,60.8,14.3,16.1,23,36.6,23,61.6,0,88.2-52.4,107.6-102.3,113.3,8,7.1,15.2,21.1,15.2,42.5,0,30.7-.3,55.5-.3,63,0,5.4,3.1,11.5,11.4,11.5a19.35,19.35,0,0,0,4-.4C415.9,449.2,480,363.1,480,261.7,480,134.9,379.7,32,256,32Z"
						/></svg
					></a
				>
			</div></span
		>
	</div>
</div>
</div>
