// jshint multistr: true
(function($, csrfToken) {
    var jQuery = $; // ensure jQuery is available by both names

    $(function() {
        var $nav = $("#bella-nav");

        // bail if EM variables aren't expanded (can cause browser-crashing redirect loops on some hosts)
        if ("https://sit.etrade.com" === "${ETR" + ("ADE}").substr()) {
            $nav.text("Host bindings not available. Unable to continue.").css({
                color: "white",
                fontSize: "18px",
                lineHeight: "120px",
                textAlign: "center"
            });

            return;
        }

        var model = {
            "globalNav": {
                "findBranch": {
                    "url": "https://sit.etrade.com/e/t/home/etradecenters",
                    "title": "Find a Branch"
                },
                "logOut": {
                    "url": "https://sit.etrade.com/e/t/user/logout",
                    "title": "Log Out"
                },
                "phone": "1-800-387-2331",
                "platinumPhone": "1-800-503-9260",
                "platinumExecPhone": "1-800-775-2793",
                "suggestions": {
                    "title": "Suggestions"
                },
                "service": {
                    "url": "https://sit.etrade.com/e/t/accounts/servicecenterhome",
                    "title": "Customer Service"
                }
            },
            "megamenu": [{
                "title": "Accounts",
                "url": "https://sit.etrade.com/e/t/home",
                "menus": [{
                    "title": "My Accounts",
                    "rightrail": "accounts",
                    "columns": [
                        [{
                            "title": "My Accounts",
                            "links": [{
                                "title": "Complete View",
                                "url": "https://sit.etrade.com/e/t/accounts/accountscombo"
                            }, {
                                "title": "E*TRADE 360",
                                "url": "https://sit.etrade.com/app/accounts/etrade360"
                            }, {
                                "title": "Portfolios",
                                "url": "https://sit.etrade.com/e/t/pfm/portfolioview"
                            }, {
                                "title": "View Orders",
                                "url": "https://sit.etrade.com/e/t/invest/vieworders?view_type=Advanced&order_type=O&order_status=O"
                            }, {
                                "title": "Balances",
                                "url": "https://sit.etrade.com/e/t/accounts/AcctBalanceDetails"
                            }, {
                                "title": "Transaction History",
                                "url": "https://sit.etrade.com/e/t/accounts/txnhistory?TXN=AccountTrans"
                            }, {
                                "title": "Monthly Statements",
                                "url": "https://sit36w86m7.etrade.com:3443/e/t/onlinedocs/docsearch?doc_type=stmt"
                            }, {
                                "title": "Electronic Document Elections",
                                "url": "https://sit36w86m7.etrade.com:3443/e/t/onlinedocs/docconsent"
                            }, {
                                "title": "Forms &amp; Applications",
                                "url": "https://sit.etrade.com/e/t/estation/pricing?id=1201010000"
                            }]
                        }],
                        [{
                            "title": "Move Money",
                            "links": [{
                                "title": "Money Transfer",
                                "url": "https://sit.etrade.com/e/t/accounts/acctxfrfundspage"
                            }, {
                                "title": "Bill Pay",
                                "url": "https://bank.sit.etrade.com/e/t/accounts/billpay/schedulepayments"
                            }, {
                                "title": "Account Transfer",
                                "url": "https://sit.etrade.com/e/t/toareq/toarequest"
                            }, {
                                "title": "Intra-Firm Transfer",
                                "url": "https://sit.etrade.com/e/t/estation/assettransfer"
                            }, {
                                "title": "Cash Management",
                                "url": "https://sit.etrade.com/e/t/invest/cashmanagement"
                            }]
                        }, {
                            "title": "Automatic Investing",
                            "links": [{
                                "title": "Overview",
                                "url": "https://sit.etrade.com/e/t/pict/InvestmentHome?traxui=autoinvest"
                            }]
                        }]
                    ]
                }, {
                    "title": "My Info",
                    "rightrail": "info",
                    "links": [{
                        "title": "Contact Information",
                        "url": "https://sit.etrade.com/e/t/accounts/changemyinfo"
                    }, {
                        "title": "Account Preferences",
                        "url": "https://sit.etrade.com/e/t/accounts/AcctPref"
                    }, {
                        "title": "Security &amp; Passwords",
                        "url": "https://sit.etrade.com/e/t/accounts/changemypasswords"
                    }, {
                        "title": "Subscription Center",
                        "url": "https://sit.etrade.com/e/t/scenter/SubscriptionCenter"
                    }]
                }, {
                    "title": "Tax &amp; Account Records",
                    "rightrail": "tax",
                    "columns": [
                        [{
                            "title": "Tax Records",
                            "links": [{
                                "title": "Overview",
                                "url": "https://sit.etrade.com/e/t/accounts/acctrecords"
                            }, {
                                "title": "Tax Documents",
                                "url": "https://sit36w86m7.etrade.com:3443/e/t/onlinedocs/docsearch?doc_type=tax"
                            }, {
                                "title": "Tax Center",
                                "url": "https://sit.etrade.com/e/t/plan/tax"
                            }]
                        }, {
                            "title": "Account Records",
                            "links": [{
                                "title": "Trade Confirmations",
                                "url": "https://sit36w86m7.etrade.com:3443/e/t/onlinedocs/docsearch?doc_type=cnf"
                            }, {
                                "title": "Monthly Statements",
                                "url": "https://sit36w86m7.etrade.com:3443/e/t/onlinedocs/docsearch?doc_type=stmt"
                            }, {
                                "title": "Check Images",
                                "url": "https://sit.etrade.com/e/t/accounts/accountrecordchecksummary"
                            }, {
                                "title": "Deposit Images",
                                "url": "https://sit.etrade.com/e/t/accounts/depositrecords"
                            }, {
                                "title": "Electronic Document Elections",
                                "url": "https://sit36w86m7.etrade.com:3443/e/t/onlinedocs/docconsent"
                            }]
                        }]
                    ]
                }, {
                    "title": "Banking",
                    "rightrail": "bank",
                    "links": [{
                        "title": "Overview",
                        "url": "https://bank.sit.etrade.com/e/t/bank/home"
                    }, {
                        "title": "Bank Account Details",
                        "url": "https://bank.sit.etrade.com/e/t/ibank/accountdetails"
                    }, {
                        "title": "Bill Pay",
                        "url": "https://bank.sit.etrade.com/e/t/accounts/billpay/schedulepayments"
                    }, {
                        "title": "Bank Statements &amp; Records",
                        "url": "https://bank.sit.etrade.com/e/t/ibank/reports"
                    }, {
                        "title": "Credit Cards",
                        "url": "https://sit.etrade.com/e/t/creditcard/cctransactionhistory"
                    }, {
                        "title": "Mortgages",
                        "url": "https://sit.etrade.com/e/t/estation/help?id=1915000000"
                    }]
                }]
            }, {
                "title": "Research",
                "id": "research",
                "url": "https://sit.etrade.com/e/t/invest/markets",
                "menus": [{
                    "title": "News &amp; Insights",
                    "rightrail": "news",
                    "columns": [
                        [{
                            "title": "News &amp; Insights",
                            "links": [{
                                "title": "US Markets",
                                "url": "https://sit.etrade.com/e/t/invest/markets"
                            }, {
                                "title": "Global Markets",
                                "url": "https://sit.etrade.com/e/t/gmc/globalwsoddirect"
                            }, {
                                "title": "News",
                                "url": "https://sit.etrade.com/e/t/invest/marketnews"
                            }, {
                                "title": "Investing Insights",
                                "url": "https://sit.etrade.com/e/t/invest/wsoddirect?wsod_page=/v1/ideafinder/overview/ideafinder.asp"
                            }]
                        }]
                    ]
                }, {
                    "title": "Guidance &amp; Advice",
                    "rightrail": "advice",
                    "links": [{
                        "title": "Overview",
                        "url": "https://sit.etrade.com/e/t/plan/overview"
                    }, {
                        "title": "Investment Guidance",
                        "url": "https://sit.etrade.com/e/t/plan/investadvice"
                    }, {
                        "title": "Managed Accounts",
                        "url": "https://sit.etrade.com/e/t/plan/managedaccounts"
                    }, {
                        "title": "Life Events",
                        "url": "https://sit.etrade.com/e/t/plan/lifeevents"
                    }, {
                        "title": "College Savings",
                        "url": "https://sit.etrade.com/e/t/plan/educationsavings"
                    }, {
                        "title": "Emergency Savings",
                        "url": "https://sit.etrade.com/e/t/plan/emergency"
                    }]
                }, {
                    "title": "Education",
                    "rightrail": "education",
                    "links": [{
                        "title": "Overview",
                        "url": "https://sit.etrade.com/ctnt/education-center"
                    }, {
                        "title": "Educational Resources",
                        "url": "https://sit.etrade.com/ctnt/education-center/educational-resources"
                    }, {
                        "title": "Live Events",
                        "url": "https://sit.etrade.com/ctnt/education-center/live-events"
                    }, {
                        "title": "Courses",
                        "url": "https://sit.etrade.com/ctnt/education-center/courses"
                    }]
                }, {
                    "title": "Products",
                    "rightrail": "products",
                    "columns": [
                        [{
                            "title": "Products",
                            "links": [{
                                "title": "Products &amp; Services",
                                "url": "https://sit.etrade.com/e/t/home/productservices"
                            }, {
                                "title": "Stocks",
                                "url": "https://sit.etrade.com/e/t/invest/wsoddirect?wsod_page=/v1/stockresearch/research/research.asp"
                            }, {
                                "title": "Options",
                                "url": "https://sit.etrade.com/e/t/optionanalytics/strategyoptimizer"
                            }, {
                                "title": "Mutual Funds",
                                "url": "https://sit.etrade.com/e/t/invest/wsoddirect?wsod_page=/v1/fundresearch/overview/overview.asp"
                            }, {
                                "title": "ETFs",
                                "url": "https://sit.etrade.com/e/t/invest/wsoddirect?wsod_page=/v1/etfresearch/overview/overview.asp"
                            }, {
                                "title": "Bonds &amp; CDs",
                                "url": "https://www.tst1.bonddesk.com/etrade/owa/pkg_etrade.welcome"
                            }, {
                                "title": "Futures",
                                "url": "https://sit.etrade.com/app/accountnav/FuturesHome?neo.skin=skinless"
                            }, {
                                "title": "Forex",
                                "url": "https://sit.etrade.com/app/forex/getresourcedetails?appType=DAILYFX"
                            }, {
                                "title": "New Issues",
                                "url": "https://sit.etrade.com/e/t/ipo/newissuecenter?Message=NewIssueCenter:1"
                            }]
                        }, {
                            "title": "Managed Accounts",
                            "links": [{
                                "title": "Managed Investment Portfolios (MIP)",
                                "url": "https://sit.etrade.com/e/t/plan/managedaccounts/mip"
                            }, {
                                "title": "Unified Managed Account (UMA)",
                                "url": "https://sit.etrade.com/e/t/plan/managedaccounts/uma"
                            }]
                        }],
                        [{
                            "title": "Advanced Trading",
                            "links": [{
                                "title": "Active Trading",
                                "url": "https://sit.etrade.com/e/t/invest/pethome"
                            }, {
                                "title": "Forex Trading",
                                "url": "https://sit.etrade.com/e/t/invest/forexhome"
                            }, {
                                "title": "Futures Trading",
                                "url": "https://sit.etrade.com/e/t/invest/etprofessional/futureshome"
                            }, {
                                "title": "Global Trading",
                                "url": "https://sit.etrade.com/e/t/invest/gt"
                            }, {
                                "title": "International Investing",
                                "url": "https://sit.etrade.com/e/t/invest/intlinvesting"
                            }, {
                                "title": "Options Trading",
                                "url": "https://sit.etrade.com/e/t/invest/options"
                            }]
                        }, {
                            "title": "Platforms",
                            "links": [{
                                "title": "E*TRADE MOBILE",
                                "url": "https://sit.etrade.com/investing-trading/mobile-trading"
                            }, {
                                "title": "E*TRADE PRO",
                                "url": "https://sit.etrade.com/e/t/invest/pethome"
                            }, {
                                "title": "MarketCaster",
                                "url": "https://sit.etrade.com/e/t/invest/mchome"
                            }, {
                                "title": "MarketTrader",
                                "url": "https://sit.etrade.com/e/t/invest/mthome"
                            }]
                        }]
                    ]
                }, {
                    "title": "Tools &amp; Screeners",
                    "rightrail": "tools",
                    "columns": [
                        [{
                            "title": "Stocks",
                            "links": [{
                                "title": "Charts",
                                "url": "https://sit.etrade.com/e/t/invest/quotechart?etstyle=3m&size=m&sym=DJIND"
                            }, {
                                "title": "Stock Screener",
                                "url": "https://sit.etrade.com/e/t/invest/wsoddirect?wsod_page=/v1/tradingideas/screener/stock_screener.asp?classic=0"
                            }]
                        }, {
                            "title": "Mutual Funds",
                            "links": [{
                                "title": "Mutual Fund Screener",
                                "url": "https://sit.etrade.com/e/t/invest/wsoddirect?wsod_page=/Research/Screener/MutualFund/&ProspectTools=1"
                            }, {
                                "title": "Mutual Fund Comparison Tool",
                                "url": "https://sit.etrade.com/e/t/invest/wsoddirect?wsod_page=/v1/fundresearch/comparison/comparison.asp?fundType=mf"
                            }]
                        }, {
                            "title": "Exchanged Traded Funds",
                            "links": [{
                                "title": "ETF Screener",
                                "url": "https://sit.etrade.com/e/t/invest/wsoddirect?wsod_page=/Research/Screener/ETF/&ProspectTools=1"
                            }, {
                                "title": "ETF Comparison Tool",
                                "url": "https://sit.etrade.com/e/t/invest/wsoddirect?wsod_page=/v1/fundresearch/comparison/comparison.asp?fundType=etf"
                            }]
                        }, {
                            "title": "Bonds",
                            "links": [{
                                "title": "Bond Screener",
                                "url": "https://www.tst1.bonddesk.com/etrade/owa/pkg_etrade.bond_advanced_search"
                            }, {
                                "title": "Bond Ladder Builder",
                                "url": "https://www.tst1.bonddesk.com/etrade/owa/pkg_etrade.ladder_builder"
                            }, {
                                "title": "Bond Fund Selector Tool",
                                "url": "https://sit.etrade.com/e/t/invest/fixedincometool"
                            }]
                        }],
                        [{
                            "title": "Planning Tools",
                            "links": [{
                                "title": "Online Portfolio Advisor",
                                "url": "https://sit.etrade.com/e/t/cio/landingpage"
                            }, {
                                "title": "Retirement Planning Calculator",
                                "url": "https://sit.etrade.com/e/t/plan/retirement/quickplan"
                            }, {
                                "title": "Portfolio Analyzer",
                                "url": "https://sit.etrade.com/e/t/mrnstar/portfolioanalyzeroverview"
                            }, {
                                "title": "Risk Analyzer",
                                "url": "https://sit.etrade.com/e/t/rmg/riskmanager"
                            }, {
                                "title": "Income Estimator",
                                "url": "https://sit.etrade.com/e/t/incomeestimator/ieestimator"
                            }]
                        }, {
                            "title": "Options Tools",
                            "links": [{
                                "title": "Strategy Optimizer",
                                "url": "https://sit.etrade.com/e/t/optionanalytics/strategyoptimizer"
                            }, {
                                "title": "Options Analyzer",
                                "url": "https://sit.etrade.com/e/t/optionanalytics/optionsanalyzer"
                            }, {
                                "title": "Probability Calculator",
                                "url": "https://sit.etrade.com/e/t/optionanalytics/probabilitycalculator"
                            }, {
                                "title": "Options Screener",
                                "url": "https://sit.etrade.com/e/t/optionanalytics/optionsscreener"
                            }, {
                                "title": "Options Chain",
                                "url": "https://sit.etrade.com/e/t/invest/quotesandresearch?content=3&site=quotesandresearch&sym=AAPL"
                            }]
                        }]
                    ]
                }, {
                    "title": "Community",
                    "rightrail": "community",
                    "links": [{
                        "title": "Overview",
                        "url": "https://sitcommunities-lb.etrade.com/app/community/homepage"
                    }, {
                        "title": "Profile",
                        "url": "https://sitcommunities-lb.etrade.com/app/community/profilepage"
                    }, {
                        "title": "Discussion Boards",
                        "url": "https://sitcommunities-lb.etrade.com/app/community/dbhome"
                    }]
                }, {
                    "hidden": true,
                    "id": "etlabs",
                    "title": "E*TRADE Labs",
                    "links": [{
                        "title": "Overview",
                        "url": "${ETLABS}/home"
                    }]
                }]
            }, {
                "title": "Retirement",
                "url": "https://sit.etrade.com/e/t/plan/retirement",
                "menus": [{
                    "title": "Retirement Planning",
                    "rightrail": "retirement",
                    "links": [{
                        "title": "Overview",
                        "url": "https://sit.etrade.com/e/t/plan/retirement"
                    }, {
                        "title": "Starting to Save",
                        "url": "https://sit.etrade.com/e/t/plan/retirement/gettingstarted"
                    }, {
                        "title": "Changing Jobs",
                        "url": "https://sit.etrade.com/e/t/plan/rollover"
                    }, {
                        "title": "Growing Your Savings",
                        "url": "https://sit.etrade.com/e/t/plan/retirement/building"
                    }, {
                        "title": "Nearing Retirement",
                        "url": "https://sit.etrade.com/e/t/plan/retirement/nearing"
                    }, {
                        "title": "Living in Retirement",
                        "url": "https://sit.etrade.com/e/t/plan/retirement/livinginretirement"
                    }]
                }, {
                    "title": "IRAs",
                    "rightrail": "ira",
                    "links": [{
                        "title": "Overview",
                        "url": "https://sit.etrade.com/e/t/home/retirement-accounts-c"
                    }, {
                        "title": "Rollover IRAs",
                        "url": "https://sit.etrade.com/e/t/home/iraroll"
                    }, {
                        "title": "Traditional IRAs",
                        "url": "https://sit.etrade.com/e/t/home/iratrad"
                    }, {
                        "title": "Roth IRAs",
                        "url": "https://sit.etrade.com/e/t/home/iraroth"
                    }, {
                        "title": "IRAs for Minors",
                        "url": "https://sit.etrade.com/e/t/home/iraminor"
                    }, {
                        "title": "Beneficiary IRAs",
                        "url": "https://sit.etrade.com/e/t/home/irabeneficiary"
                    }, {
                        "title": "Complete IRAs",
                        "url": "https://sit.etrade.com/e/t/home/iracomplete"
                    }]
                }, {
                    "title": "Rollovers &amp; Transfers",
                    "rightrail": "rollovers",
                    "links": [{
                        "title": "Rollover a Former Employer Plan",
                        "url": "https://sit.etrade.com/e/t/plan/rollover"
                    }, {
                        "title": "Transfer an Existing IRA",
                        "url": "https://sit.etrade.com/e/t/plan/retirement/transfer-an-existing-retirement-ira-account"
                    }, {
                        "title": "OneStop Rollover",
                        "url": "https://sit.etrade.com/e/t/plan/onestoprollover"
                    }]
                }, {
                    "title": "Small Business Plans",
                    "rightrail": "business",
                    "links": [{
                        "title": "Small Business Resource Center",
                        "url": "https://sit.etrade.com/e/t/plan/retirement/small-business-retirement-plans"
                    }, {
                        "title": "Compare Small Business Plans",
                        "url": "https://sit.etrade.com/e/t/home/comparebusiness"
                    }]
                }]
            }, {
                "title": "Trade",
                "url": "https://sit.etrade.com/e/t/invest/socreateentry"
            }],
            "tray": {
                "indices": {
                    "url": "https://sit.etrade.com/e/t/invest/quotesandresearch?sym=",
                    "symbols": [{
                        "title": "DOW",
                        "symbol": "DJIND",
                        "color": "#971c6f"
                    }, {
                        "title": "NASDAQ",
                        "symbol": "COMP.IDX",
                        "color": "#2c9cad"
                    }, {
                        "title": "S&amp;P500",
                        "symbol": "SPX",
                        "color": "#c89612"
                    }]
                },
                "newAccount": {
                    "url": "https://sit.etrade.com/e/t/home/openanaccount",
                    "title": "New Account"
                },
                "alerts": {
                    "title": "Alerts",
                    "seeAll": "See All %COUNT% Alerts"
                },
                "moveMoney": {
                    "title": "Move Money",
                    "links": [{
                        "title": "Money Transfer",
                        "url": "https://sit.etrade.com/e/t/accounts/acctxfrfundspage"
                    }, {
                        "title": "Bill Pay",
                        "url": "https://bank.sit.etrade.com/e/t/accounts/billpay/schedulepayments"
                    }, {
                        "links": [{
                            "title": "Account Transfer",
                            "url": "https://sit.etrade.com/e/t/toareq/toarequest"
                        }, {
                            "title": "Intra-Firm Transfer",
                            "url": "https://sit.etrade.com/e/t/estation/assettransfer"
                        }]
                    }]
                }
            },
            "etsearch": {
                "symbolTestStr": "Symbol",
                "searchTextStr": "Search",
                "goTextStr": "GO"
            }
        };

        function ploc(loc, url) {
            var bdbase = "https://www.tst1.bonddesk.com";

            if (url.substr(0, bdbase.length) === bdbase) {
                return url;
            }

            //TODO: doesn't handle fragment identifiers (but we're also not using any)

            return url + (url.indexOf("?") > -1 ? "&" : "?") + "ploc=" + loc;
        }

        var templates = {};

        (function() {
            // templates cause certain linting warnings that are not useful; temporarily disable them
            // jshint -W032
            // jshint -W033
            // jshint -W041
            // jshint -W069

            // lodash, used by grunt-contrib-jst, produces templates
            // which are dependant on this escaping function existing;
            // we also use it to encode non-ASCII characters
            var _ = {
                escape: function(str) {
                    return ("" + str).replace(/[&<>"'\u007f-\uffff]/g, function(ch) {
                        return "&#x" + ch.charCodeAt(0).toString(16) + ";";
                    });
                }
            };

            this["JST"] = this["JST"] || {};

            this["JST"]["alerts"] = function(data) {
                var __t, __p = '',
                    __e = _.escape,
                    __j = Array.prototype.join;

                function print() {
                    __p += __j.call(arguments, '')
                }
                __p += '<ul class="alerts">\n\t';
                $.each(data.alertsList, function(i, alert) {;
                    __p += '\n\t\t<li class="' +
                        ((__t = (i % 2 ? "odd" : "")) == null ? '' : __t) +
                        ' ' +
                        ((__t = (alert.priority >= 25 ? "high" : "")) == null ? '' : __t) +
                        ' ' +
                        __e(alert.status) +
                        '" data-alert-id="' +
                        __e(alert.alertId) +
                        '">\n\t\t\t<a href="javascript:void 0">' +
                        __e(alert.subject) +
                        '</a>\n\t\t\t<span>' +
                        __e((new Date(alert.occurredTime * 1000)).toLocaleString()) +
                        '</span>\n\t\t\t<a href="javascript:void 0" class="delete"/>\n\t\t</li>\n\t';
                });;
                __p += '\n</ul>\n\n<a href="javascript:void 0" class="see-all-alerts">' +
                    ((__t = (model.tray.alerts.seeAll.replace("%COUNT%", data.totalAlertsCount))) == null ? '' : __t) +
                    '</a>\n';
                return __p
            };

            this["JST"]["bella-nav"] = function(data) {
                var __t, __p = '',
                    __e = _.escape,
                    __j = Array.prototype.join;

                function print() {
                    __p += __j.call(arguments, '')
                }
                __p += '<div class="background">\n\t<div class="tray"></div>\n</div>\n\n<div class="globalnav">\n\t<span class="date"></span>\n\t<a class="suggestions" href="#">' +
                    ((__t = (data.globalNav.suggestions.title)) == null ? '' : __t) +
                    '</a>\n\t<a href="' +
                    __e(ploc("c-2014-TopNav", data.globalNav.service.url)) +
                    '">' +
                    ((__t = (data.globalNav.service.title)) == null ? '' : __t) +
                    '</a>\n\t<a class="phone" href="tel:' +
                    __e(data.globalNav.phone) +
                    '">' +
                    __e(data.globalNav.phone) +
                    '</a>\n\t<a href="' +
                    __e(ploc("c-2014-TopNav", data.globalNav.findBranch.url)) +
                    '">' +
                    ((__t = (data.globalNav.findBranch.title)) == null ? '' : __t) +
                    '</a>\n\t<a class="logout" href="' +
                    __e(ploc("c-2014-TopNav", data.globalNav.logOut.url)) +
                    '">' +
                    ((__t = (data.globalNav.logOut.title)) == null ? '' : __t) +
                    '</a>\n</div>\n\n<div class="menubar">\n\t<a class="logo" href="' +
                    __e(ploc("c-2014-Logo", "https://sit.etrade.com/app/accounts/etrade360")) +
                    '">E*TRADE FINANCIAL</a>\n\t';
                $.each(data.megamenu, function(i, tab) {;
                    __p += '\n\t\t';
                    if (tab.menus) {;
                       if (i === 0) { 
                            __p += '\n\t\t\t<a class="menu current" href="' + __e(ploc("c-2014-TopNav", tab.url)) +
                            '" ';
                        if (tab.id) {;
                            __p += ' data-id="' +
                                __e(tab.id) +
                                '"';
                        };
                        __p += '>' +
                            ((__t = (tab.title)) == null ? '' : __t) +
                            '</a>\n\t\t';
                        } else { 
                            __p += '\n\t\t\t<a class="menu" href="' + __e(ploc("c-2014-TopNav", tab.url)) +
                            '" ';
                        if (tab.id) {;
                            __p += ' data-id="' +
                                __e(tab.id) +
                                '"';
                        };
                        __p += '>' +
                            ((__t = (tab.title)) == null ? '' : __t) +
                            '</a>\n\t\t';
                        } 
                    } else if (tab.url) {;
                        __p += '\n\t\t\t<a href="' +
                            __e(ploc("c-2014-TopNav", tab.url)) +
                            '">' +
                            ((__t = (tab.title)) == null ? '' : __t) +
                            '</a>\n\t\t';
                    };
                    __p += '\n\t';
                });;
                __p += '\n\n\t<div class="etsearch">\t\t\n\t\t<div class="symbol bella-floatL">\t\t\n\t\t\t<input MAXLENGTH="20" CLASS="searchsymbol" VALUE="' +
                    ((__t = (data.etsearch.symbolTestStr)) == null ? '' : __t) +
                    '" AUTOCOMPLETE="off" PLACEHOLDER="' +
                    ((__t = (data.etsearch.symbolTestStr)) == null ? '' : __t) +
                    '" TYPE="text" />\t\t\t\t\t\t\n\t\t</div>\n\t\t<div class="bella-location-trigger">\n\t\t\t<a href="#" class="bella-location-text">US</a>\t\t\t\n\t\t\t<ul class="bella-locations">\n\t\t\t\t<li>US</li>\n\t\t\t\t<li>CA</li>\n\t\t\t\t<li>FR</li>\n\t\t\t\t<li>DE</li>\n\t\t\t\t<li>HK</li>\n\t\t\t\t<li>JP</li>\n\t\t\t\t<li>UK</li>\n\t\t\t</ul>\n\t\t</div>\t\t\n\t\t<div class="symbol-go-btn">' +
                    ((__t = (data.etsearch.goTextStr)) == null ? '' : __t) +
                    '</div>\t\t\n\t\t<div class="search bella-floatL">\t\n\t\t\t<input MAXLENGTH="20" CLASS="searchtext" VALUE="' +
                    ((__t = (data.etsearch.searchTextStr)) == null ? '' : __t) +
                    '" PLACEHOLDER="' +
                    ((__t = (data.etsearch.searchTextStr)) == null ? '' : __t) +
                    '" TYPE="text" />\t\t\t\t\n\t\t</div>\n\t\t<div class="text-go-btn">' +
                    ((__t = (data.etsearch.goTextStr)) == null ? '' : __t) +
                    '</div>\t\t\n\t\t<ul class="suggestedlist"></ul>\n\t</div>\n</div>\n\n<div class="megamenu">\n\t';
                $.each(data.megamenu, function(i, tab) {
                    if (tab.menus) {;
                        __p += '\n\t\t<div class="tab" ';
                        if (tab.id) {;
                            __p += ' data-id="' +
                                __e(tab.id) +
                                '"';
                        };
                        __p += '>\n\t\t\t<div class="menus">\n\t\t\t\t';
                        $.each(tab.menus, function(j, menu) {;
                            __p += '\n\t\t\t\t\t<h3\n\t\t\t\t\t\tdata-rightrail=\'' +
                                __e(menu.rightrail || tab.rightrail || "") +
                                '\'\n\t\t\t\t\t\t';
                            if (menu.id) {;
                                __p += ' data-id="' +
                                    __e(menu.id) +
                                    '"';
                            };
                            __p += '\n\t\t\t\t\t\t';
                            if (menu.hidden) {;
                                __p += ' class="hidden"';
                            };
                            __p += '\n\t\t\t\t\t>' +
                                ((__t = (menu.title)) == null ? '' : __t) +
                                '</h3>\n\t\t\t\t';
                        });;
                        __p += '\n\t\t\t</div>\n\n\t\t\t';
                        $.each(tab.menus, function(j, menu) {;
                            __p += '\n\t\t\t\t<div class="menu ' +
                                __e(menu.hidden ? "hidden" : "") +
                                '" ';
                            if (menu.id) {;
                                __p += ' data-id="' +
                                    __e(menu.id) +
                                    '"';
                            };
                            __p += '>\n\t\t\t\t\t';
                            if (menu.links) {;
                                __p += '\n\t\t\t\t\t\t';
                                menu.columns = [
                                    [{
                                        title: menu.title,
                                        links: menu.links
                                    }]
                                ];;
                                __p += '\n\t\t\t\t\t';
                            };
                            __p += '\n\n\t\t\t\t\t';
                            if (menu.columns) {;
                                __p += '\n\t\t\t\t\t\t';
                                $.each(menu.columns, function(k, column) {;
                                    __p += '\n\t\t\t\t\t\t\t<div class="column">\n\t\t\t\t\t\t\t\t';
                                    $.each(column, function(l, section) {;
                                        __p += '\n\t\t\t\t\t\t\t\t\t<h4>' +
                                            ((__t = (section.title)) == null ? '' : __t) +
                                            '</h4>\n\n\t\t\t\t\t\t\t\t\t';
                                        $.each(section.links, function(m, link) {;
                                            __p += '\n\t\t\t\t\t\t\t\t\t\t<a href="' +
                                                __e(ploc("c-2014-SubNav", link.url)) +
                                                '" ';
                                            if (link.id) {;
                                                __p += ' data-id="' +
                                                    __e(link.id) +
                                                    '"';
                                            };
                                            __p += '>' +
                                                ((__t = (link.title)) == null ? '' : __t) +
                                                '</a>\n\t\t\t\t\t\t\t\t\t';
                                        });;
                                        __p += '\n\t\t\t\t\t\t\t\t';
                                    });;
                                    __p += '\n\t\t\t\t\t\t\t</div>\n\t\t\t\t\t\t';
                                });;
                                __p += '\n\t\t\t\t\t';
                            };
                            __p += '\n\t\t\t\t</div>\n\t\t\t';
                        });;
                        __p += '\n\t\t</div>\n\t';
                    }
                });;
                __p += '\n\n\t<div class="rightrail">\n\t\t<iframe src="' +
                    __e("https://sit.etrade.com") +
                    '/app/rightrail" allowTransparency="true" frameBorder="0" scrolling="no"></iframe>\n\t</div>\n\n\t<div class="tray">\n\t\t<span>\n\t\t\t';
                $.each(data.tray.indices.symbols, function(i, symbol) {;
                    __p += '\n\t\t\t\t<a\n\t\t\t\t\thref="' +
                        __e(ploc("c-2014-TopNav", data.tray.indices.url + symbol.symbol)) +
                        '"\n\t\t\t\t\tdata-symbol="' +
                        __e(symbol.symbol) +
                        '"\n\t\t\t\t\tdata-color="' +
                        __e(symbol.color) +
                        '"\n\t\t\t\t>' +
                        ((__t = (symbol.title)) == null ? '' : __t) +
                        '<span class="last">&mdash;</span><span class="change">&mdash;</span></a>\n\t\t\t';
                });
                __p += '\n\t\t</span>\n\n\t\t<a class="newAccount" href="' +
                    __e(ploc("c-2014-TopNav", data.tray.newAccount.url)) +
                    '">' +
                    ((__t = (data.tray.newAccount.title)) == null ? '' : __t) +
                    '</a>\n\t\t<a class="alerts" href="javascript:void 0">' +
                    ((__t = (data.tray.alerts.title)) == null ? '' : __t) +
                    '<span></span></a>\n\t\t<a class="moveMoney" href="javascript:void 0">' +
                    ((__t = (data.tray.moveMoney.title)) == null ? '' : __t) +
                    '</a>\n\t</div>\n</div>\n';
                return __p
            };

            this["JST"]["links"] = function(data) {
                var __t, __p = '',
                    __e = _.escape,
                    __j = Array.prototype.join;

                function print() {
                    __p += __j.call(arguments, '')
                }
                __p += '<div class="links">\n\t';
                $.each(data, function(i, item) {;
                    __p += '\n\t\t';
                    if (item.url) {;
                        __p += '\n\t\t\t<a href="' +
                            __e(ploc("c-2014-TopNav", item.url)) +
                            '">' +
                            ((__t = (item.title)) == null ? '' : __t) +
                            '</a>\n\t\t';
                    } else if (item.links) {;
                        __p += '\n\t\t\t<div class="subsection">\n\t\t\t\t';
                        $.each(item.links, function(j, link) {;
                            __p += '\n\t\t\t\t\t<a href="' +
                                __e(ploc("c-2014-TopNav", link.url)) +
                                '">' +
                                ((__t = (link.title)) == null ? '' : __t) +
                                '</a>\n\t\t\t\t';
                        });;
                        __p += '\n\t\t\t</div>\n\t\t';
                    };
                    __p += '\n\t';
                });;
                __p += '\n</div>\n';
                return __p
            };
        }).call({
            JST: templates
        }); // work around grunt-contrib-jst namespacing

        // IE doesn't like setting the content of `style` elements, so it must be constructed as a fragment
        $("<style>#bella-nav {\
  color: white;\
  font-family: \"Helvetica Neuve\", Arial;\
  font-size: 11px;\
  min-width: 966px;\
  position: relative;\
  z-index: 1000;\
  text-align: left;\
  line-height: normal;\
}\
#bella-nav,\
#bella-nav * {\
  box-sizing: content-box;\
  -moz-box-sizing: content-box;\
}\
#bella-nav .tray .alerts span {\
  background: #d8321d;\
  border-radius: 5px;\
  color: #fff;\
  display: none;\
  margin-left: 8px;\
  padding: 3px 6px;\
}\
#bella-nav a.see-all-alerts {\
  border: 1px solid #ebebeb;\
  border-top-color: #d6d6d6;\
  color: #003399;\
  display: block;\
  font-weight: bold;\
  height: 44px;\
  line-height: 44px;\
  padding: 0 10px;\
  text-align: left;\
}\
#bella-nav ul.alerts {\
  list-style-type: none;\
  margin: 0;\
  padding: 0;\
}\
#bella-nav ul.alerts li {\
  background: 10px 50% no-repeat;\
  border: 1px solid #ebebeb;\
  border-bottom: 0;\
  color: #999;\
  font-size: 13px;\
  height: 40px;\
  line-height: 18px;\
  margin: 0;\
  padding: 4px 37px 0 45px;\
  position: relative;\
  text-align: left;\
  white-space: nowrap;\
}\
#bella-nav ul.alerts li.odd {\
  background-color: #fafafa;\
}\
#bella-nav ul.alerts li.read {\
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAATCAMAAABfsiZwAAAAzFBMVEUAAAC8vLy+vr7ExMTFxcXHx8fKysrAwMDHx8e9vb2/v7/BwcHCwsLExMTFxcXIyMjKysq/v7/FxcXGxsa7u7u+vr7AwMDBwcHGxsa8vLzBwcHJycnKysrCwsLGxsbJycm8vLy+vr7CwsLExMS7u7vGxsbKysrBwcHExMS9vb2+vr6/v7/ExMTHx8fIyMjCwsLFxcW+vr7AwMDFxcXHx8fKysq8vLy9vb2+vr6/v7/AwMDBwcHCwsLExMTFxcXGxsbHx8fIyMjJycnKysrvU5j+AAAANnRSTlMAEBAQEBAQICAwMDAwMDAwMFBQUGBgYGBgcHBwcICPj5+fn5+vr6+/v8/Pz8/Pz9/f7+/v7+/YwelZAAAAmUlEQVQYGX3BiRaBQAAF0KcSWbOvIfu+RIlK6P//yUzH4RhN94Klqogjm2YXMaZBEExl8HSeVB8cxQe1BUdycydOaXD0fKoJjopPTcAolBGSjjdiL+GXuPZGIoi5R+XBGLquu8sBmktpYDScUDvrUDOw6sb1y0jhT2Z1+SghgqDbbzqi1Q42tRTAoSzOhAKuxMCyWohTHSPKC9HkHQD5aV/QAAAAAElFTkSuQmCC');\
}\
#bella-nav ul.alerts li.read.high {\
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAATCAMAAAAtfUTGAAAA+VBMVEUAAAC7u7u9vb2+vr7AwMDGxsbIyMjKysq8vLzBwcHDw8PKysrGxsa9vb2+vr7AwMDBwcHCwsLDw8PExMTFxcXGxsbHx8fIyMjKysq9vb3Hx8e+vr7BwcG/v7/AwMDHx8fJycnBwcHCwsLDw8PExMTFxcXGxsa7u7u9vb3FxcXHx8e+vr7AwMDHx8e7u7u9vb2/v7/IyMjJycnKysq7u7vAwMDCwsLKysq9vb3Dw8PFxcW8vLy9vb3GxsbIyMi+vr7AwMDDw8PIyMjKysq8vLy9vb2+vr6/v7/AwMDBwcHCwsLDw8PExMTFxcXGxsbHx8fIyMjJycnKyspsnEVXAAAARHRSTlMAEBAQEBAQECAgICAwQEBAQEBAQEBAQEBAUFBgYHBwcHCAgICAgICPj4+Pn5+fr6+vr6+vv7+/v8/Pz9/f39/v7+/v71WW/Z4AAAC7SURBVBgZhcGHesFQAAbQ365Nba29t7a6a4sR7o14/4dxk8YnuIlzoJN88+IO1/zwiTteZVnOw1Riz8ycMOEc7RUvMNGUpFy8I0lpGPJRSmOoUjp0wMgPISSKCiGkAQPlHRNBecdEwOWZbplHlLbMN7g+REUYRVFRBMfzRhVCYaNy44Z9slZlg+216h03+qtrGVwJLDVPaC3/jW24YP0TNIBf0PRwoS6c1P1fwkkKOg8Lrl/oWLoDnhrOjrpDPGvjtVt7AAAAAElFTkSuQmCC');\
}\
#bella-nav ul.alerts li.unread {\
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAB8AAAATBAMAAACaQstxAAAAMFBMVEWZzDOZzDOZzDOZzDOZzDOZzDOZzDOZzDOZzDOZzDOZzDOZzDOZzDOZzDOZzDOZzDMUea8DAAAAEHRSTlMAMBDvca//j9AhYFDfn7+A4bnwdQAAAIZJREFUGBlVwbEJwkAYhuHvAlYixsbGJmBjk8rKLpV7BM1LQEErR7g6IwhBB3ECcQKrzGGEHPnveRQsFEu2hSITqkzWHq4yHNSyNrCTdYO7jClUClaS1vDSIPEfqYNUgxnndA4XBU84LuGroOXv0Chwnt5Jo5zeW0YLdSbDeUpFcgrFHhr9AIVLIKIYPeT+AAAAAElFTkSuQmCC');\
}\
#bella-nav ul.alerts li.unread.high {\
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACMAAAATCAMAAAAtfUTGAAAAM1BMVEXltx/ltx/ltx/ltx/ltx/ltx/ltx/ltx/ltx/ltx/ltx/ltx/ltx/ltx/ltx/ltx/ltx/rnQptAAAAEXRSTlMAQK8gAO//v3Dfj59QMIDPYHgnjigAAACDSURBVCjPhdFLEoMgEEVRupHLJ4m4/9U6IQZig2/k4BRd1nXuN1HvHrYF4pNRIK2JAIRteSkDoCtTIMkL3nPyAcTtkOfX6tdQZmTnMohNfOhMtU2kM+wWORgM3owAtH8HrCTK/5IZAeBw7Z1bkhYB6LjeIrQVqdf3kMRjLg+nNFrri5wvAwZlre3UWwAAAABJRU5ErkJggg==');\
}\
#bella-nav ul.alerts li a {\
  color: #003399;\
  display: block;\
}\
#bella-nav ul.alerts li a.delete {\
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABEAAAARBAMAAADJQ1rJAAAAJ1BMVEWTkZH///+TkZGTkZGTkZGTkZGTkZGTkZGTkZGTkZGTkZGTkZGTkZFpRCoPAAAADXRSTlMAAAMGChATICYpLTAzAgPumAAAAHBJREFUCB0FwbENAiAARcEXotR/BFus3MPGERiAghGcwZpRrCEmbyjvuLwArrfw3ADjE752qP5uLDcMT2jaq85Qlnt4CDTVSaAsPRDgrm8IMHRDoKp2AsOz3ISqs2kPw0NZ7qATmj4YByhrhzoBWs8fA3E3KbjbmxgAAAAASUVORK5CYII=') no-repeat;\
  height: 17px;\
  position: absolute;\
  right: 10px;\
  top: 13px;\
  width: 17px;\
}\
#bella-nav .background {\
  background: -webkit-linear-gradient(#2a2a2a, #141414);\
  background: linear-gradient(#2a2a2a, #141414);\
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#2a2a2a, endColorstr=#141414, GradientType=0);\
  position: relative;\
  top: 28px;\
  margin-bottom: -53px;\
  border-top: 1px solid #414040;\
  height: 52px;\
}\
#bella-nav .background .tray {\
  position: relative;\
  top: 52px;\
  border-top: 1px solid #414040;\
  background: #080808;\
  height: 38px;\
}\
#bella-nav .flyout {\
  background: #fff;\
  box-shadow: rgba(0, 0, 0, 0.4) 0 0 10px;\
  position: absolute;\
}\
#bella-nav .flyout div:first-child {\
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAHCAQAAACWu2SvAAAASUlEQVQI12P4zwCHk//f/i8B4yGE0/6DwOH/bKgSxv9//oeAXmQJof/3/iNAIEJiy39k8OG/OkSi+j86uPSfk+G/0/8//zHBfABJY385iZExwQAAAABJRU5ErkJggg==') center top no-repeat;\
  height: 7px;\
  left: 0;\
  padding-top: 7px;\
  position: absolute;\
  right: 0;\
  top: -6px;\
}\
#bella-nav.no-box-shadow .flyout {\
  border: 1px solid #414040;\
  border-top: none;\
}\
#bella-nav .globalnav {\
  margin: 0 auto;\
  position: relative;\
  width: 966px;\
  color: #D8D8D8;\
  height: 28px;\
  line-height: 28px;\
  text-align: right;\
}\
#bella-nav .globalnav > * {\
  display: inline-block;\
  height: 100%;\
  margin: 0 10px;\
}\
#bella-nav .globalnav a {\
  color: inherit;\
}\
#bella-nav .globalnav a:hover {\
  color: white;\
}\
#bella-nav .globalnav .date {\
  color: #999;\
  float: left;\
  margin-left: 0;\
}\
#bella-nav .globalnav .logout {\
  background: -webkit-linear-gradient(90deg, #5c2eb8, #7547d1);\
  background: linear-gradient(90deg, #5c2eb8, #7547d1);\
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#5c2eb8, endColorstr=#7547d1, GradientType=1);\
  color: white;\
  padding: 0 8px;\
  margin: 0;\
}\
#bella-nav .globalnav .logout:hover {\
  background: #814af1;\
}\
#bella-nav .globalnav .suggestions {\
  background: url('data:image/gif;base64,R0lGODlhCQAJAPABAKampv///yH/C05FVFNDQVBFMi4wAwEAAAAh+QQJyAABACwAAAAACQAJAEACEQSCaJbK+45KbLpGZdB1Z6wUACH5BAkAAAEALAEAAAAHAAkAAAIOBIJ2mOvelEyNBsMiMwUAIfkECQAAAQAsAgAAAAUACQAAAgwEYhd43ZwMYlOuxAoAIfkECQAAAQAsAgAAAAUACQAAAgwMHqaGDI7Oc+lNGQoAIfkECQAAAQAsAgAAAAUACQAAAgxMYIa5qgBXO4kyUwAAIfkECQAAAQAsAgAAAAUACQAAAgwMHqYK2X/Qc2saVAAAIfkECQAAAQAsAgAAAAUACQAAAgwEYheovJzMk4tCVgAAIfkECQAAAQAsAQAAAAcACQAAAg4EgnaYy8aamjHAeF82BQAh+QQJyAABACwAAAAACQAJAAACEQSCaJdp7Rh8i8r2YMiTK1AAACH5BAkAAAEALAEAAAAHAAkAAAIOBIJ2mMvGmpoxwHhfNgUAIfkECQAAAQAsAgAAAAUACQAAAgwEYheovJzMk4tCVgAAIfkECQAAAQAsAgAAAAUACQAAAgwMHqYK2X/Qc2saVAAAIfkECQAAAQAsAgAAAAUACQAAAgxMYIa5qgBXO4kyUwAAIfkECQAAAQAsAgAAAAUACQAAAgwMHqaGDI7Oc+lNGQoAIfkECQAAAQAsAgAAAAUACQAAAgwEYhd43ZwMYlOuxAoAIfkEBQAAAQAsAQAAAAcACQAAAg4EgnaY696UTI0GwyIzBQA7') center right no-repeat;\
  padding-right: 12px;\
}\
#bella-nav .flyout .links {\
  padding: 3px 0;\
  text-align: left;\
}\
#bella-nav .flyout .links a {\
  display: block;\
  font-size: 12px;\
  padding: 4px 10px;\
}\
#bella-nav .flyout .links a:first-child {\
  border-top: 0;\
}\
#bella-nav .flyout .links .subsection {\
  border-top: 1px solid #ebebeb;\
}\
#bella-nav .megamenu {\
  margin: 0 auto;\
  position: relative;\
  width: 966px;\
}\
#bella-nav .megamenu .rightrail {\
  background-color: #e6e6e6;\
  bottom: 40px;\
  box-shadow: rgba(0, 0, 0, 0.4) 0 15px 30px -10px inset;\
  right: 0;\
  position: absolute;\
  top: 0;\
  width: 239px;\
}\
#bella-nav .megamenu .rightrail iframe {\
  height: 100%;\
  width: 100%;\
}\
#bella-nav .megamenu .tray {\
  margin: 0 auto;\
  position: relative;\
  width: 966px;\
  background: #080808;\
  border-top: 1px solid #414040;\
  font-size: 12px;\
  height: 38px;\
  line-height: 38px;\
  overflow: auto;\
}\
#bella-nav .megamenu .tray a {\
  color: #898989;\
}\
#bella-nav .megamenu .tray > a {\
  border-left: 1px solid #414040;\
  float: right;\
  padding: 0 15px;\
  color: #D8D8D8;\
}\
#bella-nav .megamenu .tray > a:hover,\
#bella-nav .megamenu .tray > a.newAccount:hover {\
  color: #fff;\
}\
#bella-nav .megamenu .tray > a.newAccount {\
  color: #95c73b;\
  font-size: 13px;\
}\
#bella-nav .megamenu .tray > a.moveMoney {\
  background-position: right center;\
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAATCAMAAAA+qgQyAAAAM1BMVEUAAABzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3Nzc3NCdvgaAAAAEHRSTlMAECAwQFBgcICPn6+/z9/vIxqCigAAALFJREFUKM+NktEOhSAMQ48wFXVC//9r7wNqblTUvRHOmqYrXMfWyNcxKXXt30WnydZAhx1wzwc93UrH+ukGYL7DfocWSdK8v6dN9xm17BFYWn5DRVegV1EJEFpm1+qtA5I8RYDZXnPtfFt6iX8EgqUs25Y2X1fBSRmYVIri4auEO9EsaQT67AbMFb0rRap5DkAMz+hxpyX+3y02zOrah6EVQj63bGkH3CXpPf6jFOsH9gd6Aw4dpyxnbwAAAABJRU5ErkJggg==');\
  background-repeat: no-repeat;\
  padding-right: 48px;\
}\
#bella-nav .megamenu .tray > a.moveMoney:hover {\
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACsAAAATCAYAAAAJdPQAAAABBUlEQVRIx81WUQ3FIAychEmYBCQg4UmYhEnAwSRMAhKQgAQkIOH2UxIeAdaXV7Y1IUsGW4/jenSaBAOABuABqOntQWBTGADzXUkt/o8AQI8EujIAOBqBCXoXZxmA6iR0NZboFBwDsJMGGhuJDsb3e4/ZR4ASk0kKqpizQzULYOkA9cXaD72P2XMp/jVUp76j0blYa7I5U/NTAMdQB/hhY3NRTO4WL2V67VaRjCZWk23piw01ZSXFXqrs0Kj4mOlWMWX1pW8pNkuj3ypFFmq+S3ptAVWSQE3HJ9eK1S1PAeXcQLZR/Vc3mBqpUwj2ButoBwgC3Za9xWuJ5Vy/zxs8s1/wbwJ7AhtPN8Lo91qTAAAAAElFTkSuQmCC');\
}\
#bella-nav .megamenu .tray > span a {\
  display: inline-block;\
  padding: 0 15px;\
}\
#bella-nav .megamenu .tray > span a span {\
  color: #CCCCCC;\
  display: inline-block;\
  padding-left: 5px;\
}\
#bella-nav .megamenu .tray > span a span.change {\
  display: none;\
}\
#bella-nav .megamenu .tray > span a:hover span.last {\
  display: none;\
}\
#bella-nav .megamenu .tray > span a:hover span.change {\
  display: inline-block;\
  text-align: right;\
}\
#bella-nav .megamenu .tray > span a.gain span {\
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAICAYAAADN5B7xAAAAcElEQVQYV2P4//8/Azo2XmvcC8LY5DAE9FfqOwHxfyh2wqtBc7EmPxA/BOL/UAxi8+PUoDhHcT4Q/0fD87FqkJoiFQLE/3HgEBQNQj1CEkD8Foj/48AgOQm4Bq5Wri1A/J8A3gLWwFLPkgbE/4nEaQBpZcut5/ffxAAAAABJRU5ErkJggg==') right center no-repeat;\
  padding-right: 18px;\
}\
#bella-nav .megamenu .tray > span a.loss span {\
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAwAAAAICAYAAADN5B7xAAAAgElEQVQYV2N4EO1pBsR/gPg/AQxSY8bw//9/hjvhro1A/J8AbgSpBWu4GmjPDMQngfg/DgySY4ZrAOFznhbqQPwNiP+jYZCYOkwdXAMIH3MyyAfi/2g4H1kNigYQ3melsQuI/0PxLnR5DA3bjRSlgfgtFEsT1ADCG3Wko0AYmxwA7A7u6YNhykoAAAAASUVORK5CYII=') right center no-repeat;\
  padding-right: 18px;\
}\
#bella-nav .megamenu.open {\
  border-top: 2px solid #414040;\
  box-shadow: rgba(0, 0, 0, 0.4) 0 4px 15px;\
}\
#bella-nav .megamenu .menu.hidden,\
#bella-nav .megamenu .menus .hidden,\
#bella-nav .megamenu .tab.hidden {\
  display: none;\
}\
#bella-nav .megamenu .tab {\
  background: #fff;\
  box-shadow: rgba(0, 0, 0, 0.4) 0 15px 30px -10px inset;\
  border-bottom: 1px solid #000;\
  color: black;\
  display: none;\
  font-size: 150%;\
  overflow: auto;\
  text-align: left;\
}\
#bella-nav .megamenu .tab .menus {\
  background: #2d2d2d;\
  color: #fff;\
  float: left;\
  height: 100%;\
  width: 243px;\
}\
#bella-nav .megamenu .tab .menus h3 {\
  border-bottom: 1px solid #545454;\
  color: inherit;\
  font-size: 15px;\
  font-weight: bold;\
  margin: 0;\
  padding: 16px 20px 13px;\
}\
#bella-nav .megamenu .tab .menus h3.selected {\
  background: -webkit-linear-gradient(90deg, #c1c1c1, #e9e9e9);\
  background: linear-gradient(90deg, #c1c1c1, #e9e9e9);\
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#c1c1c1, endColorstr=#e9e9e9, GradientType=1);\
  color: #000;\
}\
#bella-nav .megamenu .tab .menus h3.selected:first-child {\
  box-shadow: rgba(0, 0, 0, 0.4) 0 15px 30px -10px inset;\
}\
#bella-nav .megamenu .tab .menu {\
  display: none;\
  float: left;\
  width: 484px;\
}\
#bella-nav .megamenu .tab .menu .column {\
  float: left;\
  margin: 0 20px;\
  width: 175px;\
}\
#bella-nav .megamenu .tab .menu .column a {\
  color: #03c;\
  display: block;\
  font-size: 14px;\
  margin: 13px 0;\
}\
#bella-nav .megamenu .tab .menu .column a:hover {\
  color: #000;\
}\
#bella-nav .megamenu .tab .menu .column h4 {\
  color: #333;\
  font-size: 15px;\
  font-weight: bold;\
  margin: 22px 0 13px;\
}\
#bella-nav .menubar {\
  margin: 0 auto;\
  position: relative;\
  width: 966px;\
  direction: ltr;\
  height: 53px;\
  padding-left: 142px;\
  text-align: left;\
  width: 824px;\
}\
#bella-nav .menubar > a {\
  color: #fff;\
  display: inline-block;\
  font-size: 16px;\
  height: 53px;\
  letter-spacing: 1px;\
  line-height: 57px;\
  margin-left: 29px;\
  vertical-align: bottom;\
}\
#bella-nav .menubar > a.logo {\
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAI4AAAAVCAMAAACngia6AAACtVBMVEUAAAAAAACJiYnh4eEAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADq6uoAAAD5+fm4uLgAAAAAAACNjY0AAAAAAAAAAAAAAAAAAACQkJDy8vIAAAAAAAAAAAAAAAAAAADExMRiUpSswFWQkJBKJZMAAADPz88AAAAAAABukwCampp2dnYAAAAAAAAAAAAAAAAAAAAAAAAAAAAAAADk5OSWlpYAAAAAAAAAAACDg4OAgIA5OTnZ2dmwsLAAAAAAAAAAAABpWJ8AAABsW6TCwsI7OzsAAAAAAABkMscAAAAAAABeXl61tbW8vLx3d3dhYWGioqJ1dXUAAACCrgCUlJQAAAAAAABbW1sAAAAAAACVxwBQUFAAAACOjo7Gxsaurq6jo6MAAABhMMKGhoZMJpmLi4t2dnaWqEqenp4bFyoZFSbAwMC5z1tETCIAAAAeGS0/NV++1V4sMRVnczNMP3NaS4h3d3fHx8fd3d2qqqqqqqp8ij0AAACVlZUAAACxsbGcnJxqdzQ2NjazyFg5MFdPQneuw1Z9fX0AAAAfGi95eXl9iz1nZ2c3LlOIiIhQQ3lNNIaKk2CarEzOzs5HO2udnZ1hYWFkZGR8fHwAAACFhYUlJSWqqqpBIIJXK652nQBSRXx3ngAAAACSkpJaLbQAAAA8PDwxMTFBIYJdXV04SwBzc3MAAAAAAACNnUVBQUEYDDG5ubnn5+dleCV8pgBycnIAAABaWlp4eHh7e3ulpaUAAACMuwBEWwCgoKAAAAAeDzsYDDBQawCHtACPj48wMDCkpKQkEklTKqZAIIF0mwBtbW12dnaUlJSbm5tNTU2ZmZk2G2teL7s5TAA3SgAyGWVIYADD2mCZzAD///9vXahmM8x6bZ9rSLpzWZmMpjOPryau0zB7a5ikq3uuu3J5bICEfJZBZmW4AAAA13RSTlMADHfYJTECBQkDARMI4hn1sRcQdB4GCgsOVesjKhoEKLrY2HGxK8QbLrFqihYUERgtIB8m1m1NHDt9QEfOoh00B+si9ahFMiH1FS9Xh66JKpdGJM6KNjBaOTr1M1ZzpaSWQ+t6q3VoumdBSJXrXFI7VfVHeaTEZ6TKeGBlN4k/oZ11S+J8h9aDPDlllndBeLGxxLWxl2hUUkJBXG2oZc66rqUNjNg+RFOWWFdqSzixP0Ow07HEaw9biIWUSeJrmUc3RHrYclWVLcOYqEtFbmk1a3riVllBRKYQFpYAAARlSURBVHhevZZle+NGEIBHtrySJRmkmGKKcwHnLkxN0lyTXNIkl6bXQ+j1egxlZmZmZmZmZmYGOynj7+iOVo6stf1cP937STM76329q9GzUA5JP+roNgW8/tOShhd2K5rgIBomREheP7boEA2Mc3LnHdc5Al5ZEPiqtMbNAhtCxyKSAgx7tpnlkvYACWtegOoqVzF1e8rpK2pnZ2evSkkN83K53LU6qAvoAFelO+btuHFFbE6ItN5KK9bLLHLMrhpPpiKESyK9SzV1+cGTMrhnnOzd6r1kjOqMHTp0WY4yLws1mOeqJrh57hN1LzCERzDRmGAxNzuemU5JmOTo1W/wLXx2qERnia60Hz9LOeHIw1HnCAGaSnWWXOzmU642MEnXsKFtBos9fOFeo1JpsmpyY8Z39qmmjs9ts68B0ppF6HMN2hwUItDVw4YCtLRQNVyiE29g26GewWJfk2TrsFk+yydFrKRNtf8wd7DnZlNnv33EAp2qBNB2Pur8S22OOVYGkPtEZAuW7mFVJTFo7veYrL4cTXcIQAlPxGdmAji6qV1hOoVp3cnTV5lG0xE7yQjFtMmTTj6l1dQZaBdMNAKS2imKNY/Xos/fudyTZ3aLYp8MiIilHgA7cAksIGKQRmep+Jh9hj4Gm2kcGJSZjj0trZ6LPpl2M9nvaMvwVNZImzq3D7D3vjoGxgW1iHlaP9MXGbmwq4LORSv8Jtn+hTR6FV+e6DTdqPh4QyN7mzkdUNRVeErdZrJ5rpmhgKOz3CHQ7561+SvHaKqg0xi0QJuZS2UAbwI9NrcIazFzpcHrQHp/DJs8zmauoJMA/9W/2Pz5B8NTVofDLRIAYxs+NUgklGEPvI4VepzNDAUcnXWdDi3bf7L5Lc9o+B86vpsEAKnDh4dwi8ez7jbsw2W6Um53Ah1msqiZCxR3VkIfAeGO7fWUO9Hm13z+rvmUe/wVdHx2+2bW3UtA0Zc5HQPjMvfutN5nngLrLLuZ57A7xMQrtPj9oS33o87v+fz84ZTfr4bL67C/0f2AaTZMi7QHAzNOMl3E1vHKRuihOH54puwkh/39MGnqkkFpeRht/qHHdMCjUWBUbnRhLUoEQ4QMBWd4HouZOgfiAk9sGMhgafypETtpL2vpOOnpA+3prdRm8XN5yvOjZFc6JLUJBV54UXgJz+dll8UruBHu5GreMLCzTUEdbtnyOm5RSdXj5tS/9jr6vBHblQ5ISQx8Ex2YezMkWKQGUGDzW5xNfOcUAU9pX1bQCZG3F+PmvNP+Luq8lwWLEJbWFAe9ERZEB/EMNr5v7oYEDOsbFP/AueyHHQYBqCnRCQHC3Xfwy0w++pjqfKKnxZX05fm0BSxitHSBWhT0LrWWVozPqlx11Z9/4dqwXIA55PV1LteXX31t//jgmoQqWZcgfln+NsjQiCInvvl2a4cEwnf5ld9nw8WXPNlb9sZHwlE6Jked10JFitAiLSIwuCsivyxUxGuIP1Bbov44KhDYnfwHnxuRBzatyE4AAAAASUVORK5CYII=') no-repeat left center;\
  overflow: hidden;\
  left: 0;\
  margin-left: 0;\
  padding-left: 142px;\
  position: absolute;\
  width: 0;\
}\
#bella-nav .menubar > a.menu {\
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAICAYAAAAvOAWIAAAAmklEQVQY032PsQnCYBSEP0VsBBMHcIZARnAE3cAiuIG2OoAoKWxE0Q2sMpL1XSmE2PyB8BM9eDz47jjew1Jm6WlpRo8spZYelrIRcAQWwARY9eSvgc+HwBmogaWlMmotQ7AGTi0sLDVhdoFtO6yIb9sH423pFXZj6dBmBp3wGLgA607HHdhMk+Tz6/MqNFaWUv7JUm7pZimPvS9tUHVcnxTYhAAAAABJRU5ErkJggg==') no-repeat right 26px;\
  font-weight: normal;\
  padding: 0 19px;\
  margin-left: 10px;\
}\
#bella-nav .menubar > a:hover,\
#bella-nav .menubar > a.current,\
#bella-nav .menubar > a.selected {\
  color: #96c83b;\
}\
#bella-nav .menubar > a.menu.selected,\
#bella-nav .menubar > a.current.menu,\
#bella-nav .menubar > a.menu:hover {\
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAsAAAAICAYAAAAvOAWIAAAAtklEQVQY023PIUtDYRTG8d8daytGw/YZBIO8cJvJtLAlq/FlYDBoGohah7Jx02DRvuQXeOFi8HOs6RcYWI5wmTvxef7Pc86pmrY+wx1ucyrfDqZp6xO8YdHHApcYYOr/rEMf9SK1x6Rp6+VB6zLAPV57OZUtcvizpq0fArzHLPScU9lWnZZHzLHDJy5wiqecyhz6na0vGOIG49A2eP4DqiOfv+MKH7jOqfwchSNwHreucipfXe8X33YwnsVwq0AAAAAASUVORK5CYII=') no-repeat right 26px;\
}\
#bella-nav .bella-floatL {\
  float: left;\
}\
#bella-nav div.etsearch {\
  float: right;\
  position: relative;\
  top: 15px;\
  font-family: Arial, sans-serif;\
  margin: 0px;\
  padding: 0px;\
  /*\
  input[type=\"text\"]::-ms-clear { / *This only work for IE10 standard mode, not compatibility mode* /\
    width : 0;\
    height: 0;\
    display: none;\
  }\
  */\
\
}\
#bella-nav div.etsearch ul.suggestedlist {\
  display: none;\
  float: right;\
  position: absolute;\
  border: 1px solid #3e3e3e;\
  border-radius: 4px;\
  margin: 0px;\
  padding: 8px 0px;\
  width: 256px;\
  z-index: 1001;\
  background: #000000;\
  opacity: 0.99;\
  color: #c0c0c0;\
  font-size: 13px;\
  list-style: none outside none;\
  top: 24px;\
  /* Same as height of the inputs */\
\
  left: 0px;\
  box-shadow: 1px 2px 3px #3e3e3e;\
}\
#bella-nav div.etsearch ul.suggestedlist li.autocompletelist {\
  margin: 0px;\
  color: #c0c0c0;\
  padding: 3px 8px;\
  line-height: 15px;\
  /* Fix layout issue for pages under Tools & Screeners */\
\
}\
#bella-nav div.etsearch ul.suggestedlist li.autocompletelist div {\
  padding: 0px 15px;\
}\
#bella-nav div.etsearch ul.suggestedlist li.autocompletelist div span {\
  color: #FFFFFF;\
}\
#bella-nav div.etsearch ul.suggestedlist li.autocompletelist div.suggested-category {\
  font-weight: bold;\
  color: #7f7f81;\
  font-size: 15px;\
  padding: 0px 5px;\
}\
#bella-nav div.etsearch ul.suggestedlist li.autocompletelist div.company-header {\
  padding-top: 15px;\
}\
#bella-nav div.etsearch ul.suggestedlist li.autocompletelist table.suggestedItem tr {\
  padding: 0px;\
  font-size: 13px;\
  color: #c0c0c0;\
}\
#bella-nav div.etsearch ul.suggestedlist li.autocompletelist table.suggestedItem tr td.bella-sel-symbol {\
  width: 80px;\
  vertical-align: top;\
}\
#bella-nav div.etsearch ul.suggestedlist li.autocompletelist table.suggestedItem tr td span {\
  color: #FFFFFF;\
}\
#bella-nav div.etsearch ul.suggestedlist li.category {\
  border-bottom: 1px solid #323232;\
  margin: 0px 0px 8px;\
}\
#bella-nav div.etsearch ul.suggestedlist li.row-state-hover,\
#bella-nav div.etsearch ul.suggestedlist li.row-state-hover table.suggestedItem tr {\
  text-align: left;\
  color: #96c83b;\
  background-color: #3e3e3e;\
  cursor: pointer;\
  margin: 0px;\
}\
#bella-nav div.etsearch ul.suggestedlist li.row-state-hover div {\
  color: #96c83b;\
}\
#bella-nav div.etsearch ul.suggestedlist li.row-state-hover div span,\
#bella-nav div.etsearch ul.suggestedlist li.row-state-hover table.suggestedItem tr td span {\
  font-weight: bold;\
  color: #96c83b;\
}\
#bella-nav div.etsearch ul.site-search {\
  width: 321px;\
  /*Adjust the width of the dropdown for Site search */\
\
  right: 0px;\
  left: 0px;\
  padding-top: 2px;\
}\
#bella-nav div.etsearch .search {\
  padding-left: 10px;\
}\
#bella-nav div.etsearch .search input.searchtext {\
  background: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAPCAYAAAA71pVKAAAA+UlEQVR42qyTrQrCUBSANzGIj6AgE0RmEpMGEatvYFLL3mFlyeYrrGi2aREsBoMIgmDQsCT40xR8gPkNjjDmbvDnwMfhwr5zzj2X6b7va99GQvshkuGDZVkpkg1dMOAGU3Bc1z1GZf01tohzqMMM1pCDNjygQYGDqrMtYo+PRqFpBqQlDKGmunMw6iwsBsF5T+pDlUKmSjZk1LhYSS6q5LvcMS4MyVeVPAmWw2ilyAukZR8X2KgW5kArWA5CX0Y1RCzDGfLgvT2VdDFlq9VQ0bPkDJygyRK9NzlSpCh33EjHBWRhi1xRynFBwQJpDB3k3Ufy33+MpwADAIC9U42iDLBHAAAAAElFTkSuQmCC') no-repeat scroll 5px 5px #5b5b5b;\
  background-color: #5B5B5B !important;\
  /*Fix white bg in Futures site */\
\
  border: medium none;\
  border-radius: 3px 0 0 3px;\
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2) inset;\
  font-family: \"Arial\", sans-serif;\
  color: #CCCCCC;\
  font-size: 11px;\
  height: 24px;\
  line-height: 24px;\
  /* IE */\
\
  padding: 0px 17px 0px 26px;\
  width: 96px;\
  margin-right: -4px;\
}\
#bella-nav div.etsearch .search input.searchtext:hover {\
  background-color: #F8F8F8 !important;\
}\
#bella-nav div.etsearch .search input.searchtext:focus {\
  background-color: #F8F8F8 !important;\
  border-color: rgba(82, 168, 236, 0.8);\
  box-shadow: 0 0 7px #656262;\
  color: #414141;\
  outline: 0 none;\
}\
#bella-nav div.etsearch .symbol {\
  position: relative;\
}\
#bella-nav div.etsearch .symbol input.searchsymbol {\
  background-color: #5B5B5B !important;\
  border: medium none;\
  border-radius: 3px 0 0 3px;\
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2) inset;\
  font-family: \"Arial\", sans-serif;\
  color: #CCCCCC;\
  font-size: 11px;\
  height: 24px;\
  line-height: 24px;\
  /* IE */\
  padding: 0px 5px;\
  width: 70px;\
}\
#bella-nav div.etsearch .symbol input.searchsymbol:hover {\
  background-color: #F8F8F8 !important;\
}\
#bella-nav div.etsearch .symbol input.searchsymbol:focus {\
  background-color: #F8F8F8 !important;\
  border-color: rgba(82, 168, 236, 0.8);\
  box-shadow: 0 0 7px #656262;\
  color: #414141;\
  outline: 0 none;\
}\
#bella-nav div.etsearch div.symbol-go-btn,\
#bella-nav div.etsearch div.text-go-btn {\
  float: left;\
  background: -webkit-linear-gradient(#4c4b4b, #282828);\
  background: linear-gradient(#4c4b4b, #282828);\
  filter: progid:DXImageTransform.Microsoft.gradient(startColorstr=#4c4b4b, endColorstr=#282828, GradientType=0);\
  position: relative;\
  border-radius: 0 3px 3px 0;\
  color: #BFBABA;\
  font-size: 10px;\
  height: 18px;\
  padding: 6px 6px 0px;\
  width: auto;\
  text-align: center;\
}\
#bella-nav div.etsearch div.symbol-go-btn:hover,\
#bella-nav div.etsearch div.text-go-btn:hover {\
  background-color: #545252;\
  background-image: none;\
  color: #ffffff;\
  cursor: pointer;\
}\
#bella-nav div.etsearch .bella-location-trigger {\
  float: left;\
  display: block;\
  position: relative;\
  background: no-repeat scroll 20px #5b5b5b;\
  border-left: 1px solid #5B5B5B;\
  width: 30px;\
  height: 24px;\
}\
#bella-nav div.etsearch .bella-location-trigger:hover {\
  color: #96c83b;\
  background-color: #3e3e3e;\
  cursor: pointer;\
}\
#bella-nav div.etsearch .bella-location-trigger a.bella-location-text {\
  color: #CCCCCC;\
  font-size: 10px;\
  line-height: 26px;\
  padding-left: 3px;\
}\
#bella-nav div.etsearch .bella-location-trigger a.bella-location-text:hover {\
  color: #ffffff;\
}\
#bella-nav div.etsearch .bella-location-trigger,\
#bella-nav div.etsearch ul.bella-locations li:first-child {\
  background-image: url('data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAcAAAAHCAYAAADEUlfTAAAARUlEQVQY02MoKS7+jwszAIm9OCQPgCQNgPgPFkljkCQIL0WTAPEZYJLSQPwTKgGiVZAlQbgdKjkBJoYsyQ/E54FYCCYGACBNX4RJdWo1AAAAAElFTkSuQmCC');\
}\
#bella-nav div.etsearch ul.bella-locations {\
  display: none;\
  background: #000000;\
  color: #8C8A8A;\
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.31), 0 1px 0 rgba(0, 0, 0, 0.05) inset;\
  list-style-type: none;\
  padding: 3px 0px;\
  position: absolute;\
  right: 0px;\
  margin-top: -26px;\
  width: 30px;\
  z-index: 100;\
}\
#bella-nav div.etsearch ul.bella-locations li:first-child {\
  background-position: 20px 6px;\
  background-repeat: no-repeat;\
}\
#bella-nav div.etsearch ul.bella-locations li:first-child:hover {\
  line-height: 20px;\
  padding: auto 5px;\
}\
#bella-nav div.etsearch ul.bella-locations li {\
  cursor: pointer;\
  float: none;\
  font-size: 10px;\
  height: auto;\
  line-height: 20px;\
  padding: 0 0 0 3px;\
  width: 30px;\
}\
#bella-nav div.etsearch ul.bella-locations li:hover {\
  background-color: #3e3e3e;\
  color: #96c83b;\
  width: 27px;\
}\
#bella-nav a {\
  font-weight: normal;\
  font-family: inherit;\
  outline: 0 none;\
}\
#bella-nav h3,\
#bella-nav h4 {\
  font-family: inherit;\
  text-transform: inherit;\
}\
#bella-nav a {\
  text-decoration: none !important;\
}\
#bella-nav a {\
  font-size: inherit;\
}\
#bella-nav .date {\
  width: auto;\
}\
#bella-nav .date {\
  font-size: inherit;\
}\
#bella-nav .tab {\
  border: 0;\
  cursor: inherit;\
  float: none;\
  line-height: inherit;\
  padding: 0;\
}\
</style>").appendTo($("head"));
        $nav.toggleClass("rtl", !! model.rtl).html(templates["bella-nav"](model));

        /* global positionFlyout: false, flyout: false, neoAjax: false */

        function updateAlertCount(count) {
            $nav.find(".tray .alerts span").data("count", count).css("display", count > 0 ? "inline" : "none").text(count > 10 ? "10+" : count);
        }

        (function() {
            $nav.find(".tray .alerts").bind("click", function(event) {
                neoAjax("/app/accountnav/navheader/alerts.json", {}, function(response) {
                    updateAlertCount(response.data.UnreadAlertsCount);
                    flyout($nav.find(".tray .alerts"), templates.alerts(response.data.AlertsInbox));
                });
            });

            $nav.delegate("ul.alerts .delete", "click", function(event) {
                var $alert = $(this).parent();

                neoAjax("/app/alerts/delete.json?alertId=" + $alert.data("alert-id"));

                var $list = $alert.parent();

                $alert.remove();
                $list.children().removeClass("odd");
                $list.children(":odd").addClass("odd");

                var $button = $nav.find(".tray .alerts");

                updateAlertCount($button.children("span").data("count") - 1);

                // when deleting an alert, the dimensions of the flyout can change
                positionFlyout($button, $list);
            });

            function openWindow(url) {
                window.open(url, "_blank", "width=604,height=400,toolbar=no,location=no,scrollbars=yes,menubar=no,resizable=yes,left=5,top=5");
            }

            $nav.delegate("ul.alerts a:not(.delete)", "click", function(event) {
                openWindow("https://sit.etrade.com/e/t/alerts/readmessage?eventid=" + $(this).parent().data("alert-id"));
            });

            $nav.delegate(".see-all-alerts", "click", function(event) {
                openWindow("https://sit.etrade.com/e/t/alerts/AlertInbox");
            });

            // alert count should precede title in rtl languages
            if (model.rtl) {
                var $count = $nav.find(".tray .alerts span");

                $count.prependTo($count.parent());
            }
        })();

        (function() {
            // this is a very quick-and-dirty parser which ignores a lot of edge cases;
            // we're only looking for best-guess matching
            function parse(url) {
                url = url.split("#")[0];
                url = url.split("?");

                var params = url[1];

                url = {
                    // for internal pages, path is much more important than domain/port
                    // (especially in DVL/DIT/SIT/UAT)
                    base: url[0].replace(/^https?:\/\/[^\/]*\betrade\.com(?::\d+)?/, "etrade.com"),
                    params: {}
                };

                if (params) {
                    $.each(params.split("&"), function(i, param) {
                        param = param.split("=");

                        // don't track ploc; we know it to be irrelevant and capable of
                        // generating false negatives
                        if (param[0] === "ploc") {
                            return;
                        }

                        url.params[param[0]] = param[1];
                    });
                }

                return url;
            }

            var current = parse(document.location.toString());
            var found = false;

            // recursively descend into the megamenu model to find matching links

            function search(tabIndex, node) {
                if (found) {
                    return false;
                }

                if (node.columns) {
                    $.each(node.columns, function(i, column) {
                        $.each(column, function(i, node) {
                            return search(tabIndex, node);
                        });
                    });
                } else if (node.links || node.menus) {
                    $.each(node.links || node.menus, function(i, node) {
                        return search(tabIndex, node);
                    });
                } else if (node.url) {
                    var candidate = parse(node.url);

                    if (current.base !== candidate.base) {
                        return;
                    }

                    var mismatch = false;

                    $.each(current.params, function(name, value) {
                        if (candidate.params[name] !== value) {
                            mismatch = true;

                            return false;
                        }
                    });

                    if (!mismatch) {
                        // +1 to skip the logo
                        $nav.find(".menubar a").eq(tabIndex + 1).addClass("current");

                        found = true;
                    }
                }
            }

            // ad-hoc test for vendors known to only be on the Research tab
            if (/\b(?:bonddesk|futuresnewstoday|morningstar|wallst)\.com/.test(document.location)) {
                $nav.find(".menubar a[data-id='research']").addClass("current");
            } else {
                // fall back to URL matching
                $.each(model.megamenu, search);
            }
        })();

        /* global neoAjax */
        (function() {
            var $symbolInput = $nav.find(".searchsymbol");
            var $textInput = $nav.find(".searchtext");
            var $country = $nav.find(".bella-location-text");
            var $locations = $nav.find("ul.bella-locations");
            var $suggestedList = $nav.find(".suggestedlist");
            var symbolSearchUrl = "https://sit.etrade.com/e/t/invest/quotesandresearch?cmenu=DetQ&sym=";
            var symbolGlobalSearchUrl = "https://sit.etrade.com/e/t/gmc/globalsnapshot?cmenu=DetQ&sym=";
            //AF: text search: 'https://sit30w86m7.etrade.com/e/t/search/etrade?searchtext=' + inputValue + '&_formtarget=etrade&skinnertab=';
            var textSearchUrl = "https://sit.etrade.com/e/t/search/etrade?searchtext=";

            function resetSearch(event, oInput) {
                $suggestedList.html('');
                if ($suggestedList.hasClass('site-search')) $suggestedList.removeClass('site-search');
                $suggestedList.hide();
                if (typeof oInput === 'undefined') {
                    if ($symbolInput.attr("autocomplete") === "on") {
                        oInput = $symbolInput;
                    } else oInput = $textInput;
                }
                oInput.attr("autocomplete", "off");
            }

            function appendItemToList(item, category) {
                var $item = $("<li class='autocompletelist'></li>");

                if (category) {
                    $item = $("<li class='autocompletelist category'></li>");
                    //Add more padding-top for Company header
                    if (category.toLowerCase() == "company") {
                        $item.append($('<div class="suggested-category company-header">').html(category));
                    } else {
                        $item.append($('<div class="suggested-category">').html(category));
                    }

                } else {
                    if (typeof item === 'object') { //Symbol search 

                        $item.append($('<table class="suggestedItem">').append($('<tr/>')
                            .append($('<td class="bella-sel-symbol">').html(highlightNeedle(item.htmlSymbol, $symbolInput.val())))
                            .append($('<td>').html(highlightNeedle(item.description, $symbolInput.val())))));
                    } else { //Text search 
                        $item.append($('<div class="bella-sel-symbol">').html(highlightNeedle(item, $textInput.val())));
                    }
                }
                $item.appendTo($suggestedList);
                return $item;
            }

            function highlightNeedle(s, needle) {
                var regexp = new RegExp("(?![^&;]+;)(?!<[^><]*)(" + needle.replace(/([\^\$\(\)\[\]\{\}\*\.\+\?\|\\])/gi, "\\$1") + ")(?![^><]*>)(?![^&;]+;)", "gi");
                return s.replace(regexp, '<span>$1</span>');
            }

            function createSuggestedSymbolList(resObj) {
                var item = {};
                var $liElm;
                $suggestedList.html('');

                for (var i = 0; i < resObj.length; i++) {
                    item.htmlSymbol = resObj[i].htmlSymbol;
                    item.description = resObj[i].description;
                    $liElm = appendItemToList(item);
                    setRowStatus($liElm, $symbolInput);
                    $liElm.bind("input.focus", fillInput);
                }
            }

            function createSuggestedTextList(resObj) {
                var $liElm;
                var etCategoryHeaderAdded = false,
                    compCategoryHeaderAdded = false;

                $suggestedList.show();
                $suggestedList.addClass('site-search');

                $suggestedList.html('');

                for (var i = 0; i < resObj.length; i++) {

                    if (resObj[i].Type == "Etrade") {

                        if (!etCategoryHeaderAdded) {
                            //Add Header
                            appendItemToList('', "E*TRADE Financial");
                            etCategoryHeaderAdded = true;
                        } else {
                            $liElm = appendItemToList(resObj[i].Content);
                        }

                    }
                    if (resObj[i].Type == "Company") {

                        if (!compCategoryHeaderAdded) {
                            //Add Header
                            appendItemToList('', resObj[i].Type);
                            compCategoryHeaderAdded = true;
                        } else {
                            $liElm = appendItemToList(resObj[i].Content);
                        }
                    }

                    if (typeof $liElm !== 'undefined') {
                        setRowStatus($liElm, $textInput);
                        $liElm.bind("input.focus", fillInput);
                    }

                }

            }

            function invokeSearchPage(e, url) {
                window.location = url;
            }

            function fillInput(event, data) {
                data.input.val(data.selectValue);
            }

            function setRowStatus(rowObj, oInput) {

                rowObj.mousemove(function(e) {

                    var curSelItem = $suggestedList.find(".row-state-hover");
                    //Remove prev highlighted class
                    if (curSelItem) {
                        curSelItem.removeClass("row-state-hover");
                    }

                    $(this).addClass('row-state-hover');

                })
                    .mouseup(function() {
                        oInput.val($(this).find(".bella-sel-symbol").html().replace(new RegExp("<span>|</span>", "gi"), ''));
                        //For Site search only
                        if (oInput.hasClass('searchtext')) {
                            invokeSearchPage('', textSearchUrl + oInput.val());
                        }
                    });

            }


            function symbolLookupRequest(oInput) {
                var symbol = oInput.val();

                if (symbol && symbol.length > 0) {

                    $suggestedList.show();
                    oInput.attr("autocomplete", "on");

                    var lookup_url = "/app/product/lookup/lookup.json?q=" + symbol;

                    neoAjax(lookup_url, {}, function(resObj) {
                        if (!(resObj && resObj.data)) {
                            return;
                        } else {
                            var suggestions = resObj.data.response;
                            if ('undefined' !== typeof suggestions) {
                                for (var i = 0; i < suggestions.length; i++) {
                                    suggestions[i].htmlSymbol = suggestions[i].symbol;
                                    suggestions[i].description = suggestions[i].description;
                                }

                                createSuggestedSymbolList(suggestions);
                            }
                        }

                    });

                }
            }

            function textLookupRequest(oInput) {

                var text = oInput.val();
                oInput.attr("autocomplete", "on");

                $.ajax({
                    url: "https://sit.etrade.com/e/t/search/searchsuggestforward.json",
                    dataType: "jsonp",
                    data: {
                        searchtext: text,
                        q: text,
                        limit: 13,
                        timestamp: new Date().getTime()
                    },
                    success: function(data) {

                        if ('undefined' !== typeof data && 'undefined' !== typeof data.Results && $.isArray(data.Results)) {

                            $suggestedList.show();
                            $suggestedList.addClass('alignR');
                            createSuggestedTextList(data.Results.reverse());
                        }
                    }
                });

            }

            function traverseSuggestedList(oInput, key, selItem) {

                if (typeof selItem !== 'undefined') {
                    selItem.removeClass('row-state-hover');
                    if (key == 40) { //Arrow down

                        selItem = selItem.next();
                        if (selItem.hasClass("category")) {
                            selItem = selItem.next();
                        }
                    } else { //38: arrow up 
                        selItem = selItem.prev();
                        if (selItem.hasClass("category")) {
                            selItem = selItem.prev();
                        }
                    }

                } else {
                    var $li;
                    if (key == 38) {
                        var $lastChild = $suggestedList.find('li:last-child');
                        if ($lastChild.hasClass("category")) {
                            $li = $lastChild.prev();
                        } else {
                            $li = $lastChild;
                        }

                    } else {
                        var $firstChild = $suggestedList.find('li:first-child');
                        if ($firstChild.hasClass("category")) {
                            $li = $firstChild.next();
                        } else {
                            $li = $firstChild;
                        }
                    }

                    if (!$li.hasClass("category")) selItem = $li;
                    else selItem = $li.next();

                }


                if (selItem && selItem.length > 0) {
                    selItem.addClass('row-state-hover');
                    var symValue = selItem.find(".bella-sel-symbol").html();
                    selItem.triggerHandler("input.focus", [{
                        "input": oInput,
                        "selectValue": symValue.replace(new RegExp("<span>|</span>", "gi"), '')
                    }]);
                }

            }

            function upAndDownArrowsAction(oInput, key) {
                if (oInput.attr("autocomplete") == "on") {
                    var $selectedItem = $suggestedList.find("li.row-state-hover");

                    if ($selectedItem.hasClass("row-state-hover")) {
                        traverseSuggestedList(oInput, key, $selectedItem);
                    } else {
                        traverseSuggestedList(oInput, key);
                    }
                }
            }

            function initSearch(oElm, requestSearchURL) {

                $.each(oElm, function() {
                    $(this).keyup(function(e) {
                        var k = e.keyCode || e.which;
                        var inputValue = $(this).val();
                        if (k == 13) {

                            $suggestedList.triggerHandler("resetsearch", [$(this)]);

                            if (inputValue.length > 0) {

                                if ($(this).hasClass("searchtext")) {
                                    requestSearchURL = requestSearchURL.concat(inputValue);
                                } else { //Symbol search
                                    //Check country
                                    if ($country.html() === "US") {
                                        requestSearchURL = symbolSearchUrl.concat(inputValue);
                                    } else if ($country.html() === "UK") { //Pass different country code for UK
                                        requestSearchURL = symbolGlobalSearchUrl.concat(inputValue + "&country=GB");
                                    } else {
                                        requestSearchURL = symbolGlobalSearchUrl.concat(inputValue + "&country=" + $country.html());
                                    }

                                }
                                $(this).triggerHandler("enter.search", [requestSearchURL]);
                            }


                        } else if (k == 40 || k == 38) {
                            upAndDownArrowsAction($(this), k);
                        } else {
                            if (oElm.hasClass('searchtext')) textLookupRequest($(this));
                            else symbolLookupRequest($(this));
                        }
                    })
                        .bind('enter.search', invokeSearchPage)
                        .blur(function() {
                            if ($(this).val().length === 0) {
                                if (requestSearchURL) {
                                    $(this).val('Search');
                                } else {
                                    $(this).val('Symbol');
                                }
                            }
                        })
                        .click(function() { //For IE 8
                            $(this).val('');
                        });

                });

            }


            $("body").mouseup(function() {
                $suggestedList.triggerHandler("resetsearch");
                $locations.hide();
            });

            $nav.delegate(".bella-location-trigger", "click", function() {
                var $locText = $(this).find("a.bella-location-text");
                $locations.show();
                $locations.find("li").each(function() {

                    $(this).bind('click', function(e) {
                        //e.preventDefault();
                        $locText.html($(this).html());
                        $locations.hide();
                        return false;
                    });

                });
            });

            //GO buttons
            $nav.delegate(".symbol-go-btn", "click", function() {
                var url;
                var inputValue = $symbolInput.val();

                if ($country.html() === "US") {
                    url = symbolSearchUrl + inputValue;
                } else if ($country.html() === "UK") { //Pass different country code for UK
                    url = symbolGlobalSearchUrl + inputValue + "&country=GB";
                } else {
                    url = symbolGlobalSearchUrl + inputValue + "&country=" + $country.html();
                }

                if (inputValue.length > 0) {
                    $symbolInput.triggerHandler("enter.search", [url]);
                }
            });

            $nav.delegate(".text-go-btn", "click", function() {

                var inputValue = $textInput.val();
                var url = textSearchUrl + inputValue;

                if (inputValue.length > 0) {
                    $textInput.triggerHandler("enter.search", [url]);
                }
            });

            initSearch($symbolInput);
            initSearch($textInput, textSearchUrl);

            $suggestedList.bind("resetsearch", resetSearch);

        })();

        function positionFlyout($owner, $flyout) {
            var css = $owner.offset();

            css.left += $owner.outerWidth() / 2;
            css.top += $owner.outerHeight();
            css.visibility = "hidden";

            $flyout = $flyout.closest(".flyout").css(css);

            positionFlyout.positioning = true;

            // flyout's dimensions may have just changed, so give the browser a chance to 'tick'
            window.setTimeout(function() {
                positionFlyout.positioning = false;

                $flyout.css({
                    left: parseInt($flyout.css("left"), 10) - $flyout.outerWidth() / 2 + "px",
                    visibility: "visible"
                });
            }, 0);
        }

        function closeFlyouts() {
            // IE will fire `mouseleave` while repositioning flyouts
            if (!positionFlyout.positioning) {
                $nav.find(".flyout").remove();
            }
        }

        function flyout($owner, content) {
            closeFlyouts();

            var $flyout = $("<div class='flyout'><div/>" + content + "</div>");

            $flyout.appendTo($nav);

            positionFlyout($owner, $flyout);
        }

        $nav.delegate(".flyout", "mouseleave", closeFlyouts);
        $nav.bind("mouseleave", closeFlyouts);

        if (typeof document.body.style.boxShadow === "undefined") {
            $nav.addClass("no-box-shadow");
        }

        // if nav is running in a frame, make sure all links break out of it
        if (window.top !== window) {
            $nav.delegate("a", "click", function(event) {
                // only operate on normal links
                if (/^http/.test(this.href)) {
                    window.top.location = this.href;
                }
            });
        }

        function hover(selector, onHoverBegin, onHoverEnd) {
            var xCur, yCur, xPrev, yPrev;
            
            $nav.delegate(selector, {
                mouseenter: function(event) {
                    var element = this;
                    clearTimeout(element.hoverTimeout);

                    function checkHover() {
                        if ((Math.pow(xPrev - xCur, 2) + Math.pow(yPrev - yCur, 2)) < 9) {
                            element.hoverTriggered = true;

                            $(element).unbind("mousemove.bellaHover");

                            onHoverBegin.apply(element, [event]);
                        } else {
                            xPrev = xCur;
                            yPrev = yCur;

                            element.hoverTimeout = setTimeout(checkHover, 85);
                        }
                    }

                    $(this).bind("mousemove.bellaHover", function(event) {
                        xCur = event.pageX;
                        yCur = event.pageY;
                    });

                    xCur = event.pageX;
                    yCur = event.pageY;

                    // ensure non-match on first (undelayed) check
                    xPrev = -100;
                    yPrev = -100;

                    checkHover();
                },

                mouseleave: function(event) {
                    clearTimeout(this.hoverTimeout);
                    $(this).unbind("mousemove.bellaHover");

                    if (this.hoverTriggered) {
                        this.hoverTriggered = false;

                        onHoverEnd.apply(this, [event]);
                    }
                }
            });
        }

        /* global neo, neoAjax */

        var setPollInterval, updateIndex;

        (function() {
            var commafy = /(\d)(\d{3}(?:,|$))/;

            function format(value) {
                value = (value + "").split(".");

                var match;

                while (commafy.test(value[0])) {
                    value[0] = value[0].replace(commafy, "$1,$2");
                }

                value[1] = value[1] ? (value[1] + "0").substring(0, 2) : "00";

                return value.join(".");
            }

            updateIndex = function(index) {
                var symbol = index.symbol;
                var change = index.change;
                var last = index.lastPrice;
                var $index = $nav.find(".megamenu .tray a[data-symbol='" + symbol + "']");

                if (!(symbol && change && last && $index.length)) {
                    // data received was incomplete or for an unknown index
                    return;
                }

                $index.toggleClass("gain", change > 0).toggleClass("loss", change < 0);

                change = format(parseFloat(change));
                last = format(parseFloat(last));

                $index.children("span.change").text(change).width($index.children("span.last").text(last).width());
            };

            var pollDisabled = false;
            var pollInterval = 10 * 1000;
            var pollTimeout;

            setPollInterval = function(newInterval) {
                pollInterval = newInterval;

                if (!pollDisabled && pollInterval > 0) {
                    window.clearTimeout(pollTimeout);

                    pollTimeout = window.setTimeout(poll, pollInterval);
                }
            };

            function poll() {
                neoAjax("/app/accountnav/navheader/indexquotes.json", {}, function(response) {
                    if (pollDisabled) {
                        return;
                    }

                    pollTimeout = window.setTimeout(poll, pollInterval);

                    if (!(response && response.data && response.data.IndexQuotes)) {
                        // could not find indices in response
                        return;
                    }

                    $.each(response.data.IndexQuotes, function(i, index) {
                        //update the current time stamp when received from the server
                        //keeps the indices fetch time in sync with the time displayed on nav
                        if (response.data.CurrentTime) {
                            $nav.find(".globalnav .date").text(response.data.CurrentTime);
                        }
                        updateIndex(index);
                    });
                });
            }

            // as Neo is expected not to be present in many cases, the nature of any
            // failures is assumed to be uninteresting unless debugging
            try {
                if (typeof neo !== "undefined") {
                    neo.events.subscribe("streaming.mdf.quote", $.map(model.tray.indices.symbols, function(symbol) {
                        return symbol.symbol;
                    }), {}, function(topic, id, message) {
                        if (!message.data) {
                            // can't happen?
                            return;
                        }

                        // if we're receiving streaming updates, polling is no longer necessary
                        window.clearTimeout(pollTimeout);

                        updateIndex(message.data);
                    }, $.noop);
                }
            } catch (ex) {
                $.noop(); // breakpoint here if debugging
            }

            $nav.delegate(".tray span a", "hover", function(event) {
                var $index = $(this);

                $index.css("color", event.type === "mouseenter" ? $index.data("color") : "");
            });
        })();

        /* global closeFlyouts, closeRightrail, hover, selectRightrail */

        var closeMegaMenu;

        (function() {
            var $megamenu = $nav.find(".megamenu");
            var trayHeight = $megamenu.find(".tray").outerHeight();

            // prevent flash of rightrail background
            $megamenu.height(trayHeight);

            var $openTab, $nextTab, closing;

            function getHeight($menu) {
                // 366px is the minimum total height for the right rail
                return Math.max($menu.data("height"), $menu.prevAll(".menus").data("height"), 366);
            }

            var $tempCurrent = $nav.find(".menubar .current");
            console.log($tempCurrent);
            closeMegaMenu = function() {
                if ($openTab && !closing) {
                    closeFlyouts();

                    closing = true;

                    closeRightrail();

                    $openTab.clearQueue().slideUp(function() {
                        closing = false;

                        $megamenu.removeClass("open");
                        $nav.find(".menubar .menu").removeClass("selected");
                        $tempCurrent.addClass("current");

                        $openTab = false;

                        if ($nextTab) {
                            openTab($nextTab);

                            $nextTab = false;
                        }
                    });

                    // animate the megamenu separately from the tab to prevent IE rendering bug
                    $megamenu.clearQueue().animate({
                        height: trayHeight
                    });
                }
            };

            function openTab($tab) {
                closeFlyouts();

                if ($openTab) {
                    closeMegaMenu();

                    $nextTab = $tab;
                } else {
                    $megamenu.addClass("open");
                    $tab.addClass("selected");
                    $tempCurrent.removeClass("current");

                    $openTab = $megamenu.find(".tab").eq($tab.prevAll(".menu").length);

                    // the first time a tab is opened, it has no selected menu
                    if (!$openTab.find(".menus h3.selected").length) {
                        selectMenu({
                            currentTarget: $openTab.find(".menus h3:first-child")[0]
                        });
                    }

                    var tabHeight = getHeight($openTab.children(".menu").eq($openTab.find("h3.selected").prevAll("h3").length));

                    $openTab.height(tabHeight).clearQueue().slideDown();

                    // animate the megamenu separately from the tab to prevent IE rendering bug
                    $megamenu.clearQueue().animate({
                        height: tabHeight + trayHeight + 1
                    });

                    selectRightrail($openTab.find(".menus h3.selected").data("rightrail"), true);
                }
            }

            function selectMenu(event) {
                var $target = $(event.currentTarget);
                var $parent = $target.parent();

                selectRightrail($target.data("rightrail"));

                $parent.find("h3").removeClass("selected");

                var $menu = $parent.parent().find(".menu").hide().eq($target.prevAll("h3").length).show();

                if ($openTab) {
                    var tabHeight = getHeight($menu);

                    $openTab.clearQueue().animate({
                        height: tabHeight
                    });

                    // animate the megamenu separately from the tab to prevent IE rendering bug
                    $megamenu.clearQueue().animate({
                        height: tabHeight + trayHeight + 1
                    });
                }

                $target.addClass("selected");
            }

            // allow browser to calculate the height of each menu and menu list
            $nav.find(".tab, .tab .menu").css({
                display: "block",
                visibility: "hidden"
            });

            window.setTimeout(function() {
                // record height of each menu and menu list
                $nav.find(".tab").each(function(i, tab) {
                    var $tab = $(tab);
                    var $menus = $tab.children(".menus");

                    $menus.data("height", $menus.height());

                    $tab.find(".menu").each(function(j, menu) {
                        var $menu = $(menu);

                        $menu.data("height", $menu.height());

                        $menu.css({
                            display: "none",
                            visibility: ""
                        });
                    });

                    $tab.css({
                        display: "none",
                        visibility: ""
                    });
                });
            }, 0);

            $nav.bind("mouseleave", closeMegaMenu);

            hover(".menubar .menu:not(.selected)", function(event) {
                openTab($(this));
            }, $.noop);

            hover(".menus h3", selectMenu, $.noop);
        })();

        // jshint scripturl: true
        /* global closeFlyouts, closeMegaMenu */

        // touch feature detection from Modernizr
        if ("ontouchstart" in window || window.DocumentTouch && document instanceof window.DocumentTouch) {
            // mouseout events do not fire reliably on iPad (and perhaps other tablets), so we must manufacture our own
            $(document).bind("touchend", function(event) {
                var $target = $(event.target);

                if (!$target.closest("#bella-nav .megamenu").length) {
                    closeMegaMenu();
                }

                if (!$target.closest("#bella-nav .flyout").length) {
                    closeFlyouts();
                }
            });

            // it's non-intuitive to have hover and click behavior on the same element with a click device
            $nav.find(".menubar .menu").attr("href", "javascript:void 0");
        }

        function neoAjax(path, payload, success) {
            if (!csrfToken) {
                if ("console" in window) {
                    window.console.error("Cannot make E*TRADE JSONP call; `etBellaNavToken` is missing.");
                }

                return;
            }

            var envelope = {
                value: payload || {}
            };

            envelope.value.navToken = csrfToken;
            envelope = JSON.stringify(envelope);

            $.ajax({
                url: "https://sit.etrade.com" + path,
                type: "GET",
                dataType: "jsonp",
                data: {
                    envelope: envelope
                },
                timeout: 1000,
                success: success
            });
        }

        (function() {
            if (!("OOo" in window)) {
                $.getScript("https://sit.etrade.com/skins/bella/js/opinionlab/oo_engine.min.js");
            }

            var config = {
                referrerRewrite: {
                    searchPattern: /^\w+:\/\/((?![^\/]+\.etrade\.com))/,
                    replacePattern: "https://sit.etrade.com/$1/"
                }
            };

            $nav.find(".globalnav .suggestions").click(function(event) {
                (new window.OOo.Ocode(config)).show();
            });
        })();

        var closeRightrail, selectRightrail;

        (function() {
            var $rightrail = $nav.find(".rightrail iframe");
            var requestTimeout;
            var currentTag = "";

            $(window).bind("message", function(event) {
                event = event.originalEvent; // jQuery can damage message events

                // respond to pings from other instances
                if (event.data === "bella-nav-ping") {
                    event.source.postMessage("bella-nav-pong", "*");
                }

                // check responses from content frame
                if (event.origin === "https://sit.etrade.com/app/rightrail" && event.data.substring(0, 15) === "bella-nav-rail=") {
                    if (event.data.substring(15) !== currentTag) {
                        requestRightrail();
                    }
                }
            });

            // if this isn't the outermost frame, check to see if there are other instances of bella nav
            if (window.frameElement) {
                $(window).bind("message", function(event) {
                    // if the ping is returned, this is a nested instance; kill the RR to prevent infinite recursion
                    if (event.originalEvent.data === "bella-nav-pong") {
                        $rightrail.remove().attr("src", "//:0"); // null URL
                        $rightrail = $(); // null jQuery set
                    }
                });

                window.parent.postMessage("bella-nav-ping", "*");
            }

            function requestRightrail(retries) {
                if (retries > 9) return; // if the RR just isn't responding, stop hammering it

                $rightrail[0].contentWindow.postMessage("bella-nav-rail=" + currentTag, "https://sit.etrade.com/app/rightrail");

                window.clearTimeout(requestTimeout);
                requestTimeout = window.setTimeout(function() {
                    requestRightrail((retries || 0) + 1);
                }, 100);
            }

            closeRightrail = function() {
                requestRightrail("");

                $rightrail.parent().clearQueue().show().animate({
                    width: "hide"
                });
            };

            selectRightrail = function(tag, animate) {
                currentTag = tag;

                if (animate) {
                    $rightrail.parent().clearQueue().hide().animate({
                        width: "show"
                    }, function() {
                        requestRightrail();
                    });
                } else {
                    requestRightrail();
                }
            };
        })();

        /* global neoAjax: false, setPollInterval: false, updateAlertCount: false, updateIndex: false */

        (function() {
            neoAjax("/app/accountnav/navheader.json", {}, function(response) {
                if (!(response && response.data)) {
                    // malformed response
                    return;
                }

                //update the current time stamp when received from the server
                if (response.data.CurrentTime) {
                    $nav.find(".globalnav .date").text(response.data.CurrentTime);
                }

                if (response.data.isPlatinumExecServices) {
                    $nav.find(".globalnav .phone").text(model.globalNav.platinumExecPhone);
                } else if (response.data.isPlatinum) {
                    $nav.find(".globalnav .phone").text(model.globalNav.platinumPhone);
                }

                updateAlertCount(response.data.UnreadAlertsCount);

                if (response.data.IndexQuotes) {
                    $.each(response.data.IndexQuotes, function(i, index) {
                        updateIndex(index);
                    });
                }

                if (response.data.pollInterval) {
                    setPollInterval(response.data.pollInterval);
                }

                if (response.data.ETLabsFlag) {
                    $nav.find(".megamenu [data-id='etlabs']").removeClass("hidden");
                }
            });
        })();

        /* global flyout */

        $nav.find(".tray .moveMoney").bind("click", function(event) {
            flyout($nav.find(".tray .moveMoney"), templates.links(model.tray.moveMoney.links));
        });

    });
})(jQuery, window.etBellaNavToken);