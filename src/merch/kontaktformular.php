<?php 

if (isset($_POST['submit'])) {
    $navn =$_POST['navn'];
    $emailFra =$_POST['email'];
    $adresse =$_POST['adresse'];
    $besked =$_POST['besked'];

    if (empty($navn) || empty($emailFra) || empty($besked)) {
        header("Location: index.php?formular=tom&navn=$navn&email=$emailFra&adresse=$adresse&besked=$besked");
        exit();
    }
    else {
        if (!filter_var($emailFra, FILTER_VALIDATE_EMAIL)) {
            header("Location: index.php?formular=ugyldig&navn=$navn&adresse=$adresse&besked=$besked");
            exit();
        }
        else {
            $mailTil = "auforimerch@aufori.dk";
            $headers = "From: ".$emailFra;
            $txt = $navn." har lagt en ny bestilling i AUFORI butikken!"."\n\n".$besked;

            mail($mailTil, "Ny bestilling fra".$navn, $txt, $headers);
            header("Location: index.php?formular=mailsendt");
            exit();
        }
    }
}

else {
    header("Location: index.php?formular=tom");
    exit();
}
 
?>