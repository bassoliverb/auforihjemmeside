<!DOCTYPE html>
<html>
  <head>
    <title>
      <translate>AUFORI: Merch</translate>
      <translate lang="en">AUFORI: Merch</translate>
    </title>
    <module>modules/metatags.html</module>
    <meta property="og:description" content="Merch">
    <meta name="description" content="Merch">
    <link rel="stylesheet" type="text/css" href="/merch/merch.css">
    <meta property="og:url" content="https://aufori.dk/merch">
    <link rel="canonical" href="https://aufori.dk/merch">
    <script src="https://kit.fontawesome.com/75ec2819b5.js" crossorigin="anonymous"></script>
  </head>
  <body>
    <module>modules/navigation.html</module>
    <main>
      
      <div class="title">
      <h1>Butik</h1>
      <h2>Her kan du se vores lille udvalg af produkter, som vi laver. <br>
          Vi administrerer alt salget selv - hvis du er interesseret i at bestille noget, så udfyld formularen nederst på siden :-) <br>
          Vi kan sagtens sende med post til din adresse</h2>
      </div>
      
      <div class="sortiment">
        <div class="produkt"><img src="/images/Vinyl cover.png" alt="Vinyl"> 
          <div>
            <p>Porcelænshav Vinyl <br> 250kr</p>
          </div>
        </div>

        <div class="produkt"><img src="/images/muleposeskitse.png" alt="Mulepose">
          <div>
            <p>AUFORI Mulepose <br> 120kr</p>
          </div>  
        </div>
      </div>
      
      <section>
        <p>Opret bestilling</p>
        <form class="kontaktformular" action="kontaktformular.php" method="POST">

          
          <div class="row">  
            <div class="inputfelt">
            
              <?php
                if (isset($_GET['navn'])) {
                  $navn = $_GET['navn'];
                  echo '<input type="text" name="navn" id="navn" required value="'.$navn.'">
                        <label for="navn"><i class="fa-solid fa-user"></i> &nbsp;Fulde navn</label>';
                }
                else {
                  echo '<input type="text" name="navn" id="navn" required>
                        <label for="navn"><i class="fa-solid fa-user"></i> &nbsp;Fulde navn</label>';
                }
              ?>
            </div>
            <div class="inputfelt">
            
              <?php
                  if (isset($_GET['email'])) {
                    $email = $_GET['email'];
                    echo '<input type="text" name="email" id="email" required value="'.$email.'">
                          <label for="email"><i class="fa-solid fa-envelope"></i> &nbsp;E-mail</label>';
                  }
                  else {
                    echo '<input type="text" name="email" id="email" required>
                          <label for="email"><i class="fa-solid fa-envelope"></i> &nbsp;E-mail</label>';
                  }
                ?>
            </div>
          </div>
          <div class="inputfelt">
          
            <?php
              if (isset($_GET['adresse'])) {
                $adresse = $_GET['adresse'];
                echo '<type="text" name="adresse" id="adresse" required value="'.$adresse.'">
                      <label for="adresse"><i class="fa-solid fa-house"></i> &nbsp;Adresse</label>';
              }
              else {
                echo '<input type="text" name="adresse" id="adresse" required>
                      <label for="adresse"><i class="fa-solid fa-house"></i> &nbsp;Adresse</label>';
              }
            ?>
          </div>
          <div class="inputfelt">
          
            <?php
              if (isset($_GET['besked'])) {
                $besked = $_GET['besked'];
                echo '<textarea name="besked" id="besked" rows="8" autocomplete="off" required value="'.$besked.'"></textarea>
                      <label for="besked"><i class="fa-solid fa-pen"></i> &nbsp;Besked</label>';
              }
              else {
                echo '<textarea name="besked" id="besked" rows="8" autocomplete="off" required></textarea>
                      <label for="besked"><i class="fa-solid fa-pen"></i> &nbsp;Besked</label>';
              }
            ?>
          </div>
          <button type="submit" name="submit">Send bestilling</button>
        </form>

          <?php
          if (!isset($_GET['formular'])) {
            exit();
          }
          else {
            $formularTjek = $_GET['formular'];

            if ($formularTjek == "tom"){
              echo "<p class='fejl'>Udfyld venligst alle påkrævede felter</p>";
              exit();
            }
            elseif ($formularTjek == "ugyldig"){
              echo "<p class='fejl'>Indtast en gyldig e-mail</p>";
              exit();
            }
            elseif ($formularTjek == "mailsendt"){
              echo "<p class='success'>Tusinde tak for din henvendelse! Du hører fra os snarest.</p>";
              exit();
            }
          }
          
          ?>
        
      </section>
    </main>
  </body>
</html>