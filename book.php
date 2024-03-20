<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Booking Trip</title>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.css"/>
    <link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/6.5.1/css/all.min.css">
    <link rel="stylesheet" href="css/style.css">
    <script src="https://www.google.com/recaptcha/api.js" async defer></script>

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

    <div class="heading" style="background: url(img/valleyofflowers.jpg) no-repeat">
        <h1>Bookings</h1>
    </div>

    <section class="booking">
        <h1 class="heading-title">book your trip</h1>

        <form action="book_form.php" method="post" class="book-form">
            <div class="flex">

                <div class="inputBox">
                    <span>name :</span>
                    <input type="text" placeholder="enter your name" name="name">
                </div>

                <div class="inputBox">
                    <span>email :</span>
                    <input type="email" placeholder="enter your email" name="email">
                </div>

                <div class="inputBox">
                    <span>phone :</span>
                    <input type="number" placeholder="enter your phone number" name="phone">
                </div>

                <div class="inputBox">
                    <span>address :</span>
                    <input type="text" placeholder="enter your address" name="address">
                </div>

                <div class="inputBox">
                    <span>where to :</span>
                    <select name="location">
                        <option value="destination1">Ladakh</option>
                        <option value="destination2">Birla Mandir</option>
                        <option value="destination3">Kashmir</option>
                        <option value="destination1">Taj Mahal</option>
                        <option value="destination1">Lakshadweep</option>
                        <option value="destination1">Valley of Flowers: Himanchal</option>
                        <option value="destination1">Humayun Tomb</option>
                        <option value="destination1">Leh</option>
                        <option value="destination1">Varansi</option>
                        <option value="destination1">Coorg Falls:Karnatka</option>
                        <option value="destination1">Sikkim</option>
                        <option value="destination1">Jaipur</option>
                    </select>
                </div>

                <div class="inputBox">
                    <span>how many :</span>
                    <input type="number" placeholder="number of guests" name="guests">
                </div>

                <div class="inputBox">
                    <span>arrivals :</span>
                    <input type="date" name="arrivals">
                </div>

                <div class="inputBox">
                    <span>leaving :</span>
                    <input type="date" name="leaving">
                </div>

            </div>

            <div class="g-recaptcha" data-sitekey="6LcC3JcpAAAAALjRrK-FMRaQQyzDaY1Pw0s9DOFb"></div>

            <input type="submit" value="submit" class="btn" name="send">

        </form>
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