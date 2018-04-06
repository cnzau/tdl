<?php
if (isset($_POST['_replyto'])){
	$sender_name=$_POST['sender_name'];
	$sender_email=$_POST['_replyto'];
	$tel=$_POST['tel'];
	$message=$_POST['message'] . "\n" . $tel;
        
    $to = "info@gritsoft.systems";
	$subject = "NeuInvest Form";
	
	$headers   = array();
	$headers[] = "MIME-Version: 1.0";
	$headers[] = "Content-type: text/plain; charset=iso-8859-1";
	$headers[] = "From: Grit Soft Systems <support@gritsoft.systems>";
	$headers[] = "Cc: Clement Nzau <clement.nzau@gmail.com>";
	$headers[] = "Bcc: Clement Nzau <clement.nzau@outlook.com>";
	$headers[] = "Reply-To: $sender_name <$sender_email>";
	//$headers[] = "Subject: {$subject}";
	$headers[] = "X-Mailer: PHP/".phpversion();
	@mail($to, $subject, $message, implode("\r\n", $headers));
}
header('location:../');
?>
