<?php

    $connection = mysqli_connect('localhost','root','','booking_db');

    if(!$connection) {
        die('Connection failed: ' . mysqli_connect_error());
    }

    if(isset($_POST['send'])){
        $name = mysqli_real_escape_string($connection, $_POST['name']);
        $email = mysqli_real_escape_string($connection, $_POST['email']);
        $phone = mysqli_real_escape_string($connection, $_POST['phone']);
        $address = mysqli_real_escape_string($connection, $_POST['address']);
        $location = mysqli_real_escape_string($connection, $_POST['location']);
        $guests = mysqli_real_escape_string($connection, $_POST['guests']);
        $arrivals = mysqli_real_escape_string($connection, $_POST['arrivals']);
        $leaving = mysqli_real_escape_string($connection, $_POST['leaving']);

        // Perform form validation here

        $request = "INSERT INTO book_form (name, email, phone, address, location, guests, arrivals, leaving) VALUES
        ('$name','$email','$phone','$address','$location','$guests','$arrivals','$leaving')";

        if(mysqli_query($connection, $request)) {
            header('Location: book.php');
            exit();
        } else {
            echo 'Error: ' . mysqli_error($connection);
        }
    } else {
        echo 'Something went wrong. Please try again.';
    }
