<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Home</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="stylesheet" href="css/style.css">

</head>
<body>
    <section class="header">
        <a href="home.php" class="logo">Mysture: Navigating the Unexplored</a>

        <nav class="navbar">
            <a href="home.php">Home</a>
            <a href="about.php">About</a>
            <a href="package.php">Packages</a>
            <a href="book.php">Bookings</a>
            <a href="register.php" class="fa fa-user-circle">SignUp</a>
        </nav>

        <div id="menu-btn" class="fas fa-bars"></div>
    </section>

    <section class="home">
        <div class="swiper home-slider">
            <div class="swiper-wrapper">
                <div class="swiper-slide slide" style="background:url(img/home-slide-1.jpg) no-repeat">
                    <div class="content">
                        <span>explore, discover, travel</span>
                        <h3>travel around the India</h3>
                        <a href="package.php" class="btn">discover more</a>
                    </div>
                </div>

                <div class="swiper-slide slide" style="background:url(img/home-slide-2.jpg) no-repeat">
                    <div class="content">
                        <span>explore, discover, travel</span>
                        <h3>discover new places</h3>
                        <a href="package.php" class="btn">discover more</a>
                    </div>
                </div>

                <div class="swiper-slide slide" style="background:url(img/home-slide-3.jpg) no-repeat">
                    <div class="content">
                        <span>explore, discover, travel</span>
                        <h3>make your tour worth</h3>
                        <a href="package.php" class="btn">discover more</a>
                    </div>
                </div>

                <div class="swiper-slide slide" style="background:url(img/home-slide-4.jpg) no-repeat">
                    <div class="content">
                        <span>explore, discover, travel</span>
                        <h3>with our exclusive packages</h3>
                        <a href="package.php" class="btn">discover more</a>
                    </div>
                </div>

                <div class="swiper-slide slide" style="background:url(img/home-slide-5.jpg) no-repeat">
                    <div class="content">
                        <span>explore, discover, travel</span>
                        <h3>and with two different travel plans</h3>
                        <a href="package.php" class="btn">discover more</a>
                    </div>
                </div>

            </div>

            <div class="swiper-button-next"></div>
            <div class="swiper-button-prev"></div>
        </div>
    </section>

    <section class="services">
        <h1 class="heading-title"> our services</h1>
        <div class="box-container">
            <div class="box">
                <img src="img/icon-1.png" alt="">
                <h3>adventure</h3>
            </div>

            <div class="box">
                <img src="img/tourguide.png" alt="">
                <h3>tour guide</h3>
            </div>

            <div class="box">
                <img src="img/treak.png" alt="">
                <h3>treaking</h3>
            </div>

            <div class="box">
                <img src="img/firecamp.png" alt="">
                <h3>camp fire</h3>
            </div>

            <div class="box">
                <img src="img/offroad.png" alt="">
                <h3>off road</h3>
            </div>

            <div class="box">
                <img src="img/camping.png" alt="">
                <h3>camping</h3>
            </div>

        </div>
    </section>

    <section class="home-about">
        <div class="image">
            <img src="img/globe.jpg" alt="">
        </div>

        <div class="content">
            <h3>about us</h3>
            <p>Mysture: Navigating the Unexplored offers Traditional 
                and Mystery Plans. Dynamic clues, ML-powered, lead to offbeat discoveries. 
                Validate exploration with image verification.</p>
                <a href="about.php" class="btn">read more</a>
        </div>
    </section>

    <section class="home-packages">
        <h1 class="heading"> our packages </h1>
        <div class="box-container">
            <div class="box">
                <div class="image">
                    <img src="img/ladakh.jpg" alt="">
                </div>
                <div class="content">
                    <h3>Ladakh</h3>
                    <p>High-altitude desert, breathtaking landscapes, vibrant Buddhist culture, and adventurous trekking opportunities.</p>
                    <a href="book.php" class="btn">book</a>
                </div>
            </div>

            <div class="box">
                <div class="image">
                    <img src="img/mandir2.jpg" alt="">
                </div>
                <div class="content">
                    <h3>Birla mandir: Delhi</h3>
                    <p>Sacred Hindu temple, spiritual sanctuary, and center of devotion and religious practices. Renovated by Birla Trust.</p>
                    <a href="book.php" class="btn">book</a>
                </div>
            </div>

            <div class="box">
                <div class="image">
                    <img src="img/kashmir.jpg" alt="">
                </div>
                <div class="content">
                    <h3>Kashmir</h3>
                    <p>Paradise on Earth, majestic mountains, serene lakes, rich cultural heritage, and many places to explore</p>
                    <a href="book.php" class="btn">book</a>
                </div>
            </div>
        </div>

        <div class="load-more"><a href="package.php" class="btn">load more</a></div>
    </section>

    <section class="home-offer">
        <div class="content">
            <h3>upto 30% off</h3>
            <p>Explore our website and seize the moment! Enjoy an exclusive 30% discount on all bookings. 
                Time is ticking, so secure your trip now to avoid missing out on this fantastic offer. Book 
                today and embark on your dream adventure at an unbeatable price!</p>
                <a href="book.php" class="btn">book now</a>
        </div>
    </section>

    <section class="footer">
        <div class="box-container">
            <div class="box">
                <h3>quick links</h3>
                <a href="home.php"><i class="fas fa-angle-right"></i> Home</a>
                <a href="about.php"><i class="fas fa-angle-right"></i> About</a>
                <a href="package.php"><i class="fas fa-angle-right"></i> Packages</a>
                <a href="book.php"><i class="fas fa-angle-right"></i> Bookings</a>
            </div>

            <div class="box">
                <h3>extra links</h3>
                <a href="#"><i class="fas fa-angle-right"></i> ask questions</a>
                <a href="#"><i class="fas fa-angle-right"></i> about us</a>
                <a href="#"><i class="fas fa-angle-right"></i> privacy policy</a>
                <a href="#"><i class="fas fa-angle-right"></i> terms of use</a>
            </div>

            <div class="box">
                <h3>extra links</h3>
                <a href="#"><i class="fas fa-angle-right"></i> ask questions</a>
                <a href="#"><i class="fas fa-angle-right"></i> about us</a>
                <a href="#"><i class="fas fa-angle-right"></i> privacy policy</a>
                <a href="#"><i class="fas fa-angle-right"></i> terms of use</a>
            </div>
            
            <div class="box">
                <h3>contact info</h3>
                <a href="#"><i class="fas fa-phone"></i> +91 1234567890</a>
                <a href="#"><i class="fas fa-phone"></i> +111-222-3333</a>
                <a href="#"><i class="fas fa-envelope"></i> mystrytravel@info.com</a>
                <a href="#"><i class="fas fa-map"></i> Gautam Buddh Nagar, India - 201310</a>
            </div>

            <div class="box">
                <h3>follow us</h3>
                <a href="#"> <i class="fab fa-facebook-f"></i> facebook</a>
                <a href="#"> <i class="fab fa-twitter"></i> X</a>
                <a href="#"> <i class="fab fa-instagram"></i> instagram</a>
                <a href="#"> <i class="fab fa-linkedin"></i> linkedin</a>
            </div>
        </div>

        <div class="credit"> created by <span>Team Mysture</span> | all rights reserved! </div>
    </section>










<script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
    <script src="js/script.js"></script>
</body>
</html>