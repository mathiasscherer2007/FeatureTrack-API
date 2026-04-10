<script>
    import { page } from "$app/state";
</script>

<h1>Ya done goofed!</h1>
<p>{page.status}: {page.error?.message}</p>