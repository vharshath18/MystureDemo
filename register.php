<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Register</title>
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

    <div class="register">
        <div class="form-wrapper">
            <h2>Login/Sign Up</h2>
            <div class="btn-group">
                <button id="signInBtn" class="btn" onclick="toggleForm('signInForm')">Sign In</button>
                <button id="signUpBtn" class="btn active" onclick="toggleForm('signUpForm')">Sign Up</button>
            </div>
            
            <form id="signInForm" class="form" style="display: none;">
                <input type="email" placeholder="Email or Phone" required>
                <input type="password" placeholder="Password" required>
                <div class="g-recaptcha" data-sitekey="6LcC3JcpAAAAALjRrK-FMRaQQyzDaY1Pw0s9DOFb"></div>
                <button type="submit" value="submit" class="btn" name="send">Sign In</button>
            </form>
            
            <form id="signUpForm" class="form">
                <input class="name" type="text" placeholder="Name" required>
                <input type="email" placeholder="Email" required>
                <input type="tel" placeholder="Phone" required>
                <select name="occupation" id="occupation" required>
                    <option value="" disabled selected>Select Occupation</option>
                    <option value="govt">Government Service</option>
                    <option value="private">Private Service</option>
                    <option value="student">Student</option>
                    <option value="unemployed">Unemployed</option>
                </select>
                <input type="password" placeholder="New Password" required>
                <input type="password" placeholder="Rewrite Password" required>
                <div class="g-recaptcha" data-sitekey="6LcC3JcpAAAAALjRrK-FMRaQQyzDaY1Pw0s9DOFb"></div>
                <button type="submit" value="submit" class="btn" name="send">Sign Up</button>
            </form>
        </div>
    </div>

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