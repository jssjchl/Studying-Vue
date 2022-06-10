<template>
    <div>
        <header>
            <slot name ="header-area"></slot>
        </header>
        <main>
            <slot></slot>
        </main>
        <footer>
            <slot name="footer-area"></slot>
        </footer>
    </div>
</template>