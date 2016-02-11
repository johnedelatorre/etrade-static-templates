<div class="rowTwo">
    <div class="navRow row-fluid">
        <div class="left logo">
            <a class="ir" href="#">E*TRADE</a>
        </div>
        <!--for trade version of the menu-->
        <style>
        /*.megamenu {background-image:none;}*/
        #tradeMenu {background-image:none;}
        .rowTwo ul {padding-right:14px;}
        .rowTwo li {margin-right: 20px;}
        </style>
        <ul class="left nav" id="main-nav">
            <li class="navAccounts">
                <a class="megaToggle" href=
                "javascript:showonlyone('accountsMenu');">
                <div class="downArrow"></div></a>
            </li>

            <li class="navResearch">
                <a class="megaToggle" href=
                "javascript:showonlyone('researchMenu');">
                <div class="downArrow"></div></a>
            </li>

            <li class="navRetirement">
                <a class="megaToggle" href=
                "javascript:showonlyone('retirementMenu');">
                <div class="downArrow"></div></a>
            </li>

            <li class="navTrade">
                <a href="javascript:showonlyone('tradeMenu');" class="megaToggle" role="button">
                <div class="downArrow"></div></a>
            </li>
        </ul>

        <div class="symbol left">
            <input class="form" placeholder="Symbol" type="text">
            <input class="btn" type="submit" value="GO" />
                <a class="location-trigger" href="#">US</a>
                <ul class="locations">
                    <li>US</li>
                    <li>CA</li>
                    <li>FR</li>
                    <li>DE</li>
                    <li>HK</li>
                    <li>JP</li>
                    <li>UK</li>
                </ul>
        </div>

        <div class="search left">
            <input class="form" placeholder="Search" type="text">
            <input class="btn" type="submit" value="GO" />
        </div>

    </div>
</div>