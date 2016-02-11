<?php
/* Configure Template Variables */
$page_title='Navigation | Version: 1009';
$version = main;
include 'assets/includes/header.php';
?>

<body class="option1">
  <div class="wrapper">
    <?php include 'assets/includes/global-nav.php';?>
      <nav class="customer">

        <?php
        //If is defined URL variable 'trade' load the trade ver of nav
        if(isset($_GET['trade'])){include('assets/includes/trade-ver/customer-nav.php');} 
        else {include('assets/includes/customer-nav.php');}
        ?>

          <div id="megaStuff" class="rowThree navRow row-fluid">
            <div class="megaContainer navRow row-fluid">
              <?php include 'assets/includes/menu.php';?>
            </div><!--/megaContainer-->

                <?php
                //If is defined URL variable 'trade' load the trade ver of utility tray
                if(isset($_GET['trade'])){include('assets/includes/trade-ver/utility-tray.php');} 
                else {include('assets/includes/utility-tray.php');}
                ?>

          </div><!--/megaStuff-->
          <!-- End Third Row: Contains Tray, Transfer, Streaming, Alerts, Settings and New Account -->
      </nav>
    <img src="assets/img/360.png" width="952" height="1480" align="middle" alt="360" class="threesixty" />
  </div><!--/wrapper-->

<script src="assets/js/jquery-1.8.2.min.js" type="text/javascript"></script>
<script src="assets/js/bootstrap.js" type="text/javascript"></script>
<script src="assets/js/accounts_menu.js" type="text/javascript"></script>
<script src="assets/js/research_menu.js" type="text/javascript"></script>
<script src="assets/js/trade_menu.js" type="text/javascript"></script>
<script src="assets/js/retirement_menu.js" type="text/javascript"></script>
<script src="assets/js/jquery.ezpz_tooltip.js" type="text/javascript"></script>
<script src="assets/js/custom.js" type="text/javascript"></script>
</body>
</html>