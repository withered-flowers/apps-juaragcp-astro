Countdown JuaraGCP - Astro

Disclaimer:

    Kode yang dibuat di sini masih minimal dan masih bisa di-refactor lagi 😉

Aplikasi ini dibuat untuk menginformasikan countdown event JuaraGCP dimulai s.d. event JuaraGCP ini selesai.

Aplikasi ini bersifat Web Apps yang akan dideploy pada Vercel, salah satu cloud hosting untuk membuat aplikasi, dengan menggunakan beberapa functions (vercel functions)

Tech stack yang digunakan untuk membuat aplikasi ini adalah:

    Astro sebagai Meta-Framework
    Svelte sebagai Renderer tambahan (Framework)
    Vite sebagai build tools
    Tailwind sebagai CSS Utility
    Day.js untuk pustaka pemanipulasi tanggal
    Vercel sebagai tempat hosting aplikasi ini dan functionsnya

Untuk menjalankan aplikasi ini, dapat dilakukan dengan cara:

  1. Clone repository ini dan Repository BackEnd (functions) yang ada di [sini](https://github.com/withered-flowers/apps-validate-qwiklabs-juaragcp)
  1. Deploy Functions yang ada di BE tersebut ke Vercel / hosting sejenisnya (Config yang ada di repo tersebut sudah disesuaikan untuk deploy di vercel)
  1. Deploy Repository ini, dan sebelum deploy set environment variabel dengan nama `PUBLIC_BE_URL` yang mengarah ke domain backend functions tersebut
  1. Selesai.
    

Selamat membaca