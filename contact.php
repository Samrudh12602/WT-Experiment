<?php
if ($_SERVER['REQUEST_METHOD'] === 'POST') {
    $name = $_POST['name'];
    $email = $_POST['email'];
    $subject = $_POST['subject'];
    $message = $_POST['message'];

    // Process the form data as needed (e.g., send an email)
    // Here's an example of sending an email using the PHP mail() function:
    $to = 'your-email@example.com';
    $headers = "From: $name <$email>";
    $body = "Subject: $subject\n\n$message";
    if (mail($to, $subject, $body, $headers)) {
        echo 'Thank you! Your message has been sent.';
    } else {
        echo 'Oops! Something went wrong. Please try again later.';
    }
}
?>