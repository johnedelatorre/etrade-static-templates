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
                "suggestions": {
                    "title": "Suggestions"
                },
                "service": {
                    "title": "Customer Service",
										"url": "#"
                },
                "completeview": {
                    "title": "Complete View",
                    "url": "#"
                },
                "threesixty": {
                    "title": "360",
                    "url": "#"
                },
                "home": {
                    "title": "Home",
                    "url": "#"
                }
            },
            "megamenu": [{
                "title": "Accounts",
                "url": "https://us.sit.etrade.com/app/accounts/etrade360?ploc=c-2014-Logo",
                "menus": [{
                    "title": "My Accounts",
                    "rightrail": {
                        "iframe": "https://sit.etrade.com/app/rightrail?tag=accounts"
                    },
                    "columns": [
                        [{
                            "title": "My Accounts",
                            "links": [{
                                "title": "My 360 Dashboard",
                                "url": "https://sit.etrade.com/app/accounts/etrade360"
                            }, {
                                "title": "Complete View",
                                "url": "https://sit.etrade.com/e/t/accounts/accountscombo"
                            }, {
                                "title": "Portfolios & Watch Lists",
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
                                "url": "https://sit.etrade.com/e/t/accounts/acctrecords"
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
                                "url": "https://bank.sit.etrade.com/e/t/accounts/bphomepage"
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
                    "rightrail": {
                        "iframe": "https://sit.etrade.com/app/rightrail?tag=info"
                    },
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
                    "rightrail": {
                        "iframe": "https://sit.etrade.com/app/rightrail?tag=tax"
                    },
                    "columns": [
                        [{
                            "title": "Tax Records",
                            "links": [{
                                "title": "Overview",
                                "url": "https://sit.etrade.com/e/t/accounts/acctrecords"
                            }, {
                                "title": "Tax Documents",
                                "url": "https://sit.etrade.com/e/t/accounts/acctrecords"
                            }, {
                                "title": "Tax Center",
                                "url": "https://sit.etrade.com/e/t/plan/tax"
                            }]
                        }, {
                            "title": "Account Records",
                            "links": [{
                                "title": "Trade Confirmation",
                                "url": "https://sit36w86m7.etrade.com:3443/e/t/onlinedocs/docsearch?doc_type=cnf"
                            }, {
                                "title": "Monthly Statements",
                                "url": "https://sit36w86m7.etrade.com:3443/e/t/onlinedocs/docsearch?doc_type=stmt"
                            }, {
                                "title": "Check Images",
                                "url": "https://sit36w86m7.etrade.com:3443/e/t/onlinedocs/docsearch"
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
                    "rightrail": {
                        "iframe": "https://sit.etrade.com/app/rightrail?tag=bank"
                    },
                    "links": [{
                        "title": "Overview",
                        "url": "https://bank.sit.etrade.com/e/t/bank/home"
                    }, {
                        "title": "Bank Account Details",
                        "url": "https://bank.sit.etrade.com/e/t/ibank/accountdetails"
                    }, {
                        "title": "Bill Pay",
                        "url": "https://bank.sit.etrade.com/e/t/accounts/bphomepage"
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
                "url": "https://www.etrade.wallst.com/v1/markets/overview/overview.asp",
                "menus": [{
                    "title": "News &amp; Insights",
                    "rightrail": {
                        "iframe": "https://sit.etrade.com/app/rightrail?tag=news"
                    },
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
                                "title": "Ideas &amp; Insights",
                                "url": "https://sit.etrade.com/e/t/invest/wsoddirect?wsod_page=/v1/ideafinder/overview/ideafinder.asp"
                            }]
                        }]
                    ]
                }, {
                    "title": "Guidance &amp; Advice",
                    "rightrail": {
                        "iframe": "https://sit.etrade.com/app/rightrail?tag=advice"
                    },
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
                    "rightrail": {
                        "iframe": "https://sit.etrade.com/app/rightrail?tag=education"
                    },
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
                    "rightrail": {
                        "iframe": "https://sit.etrade.com/app/rightrail?tag=products"
                    },
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
                                "url": "https://sit.etrade.com/e/t/invest/petprohome"
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
                    "rightrail": {
                        "iframe": "https://sit.etrade.com/app/rightrail?tag=tools"
                    },
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
                                "title": "Asset Allocation",
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
                    "rightrail": {
                        "iframe": "https://sit.etrade.com/app/rightrail?tag=community"
                    },
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
                "url": "https://us.sit.etrade.com/e/t/plan/retirement?ploc=c-2014-SubNav",
                "menus": [{
                    "title": "Retirement Planning",
                    "rightrail": {
                        "iframe": "https://sit.etrade.com/app/rightrail?tag=retirement"
                    },
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
                    "rightrail": {
                        "iframe": "https://sit.etrade.com/app/rightrail?tag=ira"
                    },
                    "links": [{
                        "title": "Overview",
                        "url": "https://sit.etrade.com/e/t/home/retirement-accounts-c"
                    }, {
                        "title": "Rollover IRAs",
                        "url": "https://sit.etrade.com/e/t/plan/rollover"
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
                    "rightrail": {
                        "iframe": "https://sit.etrade.com/app/rightrail?tag=rollovers"
                    },
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
                    "rightrail": {
                        "iframe": "https://sit.etrade.com/app/rightrail?tag=business"
                    },
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
                        "url": "https://sit.etrade.com/e/t/accounts/bphomepage"
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
                __p += '<div class="background">\n\t<div class="tray"></div>\n</div>\n\n<div class="globalnav">\n\t<span class="date"></span>' + 
                		'\n\t<a class="suggestions" href="#">' +
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
                        __p += '\n\t\t\t<a class="menu" href="' + this.url + '" ';
                        if (tab.id) {;
                            __p += ' data-id="' +
                                __e(tab.id) +
                                '"';
                        };
                        __p += '>' +
                            ((__t = (tab.title)) == null ? '' : __t) +
                            '</a>\n\t\t';
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
                                __e(JSON.stringify(menu.rightrail || tab.rightrail || {})) +
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
                __p += '\n\n\t<div class="rightrail"></div>\n\n\t<div class="tray">\n\t\t<span>\n\t\t\t';
                $.each(data.tray.indices.symbols, function(i, symbol) {;
                    __p += '\n\t\t\t\t<a class="gain"\n\t\t\t\t\thref="' +
                        __e(ploc("c-2014-TopNav", data.tray.indices.url + symbol.symbol)) +
                        '"\n\t\t\t\t\tdata-symbol="' +
                        __e(symbol.symbol) +
                        '"\n\t\t\t\t\tdata-color="' +
                        __e(symbol.color) +
                        '"\n\t\t\t\t>' +
                        ((__t = (symbol.title)) == null ? '' : __t) +
                        '<span class="last">15,999.59</span>\n\t\t\t';//+ <span class="change">&mdash;</span></a>;

                });
                __p += '\n\t\t</span>\n\n\t\t<a class="newAccount" href="' +
                    __e(ploc("c-2014-TopNav", data.tray.newAccount.url)) +
                    '">' +
                    ((__t = (data.tray.newAccount.title)) == null ? '' : __t) +
                    '</a>\n\t\t<a class="alerts" href="javascript:void 0">' + 
                    ((__t = (data.tray.alerts.title)) == null ? '' : __t) +
                    '<span>8</span></a>\n\t\t<a class="moveMoney" href="javascript:void 0">' +
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

            this["JST"]["rightrail"] = function(data) {
                var __t, __p = '',
                    __e = _.escape,
                    __j = Array.prototype.join;

                function print() {
                    __p += __j.call(arguments, '')
                }

                if (data.iframe) {;
                    __p += '\n\t<iframe src="' +
                        __e(data.iframe) +
                        '" allowTransparency="true" frameBorder="0"></iframe>\n';
                } else if (data.image && data.link) {;
                    __p += '\n\t<a href="' +
                        __e(data.link) +
                        '"><img ALT="[marketing image]" SRC="' +
                        __e(data.image) +
                        '" /></a>\n';
                };

                return __p
            };
        }).call({
            JST: templates
        }); // work around grunt-contrib-jst namespacing

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

                rowObj.mouseover(function(e) {

                    var curSelItem = $suggestedList.find(".row-state-hover");
                    //Remove prev highlighted class
                    if (curSelItem) {
                        curSelItem.removeClass("row-state-hover");
                    }

                    $(this).addClass('row-state-hover');
                    oInput.val($(this).find(".bella-sel-symbol").html().replace(new RegExp("<span>|</span>", "gi"), ''));

                });
                //For Site search only
                if (oInput.hasClass('searchtext')) {
                    rowObj.mouseup(function(e) {
                        invokeSearchPage('', textSearchUrl + oInput.val());
                    });
                }

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
                        .click(function() { //For IE
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
            css.top += $owner.outerHeight() + 2;
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
            // console.log('closed');
        }

        function flyout($owner, content) {

            closeFlyouts();

            var $flyout = $("<div class='flyout'><div/>" + content + "</div>");

            $flyout.appendTo($nav);

            positionFlyout($owner, $flyout);

        }

        $nav.on(".flyout", "mouseleave", closeFlyouts);
        $nav.on("mouseleave", closeFlyouts);

        // if nav is running in a frame, make sure all links break out of it
        if (window.top !== window) {
            $nav.delegate("a", "click", function(event) {
                // only operate on normal links
                if (/^http/.test(this.href)) {
                    window.top.location = this.href;
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

            $nav.find(".globalnav .date").text('November 21, 2013 02:49 PM ET'); // [new]

            $nav.delegate(".tray span a", "hover", function(event) {
                var $index = $(this);

                $index.css("color", event.type === "mouseenter" ? $index.data("color") : "");
            });
        })();

        /* global closeFlyouts, closeRightrail, selectRightrail */

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

            closeMegaMenu = function() {
                if ($openTab && !closing) {
                    closeFlyouts();

                    closing = true;

                    closeRightrail(true);

                    $openTab.clearQueue().slideUp(function() {
                        closing = false;

                        $megamenu.removeClass("open");
                        $nav.find(".menubar .menu").removeClass("selected");

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

                    $openTab = $megamenu.find(".tab").eq($tab.prevAll(".menu").length);

                    // the first time a tab is opened, it has no selected menu
                    if (!$openTab.find(".menus h3.selected").length) {
                        // selectRightrail($openTab.find(".menus h3:first-child").data("rightrail"));
                        // $openTab.find(".menus h3:first-child").trigger("mouseover");

                        // So sorry about this hack - hoverIntent hijacks the trigger("mouseover")
                        $openTab.find(".menus h3:first-child").addClass('selected').parents('.tab').find('.menu').first().show();
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
            $nav.delegate(this, "mouseleave", closeMegaMenu);
            $nav.delegate(".globalnav", "mouseenter", closeMegaMenu);
            $nav.delegate(".menubar .menu:not(.selected)", "hover", function(event) {
                openTab($(this));
            });

            $nav.hoverIntent({
                over: function(event) {
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
                },
                selector: ".menus h3",
                sensitivity: 3,
                interval: 50
            });
        })();

        /* global closeFlyouts, closeMegaMenu */

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
            var $rightrail = $nav.find(".rightrail");
            var nested = false; // used to detect whether the nav has accidentally been loaded in its own iframe

            $(window).bind("message", function(event) {
                event = event.originalEvent; // jQuery can damage message events

                // respond to pings from other instances
                if (event.data === "bella-nav-ping") {
                    event.source.postMessage("bella-nav-pong", "*");
                }
            });

            // if this isn't the outermost frame, check to see if there are other instances of bella nav
            if (window.frameElement) {
                $(window).bind("message", function(event) {
                    // if the ping is returned, this is a nested instance
                    if (event.originalEvent.data === "bella-nav-pong") {
                        nested = true;
                    }
                });

                window.parent.postMessage("bella-nav-ping", "*");
            }

            closeRightrail = function(animate) {
                $rightrail.children().removeClass("selected");

                if (animate) {
                    $rightrail.show().animate({
                        width: "hide"
                    });
                }
            };

            function openRightrail($el, animate) {
                closeRightrail();

                if (animate) {
                    $rightrail.hide().animate({
                        width: "show"
                    }, function() {
                        $el.addClass("selected");
                    });
                } else {
                    $rightrail.show();
                    $el.addClass("selected");
                }
            }

            selectRightrail = function(rightrail, animate) {
                // reject invalid selections
                if (!rightrail || !(rightrail.iframe || rightrail.image)) {
                    return;
                }

                var $content;

                if (rightrail.iframe) {
                    $content = $rightrail.find("iframe[src='" + rightrail.iframe + "']");
                } else if (rightrail.image) {
                    $content = $rightrail.find("img[src='" + rightrail.image + "']").parent();
                }

                if ($content.length) {
                    openRightrail($content, animate);
                } else if (!nested) { // don't load rightrail content if we're already inside a rightrail
                    $rightrail.append($(templates.rightrail(rightrail)));

                    selectRightrail(rightrail, animate);
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

                if (response.data.isPlatinum) {
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

                if (response.data.etlabs) {
                    $nav.find(".megamenu [data-id='etlabs']").removeClass("hidden");
                }
            });
        })();

        (function () {

        		// iframe white flash workaround
				    var div = document.createElement('div'),
				        ref = document.getElementsByTagName('base')[0] || 
				              document.getElementsByTagName('script')[0];
				    div.innerHTML = '&shy;<style> iframe { visibility: hidden; } </style>';
				    ref.parentNode.insertBefore(div, ref);
				    window.onload = function() {
				        div.parentNode.removeChild(div);
				    }
				})();

        /* global flyout */

        $nav.find(".tray .moveMoney").on("click", function(event) {
            flyout($nav.find(".tray .moveMoney"), templates.links(model.tray.moveMoney.links));
        });

    });
})(jQuery, window.etBellaNavToken);