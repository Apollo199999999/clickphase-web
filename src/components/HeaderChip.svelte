<script>
    import "fluent-svelte/theme.css";
</script>

<div>
    <span class="header-chip">
        <slot />
    </span>
</div>

<style>
    .header-chip {
        display: inline-flex;
        margin-block-end: 8px;
        padding: 4px 16px;
        border-radius: 50px;
        background-color: var(--fds-subtle-fill-secondary);
        color: var(--fds-text-secondary);
        font-size: var(--fds-body-font-size);
        font-weight: 600;
        line-height: 18px;
        user-select: none;
        margin-bottom: 1em;
    }
</style>
