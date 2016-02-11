<?php
/* Configure Template Variables */
$page_title='Complete View';
$version = main;
include 'assets/includes/header.php';
?>


<style>
  .option1 {
    background-color: #d7d7d7;
  }
  .compContainer {
    background-color: #fff;
    width:964px;
    margin:-30px auto 0 auto;
    -moz-box-shadow: 0 0 5px #a4a2a2;
    -webkit-box-shadow: 0 0 5px #a4a2a2;
    box-shadow: 0 0 5px #a4a2a2;
  }
</style>

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
  </div><!--/wrapper-->

  <div class="compContainer">
    <img src="assets/img/complete-view/complete-view.jpg" width="964" height="1749" align="middle" alt="360" class="threesixty" />
  </div>

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