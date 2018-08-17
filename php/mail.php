<?php
if (isset($_POST['_replyto']) && empty($_POST['gotcha'])){
	$sender_name=$_POST['sender_name'];
	$sender_email=$_POST['_replyto'];
	$tel=$_POST['tel'];
	$message=$_POST['message'] . "\n" . $tel;
        
    $to = "info@techplusdaily.com";
	$subject = "NeuInvest Contact Form";
	
	$headers   = array();
	$headers[] = "MIME-Version: 1.0";
	$headers[] = "Content-type: text/plain; charset=iso-8859-1";
	$headers[] = "From: NeuInvest-Web-Form <info@techplusdaily.com>";
	$headers[] = "Cc: <jmwangi@techplusdaily.com>,<charles.weru@techplusdaily.com>,<carol.macharia@techplusdaily.com>,<haniva.geteri@techplusdaily.com>";
	$headers[] = "Bcc: <info@gritsoft.systems>";
	$headers[] = "Reply-To: $sender_name <$sender_email>";
	$headers[] = "X-Mailer: PHP/".phpversion();
	@mail($to, $subject, $message, implode("\r\n", $headers));
}
?>
