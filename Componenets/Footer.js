function generateFooter() {
    return `
    
    <footer class="footer">
    <div class="container">
        <div class="row">
            <div class="footer-col">
                <a href="../index.html"><img src="images/logo1.png" alt="company_logo" class="footer-logo"/></a>
                <ul class="footer-1">
                    <li style="color: #fff"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAA0RJREFUWEft11nodlMUBvDfZ55SvsiUKUMfV8oYGUKGTOGTKIkLmVK4UIaQ8ULkQkQyU4rIcEGKkHm4IZTMSuZ5LHq0Th2v933P8HfxJc/VOfvs9eznrLXX2msvsoxh0TKmx39G0GIsxaHYAhuUpz/B23gA9+KroREY6qGNcR6Ow0odi/2Cm3A5PuorbIigI3FHDyGTa/+Io/BQH1F9BZ2NKyYIn8H9eApv1bcl2B1HYMeJ+Sfj+i5RfQQdjbtaRG/ieDzXQb4/bsBGNe8PHIRH5tl1Cdocr2PlInkNe+PLrj+t7+vjCWxV798inJ/Psu8SlEw5vIzfwU74YoLsQlxQYxch721siJexbg1eh1PGCNoab7QMd8BLU4i6BMUkoXqwbH9HPDfVS/M8lPS+uEiyeQ+b8Vd9BMX0RWxfHCfg5ml88wQ9jV3L6BjcvUBBZ+HK4rinSsE/KOcJeg+blEUypSluk3tkT+xR856sTdxeqJm/XSvkryDvgwT9gNXKIln2az0nfYeg+em1Wtn5NfI+SNDPrXRfE98tUFA4vimOn1o/+zdR80KWgzLZEKQCN9V4bMi2qZoWvg+Rc3GQh1LQmr1x4JwK2zfL0hkkW4NHsd9QQcmIZEZwI06csXH6CrqluoTQXFpdwyAP7YPHyiJ9zXqtjd0m6iNoFXyGNcpwFzw71EMrVqybkj/rtO4j6AxcVQLerfNsarZ2nWXnlHvDlU2+2QwvzYjmX8Or4gOsXZNOw7WzDLoErV5kaVmDS3D+vNWnfLsGp9f4+9gSv40VFLuTkBM6iJt3xgs9Re2Fx1tz04eng5iJLg/FMHOeR077IDUkz592iNq0hK9T89KYpXzMRR9BIcjeSXOWahukv9kNqbjTkHnpKNPCBB9j23mNWUPSV1DmH4CHy2N5T9N+SIWxLWr5ClNTVHP7SJjzQ50YIihkk83+1TiztUr4bsWxrbHOfdNWOVRQbO9E+qMGaeRPxQq4vS6QzbdkZDKzN8YISkjSrOWe1uDVqjc5hBtchnN7K6mJYwTFNN64DwfPWHCUmHCNFRTb5arnTjVv8H3dKBK6UViIoGbBXAhvQxq6fZGL5Gj8G4JGLz7N8H9BXe78E4CTnSUze3MsAAAAAElFTkSuQmCC"/><span style="margin-left: 7px;">Lorem ipsumm lorem</span></li>
                    <li style="color: #fff"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAxRJREFUWEftl0moT3EUxz+PCMmQZ0EWEkXZKAtJb0cUMksh8/TM85ShKCwMmeeIIuMCG8NChGxZiJREybCThbGvzq3z7v93//c/3Pt6ytn9hnvO53d+53fOuTU0MalpYjz8s0AbgTnAUWB7nl4txUPHgNkO4gCwKC+oYkBak0c8TMSRG1QSkOZPADOcJx4Ag9x4H7A0a08lAR0G5jljh4B6YAewJk+oENBA4KEzeh6YAvy2ub3AkrygQkCrgZ1m8A4wFPgZu5q4B7cAW7O4vhDQeve09cT15OPSDHgB9LSFr0DbvIAUO/KARK/Mx1Jk8zgwywHIO/JS1RLy0DDglmm+DQyJWZHxTW5OeWpu1SSmIATUFXhn65+AzjFjX4CONncOmOoCvmqupGf/Huhi2vsCz52lR8AAG48FrlZN4RQkAZ2xk2vrWvfqNF4F7DIdl4HxjQE0Drhkhl4BvZxRee4t0Bz4bmtvsoJK8lAr4APQzgwNB246o96D14ExWcVRseKqAqpyIXni4kbj3sAz85LG2rs4ACX9ymMq0CW1LsWAugGvgRYGNQm44Ly0DNjtxrriDcBLm1PyVIGe7vakFuS0fkgKdHLJR6AP8NkZ2GYQPoRUbi4Cg4EJgdjSIVYkxVwaUAc7ca0puGeJ0tc2xdepQL7yNu8DdW5CBVoeLpA0IH2gnuik+/J0rE/SkpKn4mgE0DpmRS3LukDrsgdYHicqBUjfHAQWuI9VLuYDv2IK9To13w8YZflK1xqJIHxTVwBVKpAU7gcWOuXXrE9SpS9HirYu5QDJqCr6ZmddNU+F1eeoNDi9Pr3EHrbxG9Am+qhcIH03E9CVSXEkdy3fPE6hkT0lVXWgkTRoXSoBkqL+wFlLA57hKXAEUAFWyVFp8YfXa5zm5gr6rUqBpFMJUw2/grRTwDOCkeeU5SUK9JFuX7xX/7tUDVCkuyUwGVgZ8FjSDV4BJgZ69UyAvFElSXUK+nPxHYLfcwMYDfwI0WbhoSQvtLcirELc3W5DHYTiJp6/GgRaysNo3OU8PVTRSf4DpbntD5R6hyX+4tTDAAAAAElFTkSuQmCC"/><span style="margin-left: 7px;">(+212) 695 222 777</span></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>Links</h4>
                <ul>
                    <li class="footer-links"><a href="../index.html">Home</a></li>
                    <li class="footer-links"><a href="../about.html">About</a></li>
                    <li class="footer-links"><a href="../features.html">Features</a></li>
                    <li class="footer-links"><a href="../services.html">Services</a></li>
                    <li class="footer-links"><a href="../contact.html">Contact Us</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>USEFUL LINKS</h4>
                <ul>
                    <li class="footer-links" style="color: #000;">><a href="/faquestion.html">FAQ</a></li>
                </ul>
            </div>
            <div class="footer-col">
                <h4>follow us</h4>
                <div class="social-links">
                    <a href="#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAsFJREFUWEftl0uojVEUx383ySPvKOWdxESUIsIAA+mWmCBJKaVwXRGRd4TI2+RSJt5FUlLCRIiYcEsMKKS8Bgh5Rf/a5/bZ9vM7N91k1anTt9de67fX3nuttWtoYVLTwnj4Z4DGArOAUUAP81OwXwOvgFvAMeBm7g7kRKgtsACoB/olOnoM7AYOAV9S5qQCzQO2A91TjDp0FLWlwPHY/BQggayIGUocXwtsDumGgDR2BJib6CxVbR+wxKccAtoPLEr1YvQ+A7fN/9ZAG2A40MqysxHY4LLtA9J+78qAeQqsA84B76x5s4GjDltzXN9dQF0AOeiYCPQEGA289OhPA846xp4DA4GvxTEX0CZAhy9VJgFXAsrTgTOecR2JgyEg7fsboFMijVbZx6GrMzPM2BkHaJEuUZ5SlJrEjtBk4GIijNTOA1Mt/UEmYi5Ql2mB36sM2EANwPwMoNPADEtf13pxho31xQjaQHeAERnGTgEzLf0Tjm8hkxeAWl+EngG9qwQ66YhayGQjMNQH9AlolwEk56r6RckFeg909gF9BNoHgB4BgzOApXoAWBiYI58dfEBKcv2bGegyMDFg87erbx/qGybr+uY/BIZkRki5qldgzjVgvC9CO4FlzRghbcWHyAK2Aat8QBMiZaBYzWXjqiMLq8jKjkQXZGQESO3wdR+QSocKa8/EbXHloZxbpjQzAPjhA9L31cCWvwSkNmdP0Ve17Uc1EXoL9AWU+5rE16CpYKrZiklZoJ+ACvkl20Gohd0L1EWIygKpHVFR/UNiTf5hQE8gn5QB2mrOqdNmyjNIq1kDzmd3DtB38zZTKfFKCpAmjzGPPPvFmgr0wHQA92OHMhVIdpTk1HitBLoZwzGgFyaF6Cn9LQaj8Rygij21ClNMz6yru8NytBzoCtwF1HwlvekrNsoApSy0tM5/oFjofgGBN4IlXRXfPQAAAABJRU5ErkJggg=="/></a>
                    <a href="#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAlFJREFUWEft1kvoTVEUx/HP32sijzBRiLwyIyEDoaSQ8kzCCEVKKRRCyCuPoQzIwEQGkjBlRpISKYmQTAgTSXm1at/6d517zz5/9+Y/uLtOnTprrf09v7X3WqtLL1tdvYxHB6gsIx2F/odCE7EdszEFT3AfF9N7jakfJuFZd8iilA3DPFwr+5uC7/twEP0b+K7DU8zHNizF8zKgHTiFFbhRAWo9LlewP57gB+FTza9IoatYjZ9YhpsZm4zACwzNsA2TO/iM0Umtr82AQpWQMtYvnMUBfGuy2RpcyYSpmX1I5+xlWcr24mhd8LeIVF5PkPV7R4p3VgAKiAV4Xe9TlLK5uNsg+HtcSk/3P7uAjRWAduF0kX0RUB/EOVpZskFIHlDxTMCsCkCbET/x1yoCWogH6drH9WzHWoLbuUChznK8wfh20GAqHucCncTuNoFE2LjiQ1JZyUpZ0D+ibaNJdICG57NRtz+M/W1SaVPqa4Xhm40fcRPiag5uIdgXjEppqwy0CAMQVXhti6COpKrfMFwzhabjYYtAaod5LD42i1k2MZ7D1hZBhcql/a4MKL6fSX3sX7jO5/5YGVANYgZi3pmGORXJbqVr/j3HLxeoL7bgEIbnBE42kaIN+JHr0wwoZt4xqcwfw+TcoPiN8IlaFu/Zqx5ocWob41K9iM5fdUUPjAN8r6pj2BcpFErswSoMrBA0hvdoCydKpsumIZulLIpijB8x58xE1JCRCTImvVdp4ouuHQf3XQX4HhXGVsSvHCP3llUO3FOHDlCZch2FyhT6Az6rXyWgraXlAAAAAElFTkSuQmCC"/></a>
                    <a href="#"><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACQAAAAkCAYAAADhAJiYAAAAAXNSR0IArs4c6QAAAcVJREFUWEft2DusDHEUx/HPFRQk4pEo1Kg0ohGFZ6MkNG5UdEQrCm+lVieho5CgVIhHI9xCQalDSSfeETkyc3MymdndzM7uXsn8q/n/Z8453/2d85//mZ2zxMbcEuPRAw3LSJNCB7FzmPGY91/iUdVHHdAhPBgz2Kjmh/EwP1wHdBmXRvU45nNXEPEWx38J9Am38QK7cAIbxlSmNG+lUNXoGs7PEmg/niaAA3g8S6BQ5GICmLlCn3ETr4oaOon1s1Soo9i1bloV9XM8S+52Y18xj/T9Ka5DtTN4j1tYwDdsxzlsrEFqBVQ1uoCrhfMV+F1cb8YpnE1rJcMaPMGOCtREgdbiK3425DiUej1NoDLWOmzBG3yvALxDKNnpi7EpZRHkCO7xr8/6gK0VqLh3dJpAb7EtBQzA+2l+A6e7BoqXZBRjjFzUMf+C1SlgFPj1NI/NEApPLWU/sDIFjNaihI/lnO6Yd7LLBin0C8sHKBB9Vu5/eqCqAr1CU6mh6uG6B3uLws2Ha7mLlqWiHmTbepc1HE2dLLfaZZ1EbnAyEtAx3JkkRfI9j7s5Vt132Socx6YJQ30sfni0LIuj//djmOq9QsMU+gu1k5wlH/mOAgAAAABJRU5ErkJggg=="/></a>
                </div>
            </div>
            <hr/>
            
        </div>
    </div>
    <p class="footer-rights">Copyright © Applight 2023. All rights reserved.</p>
</footer>

    
    `;
}

// Attach the navbar HTML to the 'navbar' element in the document
document.addEventListener('DOMContentLoaded', function () {
    const footer = document.getElementById('footer');
    if (footer) {
        footer.innerHTML = generateFooter();
    }
});