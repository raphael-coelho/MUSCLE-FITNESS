
document.addEventListener("DOMContentLoaded", function() {
    let botao = document.querySelector(".botao-pesquisa button");

    if (botao) {
        botao.addEventListener("click", function() {
            window.open("https://www.google.com/search?q=muscle+fitness+academias+perto&sca_esv=1d0cabc81ac55904&sxsrf=AHTn8zo2CMb3pz8AU8KJPv004VQtIfva9g%3A1739160191579&ei=f3qpZ7GFI5_c5OUPn5SB6AI&ved=0ahUKEwjxwLTLnLiLAxUfLrkGHR9KAC0Q4dUDCBA&uact=5&oq=muscle+fitness+academias+perto&gs_lp=Egxnd3Mtd2l6LXNlcnAiHm11c2NsZSBmaXRuZXNzIGFjYWRlbWlhcyBwZXJ0bzIFECEYoAEyBRAhGKABMgUQIRiSAzIFECEYkgMyBRAhGJIDMgUQIRiSAzIFECEYkgMyBRAhGJIDSOQrUI0HWKUqcAF4AZABAJgBuwGgAbYoqgEEMC4zMLgBA8gBAPgBAZgCH6AC9CjCAgoQABiwAxjWBBhHwgIEECMYJ8ICChAjGIAEGCcYigXCAgoQABiABBhDGIoFwgIIEAAYgAQYsQPCAg4QLhiABBixAxjRAxjHAcICCxAAGIAEGLEDGIMBwgIFEC4YgATCAgUQABiABMICEBAuGIAEGNEDGEMYxwEYigXCAg0QABiABBixAxhDGIoFwgIOEC4YgAQYxwEYjgUYrwHCAg0QABiABBixAxgUGIcCwgILEC4YgAQYxwEYrwHCAg0QLhiABBjRAxjHARgKwgIIEAAYgAQYywHCAg4QLhiABBjHARjLARivAcICBhAAGBYYHsICCBAAGBYYChgewgIIEAAYgAQYogTCAgUQABjvBcICBBAhGBXCAgUQIRifBcICBxAhGKABGAqYAwCIBgGQBgiSBwQxLjMwoAe79wE&sclient=gws-wiz-serp", "_blank");
        });
    }
});