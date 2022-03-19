<!-- Code taken in large parts from: https://codepen.io/nohoid/pen/eYXpNL -->

<div class="mask">
    <div class="rainbow" />
</div>

<style>
    /*image mask*/
    .mask {
        height: 35em;
        -webkit-mask-image: url("/mask.png");
        mask-image: url("/mask.png");
        -webkit-mask-repeat: no-repeat;
        mask-repeat: no-repeat;
        mask-size: 100% 35em;
        -webkit-mask-size: 100% 35em;
    }

    @media only screen and (max-width: 1000px) {
        .mask {
            height: 120vw;
            -webkit-mask-image: url("/mask.png");
            mask-image: url("/mask.png");
            -webkit-mask-repeat: no-repeat;
            mask-repeat: no-repeat;
            mask-size: 100% 120vw;
            -webkit-mask-size: 100% 120vw;
        }
    }

    /* rainbow background */
    .rainbow {
        height: 100%;
        width: 100%;
        background: linear-gradient(
            124deg,
            #ff2400,
            #e81d1d,
            #e8b71d,
            #e3e81d,
            #1de840,
            #1ddde8,
            #2b1de8,
            #dd00f3,
            #dd00f3
        );
        background-size: 1800% 1800%;
        -webkit-animation: rainbow 18s ease infinite;
        -z-animation: rainbow 18s ease infinite;
        -o-animation: rainbow 18s ease infinite;
        animation: rainbow 18s ease infinite;
    }

    @-webkit-keyframes rainbow {
        0% {
            background-position: 0% 82%;
        }
        50% {
            background-position: 100% 19%;
        }
        100% {
            background-position: 0% 82%;
        }
    }
    @-moz-keyframes rainbow {
        0% {
            background-position: 0% 82%;
        }
        50% {
            background-position: 100% 19%;
        }
        100% {
            background-position: 0% 82%;
        }
    }
    @-o-keyframes rainbow {
        0% {
            background-position: 0% 82%;
        }
        50% {
            background-position: 100% 19%;
        }
        100% {
            background-position: 0% 82%;
        }
    }
    @keyframes rainbow {
        0% {
            background-position: 0% 82%;
        }
        50% {
            background-position: 100% 19%;
        }
        100% {
            background-position: 0% 82%;
        }
    }
</style>
