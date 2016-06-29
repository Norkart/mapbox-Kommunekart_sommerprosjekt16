var layers= {
    "version": 8,
    "name": "Optimaliseringstest2",
    "metadata": {
        "mapbox:groups": {
            "1451977313614.045": {
                "name": "FKB-Vann",
                "collapsed": true
            },
            "1452168285291.4897": {
                "name": "Vegnavn",
                "collapsed": false
            },
            "1451981488150.5059": {
                "name": "FKB_Veger",
                "collapsed": true
            },
            "1451929922162.3518": {
                "name": "N1000",
                "collapsed": false
            },
            "1452065506439.5503": {
                "name": "N250_Veger",
                "collapsed": false
            },
            "1463636918781.4102": {
                "name": "Skrivemaate_N1000-N500",
                "collapsed": true
            },
            "1451929897910.7004": {
                "name": "N250_Markslag",
                "collapsed": false
            },
            "1452065569196.4487": {
                "name": "Veger",
                "collapsed": true
            },
            "1452026027041.0117": {
                "name": "N5000_Veger",
                "collapsed": false
            },
            "1452168476723.928": {
                "name": "Vegskilt",
                "collapsed": true
            },
            "1452087291214.7593": {
                "name": "N250_Tekst",
                "collapsed": false
            },
            "1452252506282.507": {
                "name": "FKB_tekst",
                "collapsed": true
            },
            "1460452470657.2046": {
                "name": "Tekst_Vann",
                "collapsed": true
            },
            "1463721086751.5496": {
                "name": "Group"
            },
            "1451985225857.1372": {
                "name": "ABAS_Grenser",
                "collapsed": true
            },
            "1463636370102.6504": {
                "name": "Skrivemaate_N5000",
                "collapsed": true
            },
            "1452004386525.3696": {
                "name": "N_Markslag",
                "collapsed": false
            },
            "1452065429029.964": {
                "name": "N1000_Veger",
                "collapsed": false
            },
            "1451976855822.7305": {
                "name": "FKB_Markslag",
                "collapsed": true
            },
            "1452064146135.4072": {
                "name": "N50_Markslag",
                "collapsed": false
            },
            "1452004886988.7139": {
                "name": "N_Annet",
                "collapsed": true
            },
            "1452088017207.6235": {
                "name": "N5000_Tekst",
                "collapsed": false
            },
            "1452013316104.845": {
                "name": "N50",
                "collapsed": false
            },
            "1451927961571.2327": {
                "name": "N250_Hoeydelag",
                "collapsed": true
            },
            "1451979086080.5315": {
                "name": "FKB_Bygning",
                "collapsed": true
            },
            "1451927947531.2378": {
                "name": "N250",
                "collapsed": false
            },
            "1463634697483.6973": {
                "name": "OSM_Labels",
                "collapsed": true
            },
            "1452169018974.0132": {
                "name": "OpenStreetMap",
                "collapsed": true
            },
            "1461904943095.7854": {
                "name": "FKB-Navn",
                "collapsed": true
            },
            "1451929870818.6047": {
                "name": "N1000_Markslag",
                "collapsed": false
            },
            "1451985720881.7998": {
                "name": "Hillshade",
                "collapsed": true
            },
            "1460452660757.481": {
                "name": "Skrivemaate",
                "collapsed": false
            },
            "1451985240593.179": {
                "name": "OSM_Labels",
                "collapsed": false
            },
            "1452087317478.8662": {
                "name": "Skrivemaate_N250_N50",
                "collapsed": true
            },
            "1452110999311.3271": {
                "name": "N50_Tekst",
                "collapsed": false
            }
        },
        "mapbox:autocomposite": true
    },
    "center": [
        10.836994238221791,
        59.88316142520608
    ],
    "zoom": 13.90641922700848,
    "bearing": 0,
    "pitch": 0,
    "sources": {
        "composite": {
            "url": "mapbox://mapbox.mapbox-streets-v7,mapbox.mapbox-terrain-v2,keino.8328776z,keino.btb1xd0f,keino.d6h26g0g,keino.3o3buv99,keino.0265oxm6,keino.2z35bhc7,keino.2hsr3nop,keino.4e8kthuy,keino.7x11tylg",
            "type": "vector"
        }
    },
    "sprite": "mapbox://sprites/keino/cio2gxo6b000wc7m7xfh2z02o",
    "glyphs": "mapbox://fonts/keino/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "interactive": true,
            "paint": {
                "background-color": "#ede9d9"
            }
        },
        {
            "id": "water",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1452169018974.0132"
            },
            "source": "composite",
            "source-layer": "water",
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#b2d8fa"
            }
        },
        {
            "id": "landcover_crop",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1452169018974.0132"
            },
            "source": "composite",
            "source-layer": "landcover",
            "maxzoom": 14,
            "interactive": true,
            "filter": [
                "==",
                "class",
                "crop"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#ddecb1",
                "fill-opacity": {
                    "base": 1.5,
                    "stops": [
                        [
                            2,
                            0.3
                        ],
                        [
                            14,
                            0
                        ]
                    ]
                },
                "fill-antialias": false
            }
        },
        {
            "id": "landcover_grass",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1452169018974.0132"
            },
            "source": "composite",
            "source-layer": "landcover",
            "maxzoom": 14,
            "interactive": true,
            "filter": [
                "==",
                "class",
                "grass"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#ddecb1",
                "fill-opacity": {
                    "base": 1.5,
                    "stops": [
                        [
                            2,
                            0.3
                        ],
                        [
                            14,
                            0
                        ]
                    ]
                },
                "fill-antialias": false
            }
        },
        {
            "id": "landcover_scrub",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1452169018974.0132"
            },
            "source": "composite",
            "source-layer": "landcover",
            "maxzoom": 14,
            "interactive": true,
            "filter": [
                "==",
                "class",
                "scrub"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#ddecb1",
                "fill-opacity": {
                    "base": 1.5,
                    "stops": [
                        [
                            2,
                            0.3
                        ],
                        [
                            14,
                            0
                        ]
                    ]
                },
                "fill-antialias": false
            }
        },
        {
            "id": "landcover_wood",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1452169018974.0132"
            },
            "source": "composite",
            "source-layer": "landcover",
            "maxzoom": 14,
            "interactive": true,
            "filter": [
                "==",
                "class",
                "wood"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#ddecb1",
                "fill-opacity": {
                    "base": 1.5,
                    "stops": [
                        [
                            2,
                            0.3
                        ],
                        [
                            14,
                            0
                        ]
                    ]
                },
                "fill-antialias": false
            }
        },
        // {
        //     "id": "landuse_park",
        //     "type": "fill",
        //     "metadata": {
        //         "mapbox:group": "1452169018974.0132"
        //     },
        //     "source": "composite",
        //     "source-layer": "landuse",
        //     "interactive": true,
        //     "filter": [
        //         "==",
        //         "class",
        //         "park"
        //     ],
        //     "layout": {
        //         "visibility": "visible"
        //     },
        //     "paint": {
        //         "fill-color": "#cde8a2"
        //     }
        // },
        // {
        //     "id": "landuse",
        //     "type": "fill",
        //     "metadata": {
        //         "mapbox:group": "1452169018974.0132"
        //     },
        //     "source": "composite",
        //     "source-layer": "landuse",
        //     "interactive": true,
        //     "filter": [
        //         "==",
        //         "class",
        //         "wood"
        //     ],
        //     "layout": {
        //         "visibility": "none"
        //     },
        //     "paint": {
        //         "fill-color": "#c2ddbb"
        //     }
        // },
        {
            "id": "building_walls",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1452169018974.0132"
            },
            "source": "composite",
            "source-layer": "building",
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#cfc4c3",
                "fill-translate": [
                    0,
                    0
                ]
            }
        },
        {
            "id": "building_roofs",
            "metadata": {
                "mapbox:group": "1452169018974.0132"
            },
            "ref": "building_walls",
            "interactive": true,
            "paint": {
                "fill-color": {
                    "base": 1,
                    "stops": [
                        [
                            13,
                            "#f4efe8"
                        ],
                        [
                            14,
                            "#ece3e0"
                        ]
                    ]
                },
                "fill-translate": {
                    "base": 1,
                    "stops": [
                        [
                            16,
                            [
                                0,
                                0
                            ]
                        ],
                        [
                            19,
                            [
                                -4,
                                -4
                            ]
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-main-back",
            "type": "line",
            "metadata": {
                "mapbox:group": "1452169018974.0132"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 6,
            "interactive": true,
            "filter": [
                "in",
                "class",
                "secondary",
                "tertiary"
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#d9d3c9",
                "line-width": {
                    "base": 1.2,
                    "stops": [
                        [
                            10,
                            0.75
                        ],
                        [
                            18,
                            2
                        ]
                    ]
                },
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            8.5,
                            0.5
                        ],
                        [
                            10,
                            0.75
                        ],
                        [
                            18,
                            26
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            9.99,
                            0
                        ],
                        [
                            10,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-secondary-tertiary",
            "metadata": {
                "mapbox:group": "1452169018974.0132"
            },
            "ref": "road-main-back",
            "interactive": true,
            "paint": {
                "line-color": "#fff",
                "line-width": {
                    "base": 1.2,
                    "stops": [
                        [
                            4,
                            0.6
                        ],
                        [
                            7,
                            1.5
                        ],
                        [
                            22,
                            10
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-trunk-back",
            "type": "line",
            "metadata": {
                "mapbox:group": "1452169018974.0132"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 6,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "trunk"
                ],
                [
                    "!=",
                    "structure",
                    "tunnel"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "#949494"
                        ],
                        [
                            22,
                            "#999a99"
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            4,
                            0.75
                        ],
                        [
                            18,
                            2
                        ]
                    ]
                },
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            18,
                            32
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            6,
                            0.7
                        ],
                        [
                            10,
                            0.9
                        ]
                    ]
                }
            }
        },
        {
            "id": "tunnel-trunk-back",
            "type": "line",
            "metadata": {
                "mapbox:group": "1452169018974.0132"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 6,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "trunk"
                ],
                [
                    "==",
                    "structure",
                    "tunnel"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "#949494"
                        ],
                        [
                            22,
                            "#999a99"
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            16,
                            2
                        ]
                    ]
                },
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            18,
                            32
                        ]
                    ]
                },
                "line-opacity": 1,
                "line-dasharray": [
                    3,
                    3
                ]
            }
        },
        {
            "id": "road-trunk",
            "type": "line",
            "metadata": {
                "mapbox:group": "1452169018974.0132"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 6,
            "interactive": true,
            "filter": [
                "==",
                "class",
                "trunk"
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(252,211,25,1)",
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            4,
                            1.2
                        ],
                        [
                            18,
                            32
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-trunk-tunnel",
            "metadata": {
                "mapbox:group": "1452169018974.0132"
            },
            "ref": "tunnel-trunk-back",
            "interactive": true,
            "paint": {
                "line-color": "#f2de9e",
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            18,
                            32
                        ]
                    ]
                }
            }
        },
        {
            "id": "street-back",
            "type": "line",
            "metadata": {
                "mapbox:group": "1452169018974.0132"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "in",
                    "class",
                    "street",
                    "street_limited"
                ],
                [
                    "!=",
                    "type",
                    "construction"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            12.99,
                            "#f5f0e9"
                        ],
                        [
                            13,
                            "#cbbcb9"
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            2
                        ],
                        [
                            13,
                            3
                        ],
                        [
                            20,
                            44
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-main",
            "type": "line",
            "metadata": {
                "mapbox:group": "1452169018974.0132"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 6,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "main"
                ],
                [
                    "==",
                    "type",
                    "primary"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": "#fff",
                "line-width": {
                    "base": 1.2,
                    "stops": [
                        [
                            4,
                            0.6
                        ],
                        [
                            7,
                            1.5
                        ],
                        [
                            22,
                            10
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-primary-back",
            "type": "line",
            "metadata": {
                "mapbox:group": "1452169018974.0132"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 6,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "primary"
                ],
                [
                    "!in",
                    "structure",
                    "bridge",
                    "tunnel"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": "#d9d3c9",
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            16,
                            1
                        ]
                    ]
                },
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            18,
                            32
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            9.99,
                            0
                        ],
                        [
                            10,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-primary",
            "metadata": {
                "mapbox:group": "1452169018974.0132"
            },
            "ref": "road-primary-back",
            "interactive": true,
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            5,
                            "#ede9d9"
                        ],
                        [
                            8,
                            "#fff"
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            18,
                            32
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-major-back",
            "type": "line",
            "metadata": {
                "mapbox:group": "1452169018974.0132"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 6,
            "interactive": true,
            "filter": [
                "all",
                [
                    "in",
                    "class",
                    "motorway",
                    "main"
                ],
                [
                    "!in",
                    "type",
                    "trunk",
                    "primary",
                    "tertiary",
                    "secondary"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "#949494"
                        ],
                        [
                            22,
                            "#999a99"
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.2,
                    "stops": [
                        [
                            4,
                            2
                        ],
                        [
                            7,
                            5
                        ],
                        [
                            22,
                            14
                        ]
                    ]
                },
                "line-gap-width": 0,
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            6,
                            0.7
                        ],
                        [
                            10,
                            0.9
                        ]
                    ]
                }
            }
        },
        {
            "id": "street",
            "metadata": {
                "mapbox:group": "1452169018974.0132"
            },
            "ref": "street-back",
            "interactive": true,
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            12.99,
                            "#dfd3d5"
                        ],
                        [
                            13,
                            "#fff"
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            11,
                            0.75
                        ],
                        [
                            12.99,
                            1.5
                        ],
                        [
                            13,
                            1.75
                        ],
                        [
                            20,
                            30
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-major",
            "metadata": {
                "mapbox:group": "1452169018974.0132"
            },
            "ref": "road-major-back",
            "interactive": true,
            "paint": {
                "line-color": "rgba(255,224,84,1)",
                "line-width": {
                    "base": 1.2,
                    "stops": [
                        [
                            6,
                            1
                        ],
                        [
                            7,
                            3
                        ],
                        [
                            22,
                            10
                        ]
                    ]
                }
            }
        },
        {
            "id": "building_roof_edges",
            "type": "line",
            "metadata": {
                "mapbox:group": "1452169018974.0132"
            },
            "source": "composite",
            "source-layer": "building",
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#cfc4c3",
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14.95,
                            0
                        ],
                        [
                            18,
                            1
                        ]
                    ]
                },
                "line-translate": {
                    "base": 1,
                    "stops": [
                        [
                            16,
                            [
                                -0.25,
                                -0.25
                            ]
                        ],
                        [
                            22,
                            [
                                -4,
                                -4
                            ]
                        ]
                    ]
                }
            }
        },
        // {
        //     "id": "water-label-test",
        //     "type": "symbol",
        //     "metadata": {
        //         "mapbox:group": "1452169018974.0132"
        //     },
        //     "source": "composite",
        //     "source-layer": "water_label",
        //     "minzoom": 3,
        //     "maxzoom": 10,
        //     "interactive": true,
        //     "layout": {
        //         "text-line-height": 1.1,
        //         "text-size": {
        //             "base": 1,
        //             "stops": [
        //                 [
        //                     3,
        //                     12
        //                 ],
        //                 [
        //                     6,
        //                     16
        //                 ]
        //             ]
        //         },
        //         "symbol-spacing": {
        //             "base": 1,
        //             "stops": [
        //                 [
        //                     4,
        //                     100
        //                 ],
        //                 [
        //                     6,
        //                     400
        //                 ]
        //             ]
        //         },
        //         "text-font": [
        //             "DIN Offc Pro Italic",
        //             "Arial Unicode MS Regular"
        //         ],
        //         "symbol-placement": "point",
        //         "visibility": "none",
        //         "text-field": "{name_en}",
        //         "text-letter-spacing": 0.1,
        //         "text-max-width": 5
        //     },
        //     "paint": {
        //         "text-color": "#092dce",
        //         "text-halo-color": "hsl(0, 0%, 100%)",
        //         "text-halo-width": 1
        //     }
        // },
        {
            "id": "marine-label-sm-ln",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1452169018974.0132"
            },
            "source": "composite",
            "source-layer": "marine_label",
            "minzoom": 3,
            "maxzoom": 10,
            "interactive": true,
            "filter": [
                "in",
                "labelrank",
                4,
                5,
                6
            ],
            "layout": {
                "text-line-height": 1.1,
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            12
                        ],
                        [
                            6,
                            16
                        ]
                    ]
                },
                "symbol-spacing": {
                    "base": 1,
                    "stops": [
                        [
                            4,
                            100
                        ],
                        [
                            6,
                            400
                        ]
                    ]
                },
                "text-font": [
                    "DIN Offc Pro Italic",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": "line",
                "visibility": "visible",
                "text-field": "{name_en}",
                "text-letter-spacing": 0.1,
                "text-max-width": 5
            },
            "paint": {
                "text-color": "#74aee9",
                "text-halo-color": "rgba(255,255,255,0.77)",
                "text-halo-width": 0.75
            }
        },
        {
            "id": "marine-label-md-ln",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1452169018974.0132"
            },
            "source": "composite",
            "source-layer": "marine_label",
            "minzoom": 3,
            "maxzoom": 10,
            "interactive": true,
            "filter": [
                "all",
                [
                    "in",
                    "$type",
                    "LineString",
                    "Polygon"
                ],
                [
                    "in",
                    "labelrank",
                    3,
                    2
                ]
            ],
            "layout": {
                "text-line-height": 1.1,
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            2,
                            12
                        ],
                        [
                            5,
                            20
                        ]
                    ]
                },
                "symbol-spacing": {
                    "base": 1,
                    "stops": [
                        [
                            4,
                            100
                        ],
                        [
                            6,
                            400
                        ]
                    ]
                },
                "text-font": [
                    "DIN Offc Pro Italic",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": "line",
                "visibility": "visible",
                "text-field": "{name_en}",
                "text-letter-spacing": 0.15,
                "text-max-width": 5
            },
            "paint": {
                "text-color": "#74aee9",
                "text-halo-color": "rgba(255,255,255,0.77)",
                "text-halo-width": 0.75
            }
        },
        {
            "id": "marine-label-md-pt",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1452169018974.0132"
            },
            "source": "composite",
            "source-layer": "marine_label",
            "minzoom": 2,
            "maxzoom": 8,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    "in",
                    "labelrank",
                    3,
                    2
                ]
            ],
            "layout": {
                "text-line-height": 1.1,
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            2,
                            12
                        ],
                        [
                            5,
                            20
                        ]
                    ]
                },
                "symbol-spacing": {
                    "base": 1,
                    "stops": [
                        [
                            4,
                            100
                        ],
                        [
                            6,
                            400
                        ]
                    ]
                },
                "text-font": [
                    "DIN Offc Pro Italic",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": "point",
                "visibility": "visible",
                "text-field": "{name_en}",
                "text-letter-spacing": 0.15,
                "text-max-width": 5
            },
            "paint": {
                "text-color": "#74aee9",
                "text-halo-color": "rgba(255,255,255,0.77)",
                "text-halo-width": 0.75
            }
        },
        {
            "id": "marine-label-lg",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1452169018974.0132"
            },
            "source": "composite",
            "source-layer": "marine_label",
            "minzoom": 1,
            "maxzoom": 4,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    "==",
                    "labelrank",
                    1
                ]
            ],
            "layout": {
                "text-line-height": 1.1,
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            1,
                            14
                        ],
                        [
                            4,
                            30
                        ]
                    ]
                },
                "symbol-spacing": {
                    "base": 1,
                    "stops": [
                        [
                            4,
                            100
                        ],
                        [
                            6,
                            400
                        ]
                    ]
                },
                "text-font": [
                    "DIN Offc Pro Italic",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": "point",
                "visibility": "visible",
                "text-field": "{name_en}",
                "text-letter-spacing": 0.15,
                "text-max-width": 5
            },
            "paint": {
                "text-color": "hsl(210, 75%, 59%)",
                "text-halo-color": "rgba(255,255,255,0.77)",
                "text-halo-width": 0.75
            }
        },
        {
            "id": "admin-2-boundaries",
            "type": "line",
            "metadata": {
                "mapbox:group": "1452169018974.0132"
            },
            "source": "composite",
            "source-layer": "admin",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "admin_level",
                    2
                ],
                [
                    "==",
                    "maritime",
                    0
                ],
                [
                    "==",
                    "disputed",
                    0
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": "#787680",
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            0.5
                        ],
                        [
                            10,
                            2
                        ]
                    ]
                }
            }
        },
        {
            "id": "admin-3-4-boundaries",
            "type": "line",
            "metadata": {
                "mapbox:group": "1452169018974.0132"
            },
            "source": "composite",
            "source-layer": "admin",
            "interactive": true,
            "filter": [
                "all",
                [
                    ">=",
                    "admin_level",
                    3
                ],
                [
                    "==",
                    "maritime",
                    0
                ]
            ],
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            "#c3bfcc"
                        ],
                        [
                            7,
                            "#aba8b3"
                        ]
                    ]
                },
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            0.75
                        ],
                        [
                            12,
                            1.5
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            2,
                            0
                        ],
                        [
                            3,
                            1
                        ]
                    ]
                },
                "line-dasharray": [
                    2,
                    0
                ]
            }
        },
        {
            "id": "n50bak-kommune",
            "type": "fill",
            "source": "composite",
            "source-layer": "n50bak_kommune",
            "minzoom": 4,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "hsl(0, 0%, 100%)",
                "fill-antialias": false
            }
        },
        {
            "id": "n250-hoeydelag-0-500m",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451927961571.2327"
            },
            "source": "composite",
            "source-layer": "N250_Hoeydelag_0_500m",
            "minzoom": 4,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "rgba(247,244,235,1)",
                "fill-opacity": 1
            }
        },
        {
            "id": "n250-hoeydelag-500-1000m",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451927961571.2327"
            },
            "source": "composite",
            "source-layer": "N250_Hoeydelag_500_1000m",
            "minzoom": 4,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#f9f3e5",
                "fill-opacity": 1
            }
        },
        {
            "id": "n250-hoeydelag-1000-1500m",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451927961571.2327"
            },
            "source": "composite",
            "source-layer": "N250_Hoeydelag_1000_1500m",
            "minzoom": 4,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#f9ecd1",
                "fill-opacity": 1
            }
        },
        {
            "id": "n250-hoeydelag-1500-2000m",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451927961571.2327"
            },
            "source": "composite",
            "source-layer": "N250_Hoeydelag_1500_2000m",
            "minzoom": 4,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#f9e6bd",
                "fill-opacity": 1
            }
        },
        {
            "id": "n250-hoeydelag-2000-2500m",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451927961571.2327"
            },
            "source": "composite",
            "source-layer": "N250_Hoeydelag_2000_2500m",
            "minzoom": 4,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#e9d0ab",
                "fill-opacity": 0.8
            }
        },
        {
            "id": "Havflate",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1452004386525.3696"
            },
            "source": "composite",
            "source-layer": "Havflate",
            "minzoom": 3,
            "maxzoom": 14,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            "#b2d8fa"
                        ],
                        [
                            14,
                            "#d1eafa"
                        ]
                    ]
                }
            }
        },
        {
            "id": "Skog",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1452004386525.3696"
            },
            "source": "composite",
            "source-layer": "Skog",
            "minzoom": 4,
            "maxzoom": 14,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#c2ddbb",
                "fill-opacity": 0.75
            }
        },
        {
            "id": "Tettbebyggelse",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1452004386525.3696"
            },
            "source": "composite",
            "source-layer": "Tettbebyggelse",
            "minzoom": 4,
            "maxzoom": 14,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "hsl(202, 7%, 87%)",
                "fill-opacity": 0.75
            }
        },
        {
            "id": "n50-industriomraade",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1452004386525.3696"
            },
            "source": "composite",
            "source-layer": "N50_Industriomraade",
            "minzoom": 8,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#d7dcdf",
                "fill-opacity": 0.45
            }
        },
        {
            "id": "Dyrketmark",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1452004386525.3696"
            },
            "source": "composite",
            "source-layer": "Dyrketmark",
            "maxzoom": 14,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#ecf7e6",
                "fill-opacity": 0.5
            }
        },
        {
            "id": "Bymessigbebyggelse",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1452004386525.3696"
            },
            "source": "composite",
            "source-layer": "BymessigBebyggelse",
            "maxzoom": 14,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#d7dcdf",
                "fill-opacity": 0.45
            }
        },
        {
            "id": "Aapentomraade",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1452004386525.3696"
            },
            "source": "composite",
            "source-layer": "Aapentomraade",
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#ecf7e6",
                "fill-opacity": 0.5
            }
        },
        {
            "id": "Park",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1452004386525.3696"
            },
            "source": "composite",
            "source-layer": "n50_Park",
            "minzoom": 3,
            "maxzoom": 14,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#95c9a3"
            }
        },
        {
            "id": "fkb-skog",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451976855822.7305"
            },
            "source": "composite",
            "source-layer": "FKB_ArealressursFlate_skog",
            "minzoom": 14,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#c5e0bd"
            }
        },
        {
            "id": "fkb-arealressursflate-bebyggelse",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451976855822.7305"
            },
            "source": "composite",
            "source-layer": "FKB_ArealressursFlate_bebyggelse",
            "minzoom": 14,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#d7dcdf"
            }
        },
        {
            "id": "fkb-arealressursflate-fulldyrka",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451976855822.7305"
            },
            "source": "composite",
            "source-layer": "FKB_ArealressursFlate_fulldyrka",
            "minzoom": 14,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#ecf7e6"
            }
        },
        {
            "id": "fkb-arealressursflate-overflatedyrka",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451976855822.7305"
            },
            "source": "composite",
            "source-layer": "FKB_ArealressursFlate_overflatedyrka",
            "minzoom": 14,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#ecf7e6"
            }
        },
        {
            "id": "fkb-arealressursflate-aapen-fastmark",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451976855822.7305"
            },
            "source": "composite",
            "source-layer": "FKB_ArealressursFlate_aapen_fastmark",
            "minzoom": 14,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#fafef5"
            }
        },
        {
            "id": "fkb-arealressursflate-innmarksbeite",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451976855822.7305"
            },
            "source": "composite",
            "source-layer": "fkb_arealressursflate_innmarksbeite",
            "minzoom": 14,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#fafef5"
            }
        },
        {
            "id": "fkb-sportidrettplass",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451976855822.7305"
            },
            "source": "composite",
            "source-layer": "fkb_sportidrettplass",
            "minzoom": 14,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#95c9a3",
                "fill-opacity": {
                    "base": 0.5,
                    "stops": [
                        [
                            14,
                            0.3
                        ],
                        [
                            22,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "fkb-lekeplass",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451976855822.7305"
            },
            "source": "composite",
            "source-layer": "fkb_lekeplass",
            "minzoom": 14,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#95c9a3"
            }
        },
        {
            "id": "fkb-idrettsanlegg",
            "type": "line",
            "metadata": {
                "mapbox:group": "1451976855822.7305"
            },
            "source": "composite",
            "source-layer": "FKB_Idrettsanlegg",
            "minzoom": 15,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#808080",
                "line-width": 0.6
            }
        },
        {
            "id": "fkb-industriomraade",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451976855822.7305"
            },
            "source": "composite",
            "source-layer": "FKB_Industriomraade",
            "minzoom": 14,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#e0e0e0"
            }
        },
        {
            "id": "fkb-park",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451976855822.7305"
            },
            "source": "composite",
            "source-layer": "FKB_Park",
            "minzoom": 14,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#95c9a3"
            }
        },
        {
            "id": "fkb-parkeringsomraadeavgrensning (1)",
            "type": "line",
            "metadata": {
                "mapbox:group": "1451976855822.7305"
            },
            "source": "composite",
            "source-layer": "fkb_parkeringsomraadeavgrensning",
            "minzoom": 14,
            "interactive": true,
            "layout": {
                "visibility": "visible",
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.3,
                    "stops": [
                        [
                            14,
                            0.4
                        ],
                        [
                            22,
                            0.8
                        ]
                    ]
                },
                "line-opacity": 0.65
            }
        },
        {
            "id": "hillshade_highlight_bright",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451985720881.7998"
            },
            "source": "composite",
            "source-layer": "hillshade",
            "maxzoom": 18,
            "interactive": true,
            "filter": [
                "==",
                "level",
                94
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#fff",
                "fill-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            15,
                            0.12
                        ],
                        [
                            18,
                            0
                        ]
                    ]
                },
                "fill-antialias": false
            }
        },
        {
            "id": "hillshade_highlight_med",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451985720881.7998"
            },
            "source": "composite",
            "source-layer": "hillshade",
            "interactive": true,
            "filter": [
                "==",
                "level",
                90
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#fff",
                "fill-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            15,
                            0.12
                        ],
                        [
                            18,
                            0
                        ]
                    ]
                },
                "fill-antialias": false
            }
        },
        {
            "id": "hillshade_shadow_faint",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451985720881.7998"
            },
            "source": "composite",
            "source-layer": "hillshade",
            "maxzoom": 17,
            "interactive": true,
            "filter": [
                "==",
                "level",
                89
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#5a5517",
                "fill-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            15,
                            0.05
                        ],
                        [
                            17,
                            0
                        ]
                    ]
                },
                "fill-antialias": false
            }
        },
        {
            "id": "hillshade_shadow_med",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451985720881.7998"
            },
            "source": "composite",
            "source-layer": "hillshade",
            "interactive": true,
            "filter": [
                "==",
                "level",
                78
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#5a5517",
                "fill-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            15,
                            0.05
                        ],
                        [
                            17,
                            0
                        ]
                    ]
                },
                "fill-antialias": false
            }
        },
        {
            "id": "hillshade_shadow_dark",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451985720881.7998"
            },
            "source": "composite",
            "source-layer": "hillshade",
            "interactive": true,
            "filter": [
                "==",
                "level",
                67
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#5a5517",
                "fill-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            15,
                            0.06
                        ],
                        [
                            17,
                            0
                        ]
                    ]
                }
            }
        },
        {
            "id": "hillshade_shadow_extreme",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451985720881.7998"
            },
            "source": "composite",
            "source-layer": "hillshade",
            "maxzoom": 17,
            "interactive": true,
            "filter": [
                "==",
                "level",
                56
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#5a5517",
                "fill-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            5,
                            0.06
                        ],
                        [
                            17,
                            0
                        ]
                    ]
                },
                "fill-antialias": false
            }
        },
        {
            "id": "Kystkontur",
            "type": "line",
            "metadata": {
                "mapbox:group": "1452004886988.7139"
            },
            "source": "composite",
            "source-layer": "Kystkontur",
            "minzoom": 5,
            "maxzoom": 14,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#87bef1",
                "line-width": 0.6
            }
        },
        {
            "id": "Innsjoe-skygge",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1452004886988.7139"
            },
            "source": "composite",
            "source-layer": "Innsjoe",
            "maxzoom": 14,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#92cafc",
                "fill-translate": {
                    "base": 1.5,
                    "stops": [
                        [
                            7,
                            [
                                0,
                                0
                            ]
                        ],
                        [
                            16,
                            [
                                -1,
                                -1
                            ]
                        ]
                    ]
                },
                "fill-translate-anchor": "viewport"
            }
        },
        {
            "id": "Innsjoe",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1452004886988.7139"
            },
            "source": "composite",
            "source-layer": "Innsjoe",
            "minzoom": 3,
            "maxzoom": 14,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#b2d8fa"
            }
        },
        {
            "id": "Innsjoekant",
            "type": "line",
            "metadata": {
                "mapbox:group": "1452004886988.7139"
            },
            "source": "composite",
            "source-layer": "Innsjoekant",
            "minzoom": 6,
            "maxzoom": 14,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#87bef1",
                "line-width": 0.6
            }
        },
        {
            "id": "Elvbekk-Linje",
            "type": "line",
            "metadata": {
                "mapbox:group": "1452004886988.7139"
            },
            "source": "composite",
            "source-layer": "Elvbekk",
            "minzoom": 8,
            "maxzoom": 15,
            "interactive": true,
            "filter": [
                "in",
                "$type",
                "LineString",
                "Polygon"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#87bef1"
            }
        },
        {
            "id": "Elvbekk-flate",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1452004886988.7139"
            },
            "source": "composite",
            "source-layer": "Elvbekk",
            "minzoom": 8,
            "maxzoom": 14,
            "interactive": true,
            "filter": [
                "==",
                "$type",
                "Polygon"
            ],
            "layout": {},
            "paint": {
                "fill-color": "#b2d8fa"
            }
        },
        {
            "id": "Elvbekkkant",
            "type": "line",
            "metadata": {
                "mapbox:group": "1452004886988.7139"
            },
            "source": "composite",
            "source-layer": "Elvbekkkant",
            "minzoom": 3,
            "maxzoom": 14,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#87bef1"
            }
        },
        {
            "id": "Snoeisbre",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1452004886988.7139"
            },
            "source": "composite",
            "source-layer": "Snoeisbre",
            "minzoom": 3,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#fff",
                "fill-outline-color": "rgba(199,199,199,0.49)",
                "fill-opacity": 0.65,
                "fill-antialias": true
            }
        },
        {
            "id": "Myr",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1452004886988.7139"
            },
            "source": "composite",
            "source-layer": "Myr",
            "minzoom": 3,
            "maxzoom": 14,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#fff",
                "fill-pattern": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            "myr_stor"
                        ],
                        [
                            8,
                            "myr"
                        ]
                    ]
                },
                "fill-antialias": true,
                "fill-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            4,
                            1
                        ],
                        [
                            7,
                            0.5
                        ]
                    ]
                }
            }
        },
        {
            "id": "Bygning",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1452004886988.7139"
            },
            "source": "composite",
            "source-layer": "Bygning",
            "minzoom": 12,
            "maxzoom": 14,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#c3c8cb",
                "fill-outline-color": "rgba(143,143,143,1)"
            }
        },
        {
            "id": "contour",
            "type": "line",
            "source": "composite",
            "source-layer": "contour",
            "interactive": true,
            "filter": [
                "!in",
                "index",
                -1,
                5,
                10
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#827d68",
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            11,
                            0.15
                        ],
                        [
                            12,
                            0.3
                        ]
                    ]
                },
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            13,
                            0.5
                        ],
                        [
                            16,
                            0.8
                        ]
                    ]
                }
            }
        },
        {
            "id": "contour-index",
            "type": "line",
            "source": "composite",
            "source-layer": "contour",
            "interactive": true,
            "filter": [
                "in",
                "index",
                5,
                10
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#827d68",
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            11,
                            0.25
                        ],
                        [
                            12,
                            0.5
                        ]
                    ]
                },
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            13,
                            0.6
                        ],
                        [
                            16,
                            1.2
                        ]
                    ]
                }
            }
        },
        {
            "id": "contour-index-label",
            "type": "symbol",
            "source": "composite",
            "source-layer": "contour",
            "minzoom": 11,
            "interactive": true,
            "filter": [
                "in",
                "index",
                5,
                10
            ],
            "layout": {
                "text-field": "{ele} m",
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            15,
                            9.5
                        ],
                        [
                            20,
                            12
                        ]
                    ]
                },
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": "line",
                "text-rotation-alignment": "map",
                "text-max-angle": 25,
                "visibility": "visible",
                "text-padding": 5
            },
            "paint": {
                "text-halo-color": "#ede9d9",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "#827d68"
            }
        },
        {
            "id": "fkb-elvbekk-flate",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451977313614.045"
            },
            "source": "composite",
            "source-layer": "FKB_ElvBekk_flate",
            "minzoom": 13,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#b2d8fa"
            }
        },
        {
            "id": "fkb-elvbekkkant",
            "type": "line",
            "metadata": {
                "mapbox:group": "1451977313614.045"
            },
            "source": "composite",
            "source-layer": "FKB_ElvBekkKant",
            "minzoom": 13,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#87bef1",
                "line-width": 1
            }
        },
        {
            "id": "fkb-arealressursflate-myr",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451977313614.045"
            },
            "source": "composite",
            "source-layer": "FKB_ArealressursFlate_myr",
            "minzoom": 14,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-pattern": "myr"
            }
        },
        {
            "id": "fkb-innsjoe-skygge",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451977313614.045"
            },
            "source": "composite",
            "source-layer": "FKB_Innsjoe",
            "minzoom": 14,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "hsl(208, 95%, 78%)",
                "fill-translate": {
                    "base": 1.2,
                    "stops": [
                        [
                            7,
                            [
                                0,
                                0
                            ]
                        ],
                        [
                            16,
                            [
                                -1,
                                -1
                            ]
                        ]
                    ]
                },
                "fill-translate-anchor": "viewport"
            }
        },
        {
            "id": "fkb-innsjoe",
            "metadata": {
                "mapbox:group": "1451977313614.045"
            },
            "ref": "fkb-innsjoe-skygge",
            "interactive": true,
            "paint": {
                "fill-color": "#b2d8fa"
            }
        },
        {
            "id": "fkb-innsjoekant",
            "type": "line",
            "metadata": {
                "mapbox:group": "1451977313614.045"
            },
            "source": "composite",
            "source-layer": "FKB_Innsjoekant",
            "minzoom": 14,
            "interactive": true,
            "layout": {
                "visibility": "visible",
                "line-join": "round"
            },
            "paint": {
                "line-color": "#87bef1",
                "line-width": 0.5
            }
        },
        {
            "id": "fkb-havflate",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451977313614.045"
            },
            "source": "composite",
            "source-layer": "FKB_Havflate",
            "minzoom": 14,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#d1eafa"
            }
        },
        {
            "id": "fkb-kystkontur",
            "type": "line",
            "metadata": {
                "mapbox:group": "1451977313614.045"
            },
            "source": "composite",
            "source-layer": "FKB_Kystkontur",
            "minzoom": 14,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#87bef1"
            }
        },
        {
            "id": "fkb-flytebrygge",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451977313614.045"
            },
            "source": "composite",
            "source-layer": "FKB_Flytebrygge",
            "minzoom": 14,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#fefefe",
                "fill-outline-color": "hsl(0, 0%, 61%)"
            }
        },
        {
            "id": "fkb-kystkonturtekniskanlegg",
            "type": "line",
            "metadata": {
                "mapbox:group": "1451977313614.045"
            },
            "source": "composite",
            "source-layer": "FKB_KystkonturTekniskAnlegg",
            "minzoom": 14,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#ababab"
            }
        },
        {
            "id": "fkb-flytebrygge-kant",
            "type": "line",
            "metadata": {
                "mapbox:group": "1451977313614.045"
            },
            "source": "composite",
            "source-layer": "FKB_Flytebrygge",
            "minzoom": 15,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#808080",
                "line-width": 0.6,
                "line-dasharray": {
                    "base": 1,
                    "stops": [
                        [
                            15,
                            [
                                3,
                                1
                            ]
                        ],
                        [
                            20,
                            [
                                9,
                                3
                            ]
                        ]
                    ]
                }
            }
        },
        {
            "id": "abas-fylkesgrense-bakgrunn",
            "type": "line",
            "metadata": {
                "mapbox:group": "1451985225857.1372"
            },
            "source": "composite",
            "source-layer": "abas_fylkesgrense",
            "minzoom": 4,
            "interactive": true,
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            2,
                            "#ede9d9"
                        ],
                        [
                            22,
                            "#f6e8e1"
                        ]
                    ]
                },
                "line-dasharray": [
                    1,
                    0
                ],
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            3.5
                        ],
                        [
                            10,
                            8
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            0
                        ],
                        [
                            8,
                            0.75
                        ]
                    ]
                },
                "line-blur": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            0
                        ],
                        [
                            8,
                            3
                        ]
                    ]
                }
            }
        },
        {
            "id": "abas-fylkesgrense",
            "metadata": {
                "mapbox:group": "1451985225857.1372"
            },
            "ref": "abas-fylkesgrense-bakgrunn",
            "interactive": true,
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            2,
                            "#c3bfcc"
                        ],
                        [
                            22,
                            "#7721a6"
                        ]
                    ]
                },
                "line-dasharray": {
                    "base": 1,
                    "stops": [
                        [
                            6,
                            [
                                2,
                                0
                            ]
                        ],
                        [
                            7,
                            [
                                2,
                                2,
                                6,
                                2
                            ]
                        ]
                    ]
                },
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            0.75
                        ],
                        [
                            12,
                            1.5
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            0
                        ],
                        [
                            3,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "abas-kommunegrense-bakgrunn",
            "type": "line",
            "metadata": {
                "mapbox:group": "1451985225857.1372"
            },
            "source": "composite",
            "source-layer": "abas_kommunegrense",
            "minzoom": 8,
            "interactive": true,
            "layout": {
                "visibility": "visible",
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            2,
                            "#ede9d9"
                        ],
                        [
                            22,
                            "#f6e8e1"
                        ]
                    ]
                },
                "line-dasharray": [
                    1,
                    0
                ],
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            3.5
                        ],
                        [
                            10,
                            8
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            0
                        ],
                        [
                            8,
                            0.75
                        ]
                    ]
                },
                "line-blur": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            0
                        ],
                        [
                            8,
                            3
                        ]
                    ]
                }
            }
        },
        {
            "id": "abas-kommunegrense",
            "metadata": {
                "mapbox:group": "1451985225857.1372"
            },
            "ref": "abas-kommunegrense-bakgrunn",
            "interactive": true,
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            2,
                            "#c3bfcc"
                        ],
                        [
                            22,
                            "#7721a6"
                        ]
                    ]
                },
                "line-dasharray": [
                    6,
                    6
                ],
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            0.75
                        ],
                        [
                            12,
                            1.5
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            0
                        ],
                        [
                            3,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "abas-riksgrense",
            "type": "line",
            "metadata": {
                "mapbox:group": "1451985225857.1372"
            },
            "source": "composite",
            "source-layer": "abas_riksgrense",
            "minzoom": 4,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#a14fb8"
            }
        },
        {
            "id": "Bilferjestrekning",
            "type": "line",
            "metadata": {
                "mapbox:group": "1452065569196.4487"
            },
            "source": "composite",
            "source-layer": "Bilferjestrekning",
            "minzoom": 4,
            "maxzoom": 15,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#22a9f2",
                "line-dasharray": [
                    8,
                    4
                ]
            }
        },
        {
            "id": "Passasjerferjestrekning",
            "type": "line",
            "metadata": {
                "mapbox:group": "1452065569196.4487"
            },
            "source": "composite",
            "source-layer": "Passasjerferjestrekning",
            "minzoom": 4,
            "maxzoom": 15,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#22a9f2",
                "line-dasharray": [
                    8,
                    4
                ],
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            0.25
                        ],
                        [
                            14,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "Sti",
            "type": "line",
            "metadata": {
                "mapbox:group": "1452065569196.4487"
            },
            "source": "composite",
            "source-layer": "Sti",
            "minzoom": 11,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-dasharray": [
                    8,
                    4
                ],
                "line-width": 0.6,
                "line-color": "hsl(0, 0%, 48%)",
                "line-opacity": 0.6
            }
        },
        {
            "id": "Fylkesveg-tunnel-kant",
            "type": "line",
            "metadata": {
                "mapbox:group": "1452065569196.4487"
            },
            "source": "composite",
            "source-layer": "Vegsenterlinje",
            "minzoom": 6,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "vnr_vegkategori",
                    "F"
                ],
                [
                    "==",
                    "medium",
                    "U"
                ]
            ],
            "layout": {
                "line-cap": "butt",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#949494",
                "line-width": {
                    "base": 1.2,
                    "stops": [
                        [
                            4,
                            1.6
                        ],
                        [
                            7,
                            3
                        ],
                        [
                            22,
                            18
                        ]
                    ]
                },
                "line-gap-width": 0,
                "line-opacity": 0.9,
                "line-dasharray": [
                    0.8,
                    0.4
                ]
            }
        },
        {
            "id": "Riksveg-tunnel-kant",
            "type": "line",
            "metadata": {
                "mapbox:group": "1452065569196.4487"
            },
            "source": "composite",
            "source-layer": "Vegsenterlinje",
            "minzoom": 5,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "vnr_vegkategori",
                    "R"
                ],
                [
                    "==",
                    "medium",
                    "U"
                ],
                [
                    "!=",
                    "komm",
                    "0301"
                ]
            ],
            "layout": {
                "line-cap": "butt",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#949494",
                "line-width": {
                    "base": 1.2,
                    "stops": [
                        [
                            4,
                            2.2
                        ],
                        [
                            15,
                            5.6
                        ],
                        [
                            22,
                            18
                        ]
                    ]
                },
                "line-dasharray": [
                    0.8,
                    0.4
                ],
                "line-opacity": 0.9,
                "line-gap-width": 0
            }
        },
        {
            "id": "Riksveg-tunnel-kant-oslo",
            "type": "line",
            "metadata": {
                "mapbox:group": "1452065569196.4487"
            },
            "source": "composite",
            "source-layer": "Vegsenterlinje",
            "minzoom": 5,
            "maxzoom": 15,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "vnr_vegkategori",
                    "R"
                ],
                [
                    "==",
                    "medium",
                    "U"
                ],
                [
                    "==",
                    "komm",
                    "0301"
                ]
            ],
            "layout": {
                "line-cap": "butt",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#949494",
                "line-width": {
                    "base": 1.2,
                    "stops": [
                        [
                            4,
                            2.2
                        ],
                        [
                            15,
                            5.6
                        ],
                        [
                            22,
                            18
                        ]
                    ]
                },
                "line-dasharray": [
                    0.8,
                    0.4
                ],
                "line-opacity": 0.9,
                "line-gap-width": 0
            }
        },
        {
            "id": "Europaveg-tunnel-kant",
            "type": "line",
            "metadata": {
                "mapbox:group": "1452065569196.4487"
            },
            "source": "composite",
            "source-layer": "Vegsenterlinje",
            "minzoom": 4,
            "maxzoom": 15,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "vnr_vegkategori",
                    "E"
                ],
                [
                    "==",
                    "medium",
                    "U"
                ],
                [
                    "==",
                    "komm",
                    "0301"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#949494",
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            15,
                            2
                        ],
                        [
                            22,
                            0.75
                        ]
                    ]
                },
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            15,
                            9.9
                        ],
                        [
                            22,
                            6
                        ]
                    ]
                },
                "line-dasharray": [
                    3,
                    3
                ]
            }
        },
        {
            "id": "Europaveg-tunnel-kant-oslo",
            "type": "line",
            "metadata": {
                "mapbox:group": "1452065569196.4487"
            },
            "source": "composite",
            "source-layer": "Vegsenterlinje",
            "minzoom": 4,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "vnr_vegkategori",
                    "E"
                ],
                [
                    "==",
                    "medium",
                    "U"
                ],
                [
                    "!=",
                    "komm",
                    "0301"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#949494",
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            15,
                            2
                        ],
                        [
                            22,
                            0.75
                        ]
                    ]
                },
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            15,
                            9.9
                        ],
                        [
                            22,
                            6
                        ]
                    ]
                },
                "line-dasharray": [
                    3,
                    3
                ]
            }
        },
        {
            "id": "Fylkesveg-kant",
            "type": "line",
            "metadata": {
                "mapbox:group": "1452065569196.4487"
            },
            "source": "composite",
            "source-layer": "Vegsenterlinje",
            "minzoom": 6,
            "maxzoom": 15,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "vnr_vegkategori",
                    "F"
                ],
                [
                    "==",
                    "medium",
                    "T"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "hsl(0, 0%, 42%)",
                "line-width": {
                    "base": 1.2,
                    "stops": [
                        [
                            4,
                            0.8
                        ],
                        [
                            15,
                            1
                        ]
                    ]
                },
                "line-gap-width": {
                    "base": 1.2,
                    "stops": [
                        [
                            8,
                            0.6
                        ],
                        [
                            15,
                            1.8
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            6,
                            0.7
                        ],
                        [
                            10,
                            0.9
                        ]
                    ]
                }
            }
        },
        {
            "id": "elveg-gangsykkel-kant",
            "type": "line",
            "metadata": {
                "mapbox:group": "1452065569196.4487"
            },
            "source": "composite",
            "source-layer": "elveg_gangsykkelvegsenterlinje",
            "minzoom": 12,
            "maxzoom": 15,
            "interactive": true,
            "filter": [
                "in",
                "vnr_vegkategori",
                "K",
                "P"
            ],
            "layout": {
                "line-cap": "round",
                "visibility": "visible",
                "line-join": "round"
            },
            "paint": {
                "line-color": "#808080",
                "line-width": 0.5,
                "line-gap-width": {
                    "base": 1,
                    "stops": [
                        [
                            11.95,
                            0.8
                        ],
                        [
                            12,
                            1
                        ],
                        [
                            15,
                            3
                        ]
                    ]
                },
                "line-opacity": 1
            }
        },
        {
            "id": "elveg-gangsykkel",
            "type": "line",
            "metadata": {
                "mapbox:group": "1452065569196.4487"
            },
            "source": "composite",
            "source-layer": "elveg_gangsykkelvegsenterlinje",
            "minzoom": 12,
            "maxzoom": 17,
            "interactive": true,
            "layout": {
                "visibility": "visible",
                "line-join": "round",
                "line-cap": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            11.95,
                            0.8
                        ],
                        [
                            12,
                            1
                        ],
                        [
                            15,
                            3
                        ]
                    ]
                },
                "line-color": "#fff"
            }
        },
        {
            "id": "Riksveg-kant",
            "type": "line",
            "metadata": {
                "mapbox:group": "1452065569196.4487"
            },
            "source": "composite",
            "source-layer": "Vegsenterlinje",
            "minzoom": 5,
            "maxzoom": 15,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "vnr_vegkategori",
                    "R"
                ],
                [
                    "in",
                    "medium",
                    "T",
                    "B",
                    "L"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#999a99",
                "line-width": {
                    "base": 1.2,
                    "stops": [
                        [
                            4,
                            0.8
                        ],
                        [
                            15,
                            1.1
                        ]
                    ]
                },
                "line-gap-width": {
                    "base": 1.2,
                    "stops": [
                        [
                            0,
                            1.2
                        ],
                        [
                            7,
                            2
                        ]
                    ]
                },
                "line-opacity": 0.9
            }
        },
        {
            "id": "Kommunelveg-kant_9-11",
            "type": "line",
            "metadata": {
                "mapbox:group": "1452065569196.4487"
            },
            "source": "composite",
            "source-layer": "Vegsenterlinje",
            "minzoom": 9,
            "maxzoom": 15,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "vnr_vegkategori",
                    "K"
                ],
                [
                    "in",
                    "medium",
                    "T",
                    "B",
                    "L"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "visibility": "visible",
                "line-join": "round"
            },
            "paint": {
                "line-color": "#808080",
                "line-width": 0.5,
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            8.5,
                            0.5
                        ],
                        [
                            10,
                            0.75
                        ],
                        [
                            18,
                            26
                        ]
                    ]
                },
                "line-opacity": 1
            }
        },
        {
            "id": "Privatveg-kant",
            "type": "line",
            "metadata": {
                "mapbox:group": "1452065569196.4487"
            },
            "source": "composite",
            "source-layer": "Vegsenterlinje",
            "minzoom": 12,
            "maxzoom": 15,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "vnr_vegkategori",
                    "P"
                ],
                [
                    "in",
                    "medium",
                    "T",
                    "B",
                    "L"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "visibility": "visible",
                "line-join": "round"
            },
            "paint": {
                "line-color": "#808080",
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            11.95,
                            2
                        ],
                        [
                            12,
                            3
                        ],
                        [
                            15,
                            4
                        ]
                    ]
                },
                "line-gap-width": 0,
                "line-opacity": 1
            }
        },
        {
            "id": "Europaveg-kant",
            "type": "line",
            "metadata": {
                "mapbox:group": "1452065569196.4487"
            },
            "source": "composite",
            "source-layer": "Vegsenterlinje",
            "minzoom": 4,
            "maxzoom": 15,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "vnr_vegkategori",
                    "E"
                ],
                [
                    "==",
                    "medium",
                    "T"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "visibility": "visible",
                "line-join": "round"
            },
            "paint": {
                "line-color": "#949494",
                "line-width": {
                    "base": 1.2,
                    "stops": [
                        [
                            4,
                            2
                        ],
                        [
                            7,
                            4
                        ],
                        [
                            22,
                            14
                        ]
                    ]
                },
                "line-gap-width": 0,
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            6,
                            0.7
                        ],
                        [
                            10,
                            0.9
                        ]
                    ]
                }
            }
        },
        {
            "id": "Fylkesveg-tunnel",
            "type": "line",
            "metadata": {
                "mapbox:group": "1452065569196.4487"
            },
            "source": "composite",
            "source-layer": "Vegsenterlinje",
            "minzoom": 6,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "vnr_vegkategori",
                    "F"
                ],
                [
                    "==",
                    "medium",
                    "U"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#f9e9e5",
                "line-width": {
                    "base": 1.2,
                    "stops": [
                        [
                            4,
                            1.2
                        ],
                        [
                            7,
                            2
                        ]
                    ]
                }
            }
        },
        {
            "id": "Riksveg-tunnel",
            "type": "line",
            "metadata": {
                "mapbox:group": "1452065569196.4487"
            },
            "source": "composite",
            "source-layer": "Vegsenterlinje",
            "minzoom": 5,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "vnr_vegkategori",
                    "R"
                ],
                [
                    "==",
                    "medium",
                    "U"
                ],
                [
                    "!=",
                    "komm",
                    "0301"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#feb4b4",
                "line-width": {
                    "base": 1.2,
                    "stops": [
                        [
                            4,
                            1.2
                        ],
                        [
                            15,
                            3
                        ]
                    ]
                }
            }
        },
        {
            "id": "Riksveg-tunnel-oslo",
            "type": "line",
            "metadata": {
                "mapbox:group": "1452065569196.4487"
            },
            "source": "composite",
            "source-layer": "Vegsenterlinje",
            "minzoom": 5,
            "maxzoom": 15,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "vnr_vegkategori",
                    "R"
                ],
                [
                    "==",
                    "medium",
                    "U"
                ],
                [
                    "==",
                    "komm",
                    "0301"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#feb4b4",
                "line-width": {
                    "base": 1.2,
                    "stops": [
                        [
                            4,
                            1.2
                        ],
                        [
                            15,
                            3
                        ]
                    ]
                }
            }
        },
        {
            "id": "Europaveg-tunnel",
            "metadata": {
                "mapbox:group": "1452065569196.4487"
            },
            "ref": "Europaveg-tunnel-kant-oslo",
            "interactive": true,
            "paint": {
                "line-color": "#fff187",
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            15,
                            9.9
                        ],
                        [
                            22,
                            6
                        ]
                    ]
                }
            }
        },
        {
            "id": "Europaveg-tunnel-oslo",
            "metadata": {
                "mapbox:group": "1452065569196.4487"
            },
            "ref": "Europaveg-tunnel-kant",
            "interactive": true,
            "paint": {
                "line-color": "#fff187",
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            15,
                            9.9
                        ],
                        [
                            22,
                            6
                        ]
                    ]
                }
            }
        },
        {
            "id": "Europaveg-bru-kant",
            "type": "line",
            "metadata": {
                "mapbox:group": "1452065569196.4487"
            },
            "source": "composite",
            "source-layer": "Vegsenterlinje",
            "minzoom": 4,
            "maxzoom": 15,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "vnr_vegkategori",
                    "E"
                ],
                [
                    "==",
                    "medium",
                    "L"
                ]
            ],
            "layout": {
                "line-cap": "square",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#949494",
                "line-width": {
                    "base": 1.2,
                    "stops": [
                        [
                            4,
                            1.1
                        ],
                        [
                            7,
                            1.4
                        ]
                    ]
                },
                "line-gap-width": {
                    "base": 1.2,
                    "stops": [
                        [
                            0,
                            1.8
                        ],
                        [
                            15,
                            4
                        ]
                    ]
                }
            }
        },
        {
            "id": "Europaveg-bru",
            "type": "line",
            "metadata": {
                "mapbox:group": "1452065569196.4487"
            },
            "source": "composite",
            "source-layer": "Vegsenterlinje",
            "minzoom": 4,
            "maxzoom": 15,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "vnr_vegkategori",
                    "E"
                ],
                [
                    "==",
                    "medium",
                    "L"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#ebd950",
                "line-width": {
                    "base": 1.2,
                    "stops": [
                        [
                            4,
                            1.8
                        ],
                        [
                            15,
                            4
                        ]
                    ]
                }
            }
        },
        {
            "id": "Kommunalveg_9-11",
            "type": "line",
            "metadata": {
                "mapbox:group": "1452065569196.4487"
            },
            "source": "composite",
            "source-layer": "Vegsenterlinje",
            "minzoom": 9,
            "maxzoom": 15,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "vnr_vegkategori",
                    "K"
                ],
                [
                    "in",
                    "medium",
                    "T",
                    "L"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "visibility": "visible",
                "line-join": "round"
            },
            "paint": {
                "line-color": "#fff",
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            8.5,
                            0.8
                        ],
                        [
                            10,
                            0.75
                        ],
                        [
                            18,
                            26
                        ]
                    ]
                }
            }
        },
        {
            "id": "Privatveg",
            "type": "line",
            "metadata": {
                "mapbox:group": "1452065569196.4487"
            },
            "source": "composite",
            "source-layer": "Vegsenterlinje",
            "minzoom": 12,
            "maxzoom": 15,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "vnr_vegkategori",
                    "P"
                ],
                [
                    "in",
                    "medium",
                    "T",
                    "L"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "visibility": "visible",
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(0, 0%, 100%)",
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            11.95,
                            1.6
                        ],
                        [
                            12,
                            1.8
                        ],
                        [
                            15,
                            3
                        ]
                    ]
                }
            }
        },
        {
            "id": "Fylkesveg",
            "type": "line",
            "metadata": {
                "mapbox:group": "1452065569196.4487"
            },
            "source": "composite",
            "source-layer": "Vegsenterlinje",
            "minzoom": 6,
            "maxzoom": 15,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "vnr_vegkategori",
                    "F"
                ],
                [
                    "==",
                    "medium",
                    "T"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            "hsl(0, 100%, 88%)"
                        ],
                        [
                            8,
                            "#fdd"
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.2,
                    "stops": [
                        [
                            7,
                            1
                        ],
                        [
                            15,
                            3
                        ]
                    ]
                }
            }
        },
        {
            "id": "Riksveg",
            "type": "line",
            "metadata": {
                "mapbox:group": "1452065569196.4487"
            },
            "source": "composite",
            "source-layer": "Vegsenterlinje",
            "minzoom": 5,
            "maxzoom": 15,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "vnr_vegkategori",
                    "R"
                ],
                [
                    "in",
                    "medium",
                    "T",
                    "L"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#f99696",
                "line-width": {
                    "base": 1.2,
                    "stops": [
                        [
                            4,
                            1.2
                        ],
                        [
                            15,
                            3
                        ]
                    ]
                }
            }
        },
        {
            "id": "Europaveg",
            "type": "line",
            "metadata": {
                "mapbox:group": "1452065569196.4487"
            },
            "source": "composite",
            "source-layer": "Vegsenterlinje",
            "minzoom": 4,
            "maxzoom": 15,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "vnr_vegkategori",
                    "E"
                ],
                [
                    "!=",
                    "medium",
                    "U"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#ebd950",
                "line-width": {
                    "base": 1.2,
                    "stops": [
                        [
                            4,
                            1.2
                        ],
                        [
                            7,
                            2.6
                        ],
                        [
                            22,
                            10
                        ]
                    ]
                }
            }
        },
        {
            "id": "fkb-europaveg_tunnel",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451981488150.5059"
            },
            "source": "composite",
            "source-layer": "FKB_Veg_Tunnel",
            "minzoom": 15,
            "interactive": true,
            "filter": [
                "==",
                "vnr_vegkategori",
                "E"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#fff187"
            }
        },
        {
            "id": "fkb-riksvegveg_tunnel",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451981488150.5059"
            },
            "source": "composite",
            "source-layer": "FKB_Veg_Tunnel",
            "minzoom": 15,
            "interactive": true,
            "filter": [
                "==",
                "vnr_vegkategori",
                "R"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "hsl(0, 41%, 81%)"
            }
        },
        {
            "id": "fkb-fylkesveg_tunnel",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451981488150.5059"
            },
            "source": "composite",
            "source-layer": "FKB_Veg_Tunnel",
            "minzoom": 15,
            "interactive": true,
            "filter": [
                "==",
                "vnr_vegkategori",
                "F"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "hsl(0, 41%, 81%)"
            }
        },
        {
            "id": "fkb-europaveg",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451981488150.5059"
            },
            "source": "composite",
            "source-layer": "FKB_Veg",
            "minzoom": 15,
            "interactive": true,
            "filter": [
                "==",
                "vnr_vegkategori",
                "E"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#ebd950"
            }
        },
        {
            "id": "fkb-privatveg",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451981488150.5059"
            },
            "source": "composite",
            "source-layer": "FKB_Veg",
            "minzoom": 15,
            "interactive": true,
            "filter": [
                "==",
                "vnr_vegkategori",
                "P"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#fff"
            }
        },
        {
            "id": "fkb-skogsbilveg",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451981488150.5059"
            },
            "source": "composite",
            "source-layer": "FKB_Veg",
            "minzoom": 15,
            "interactive": true,
            "filter": [
                "==",
                "vnr_vegkategori",
                "S"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#fff"
            }
        },
        {
            "id": "fkb-kommunalveg",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451981488150.5059"
            },
            "source": "composite",
            "source-layer": "FKB_Veg",
            "minzoom": 15,
            "interactive": true,
            "filter": [
                "==",
                "vnr_vegkategori",
                "K"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#fff"
            }
        },
        {
            "id": "fkb-fylkesveg",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451981488150.5059"
            },
            "source": "composite",
            "source-layer": "FKB_Veg",
            "minzoom": 15,
            "interactive": true,
            "filter": [
                "==",
                "vnr_vegkategori",
                "F"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#f2cdc1"
            }
        },
        {
            "id": "fkb-riksveg",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451981488150.5059"
            },
            "source": "composite",
            "source-layer": "FKB_Veg",
            "minzoom": 15,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "vnr_vegkategori",
                    "R"
                ],
                [
                    "!=",
                    "medium",
                    "T"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#e38f8f"
            }
        },
        {
            "id": "fkb-vegdekkekant",
            "type": "line",
            "metadata": {
                "mapbox:group": "1451981488150.5059"
            },
            "source": "composite",
            "source-layer": "FKB_Vegdekkekant",
            "minzoom": 15,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#808080",
                "line-width": {
                    "base": 1.3,
                    "stops": [
                        [
                            15,
                            0.6
                        ],
                        [
                            22,
                            1.2
                        ]
                    ]
                },
                "line-opacity": 0.65
            }
        },
        {
            "id": "fkb-fortauskant",
            "type": "line",
            "metadata": {
                "mapbox:group": "1451981488150.5059"
            },
            "source": "composite",
            "source-layer": "FKB_Fortauskant",
            "minzoom": 15,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#808080",
                "line-width": {
                    "base": 1.3,
                    "stops": [
                        [
                            0,
                            0.4
                        ],
                        [
                            20,
                            1.5
                        ]
                    ]
                }
            }
        },
        {
            "id": "fkb-trafikkoey",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451981488150.5059"
            },
            "source": "composite",
            "source-layer": "FKB_Trafikkoey",
            "minzoom": 15,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#fff"
            }
        },
        {
            "id": "fkb-vegkantavkjoersel",
            "type": "line",
            "metadata": {
                "mapbox:group": "1451981488150.5059"
            },
            "source": "composite",
            "source-layer": "FKB_VegkantAvkjoersel",
            "minzoom": 15,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#818181",
                "line-opacity": 0.4
            }
        },
        {
            "id": "fkb-annetvegarealavgrensning",
            "type": "line",
            "metadata": {
                "mapbox:group": "1451981488150.5059"
            },
            "source": "composite",
            "source-layer": "FKB_AnnetVegarealAvgrensning",
            "minzoom": 15,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#808080",
                "line-width": {
                    "base": 1.3,
                    "stops": [
                        [
                            14,
                            0.4
                        ],
                        [
                            22,
                            0.8
                        ]
                    ]
                }
            }
        },
        // {
        //     "id": "fkb-parkeringsomraadeavgrensning",
        //     "type": "line",
        //     "metadata": {
        //         "mapbox:group": "1451981488150.5059"
        //     },
        //     "source": "composite",
        //     "source-layer": "fkb_parkeringsomraadeavgrensning",
        //     "minzoom": 15,
        //     "interactive": true,
        //     "layout": {
        //         "visibility": "none",
        //         "line-cap": "round",
        //         "line-join": "round"
        //     },
        //     "paint": {
        //         "line-width": {
        //             "base": 1.3,
        //             "stops": [
        //                 [
        //                     14,
        //                     0.4
        //                 ],
        //                 [
        //                     22,
        //                     0.8
        //                 ]
        //             ]
        //         },
        //         "line-opacity": 0.7
        //     }
        // },
        {
            "id": "fkb-gangsykkelveg-line",
            "type": "line",
            "metadata": {
                "mapbox:group": "1451981488150.5059"
            },
            "source": "composite",
            "source-layer": "fkb_gangsykkelveg",
            "minzoom": 15,
            "interactive": true,
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-width": 2.5,
                "line-color": "#969696"
            }
        },
        {
            "id": "fkb-gangsykkelveg",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451981488150.5059"
            },
            "source": "composite",
            "source-layer": "fkb_gangsykkelveg",
            "minzoom": 15,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#fff",
                "fill-outline-color": "#fefefe"
            }
        },
        {
            "id": "fkb-gangvegkant",
            "type": "line",
            "metadata": {
                "mapbox:group": "1451981488150.5059"
            },
            "source": "composite",
            "source-layer": "FKB_Gangvegkant",
            "minzoom": 15,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#9b9e99"
            }
        },
        {
            "id": "fkb-trafikkoeykant",
            "type": "line",
            "metadata": {
                "mapbox:group": "1451981488150.5059"
            },
            "source": "composite",
            "source-layer": "FKB_Trafikkoeykant",
            "minzoom": 15,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#818181",
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            0.5
                        ],
                        [
                            22,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "fkb-fortauskantytre",
            "type": "line",
            "metadata": {
                "mapbox:group": "1451981488150.5059"
            },
            "source": "composite",
            "source-layer": "FKB_FortauskantYtre",
            "minzoom": 15,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#919191"
            }
        },
        {
            "id": "fkb-trikk-spor",
            "type": "line",
            "metadata": {
                "mapbox:group": "1451981488150.5059"
            },
            "source": "composite",
            "source-layer": "FKB_Bane",
            "minzoom": 15,
            "interactive": true,
            "filter": [
                "in",
                "jernbanetype",
                "T",
                "J",
                "S"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#75746f",
                "line-opacity": 1,
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            14,
                            4
                        ],
                        [
                            20,
                            8
                        ]
                    ]
                },
                "line-dasharray": [
                    0.1,
                    15
                ]
            }
        },
        {
            "id": "fkb-trikk",
            "metadata": {
                "mapbox:group": "1451981488150.5059"
            },
            "ref": "fkb-trikk-spor",
            "interactive": true,
            "paint": {
                "line-color": "#75746f",
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            14,
                            0.6
                        ],
                        [
                            22,
                            2
                        ]
                    ]
                },
                "line-opacity": 0.85
            }
        },
        {
            "id": "fkb-trikk-tunnel",
            "type": "line",
            "metadata": {
                "mapbox:group": "1451981488150.5059"
            },
            "source": "composite",
            "source-layer": "FKB_Bane_Tunnel",
            "minzoom": 15,
            "interactive": true,
            "filter": [
                "in",
                "jernbanetype",
                "T",
                "J"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "hsl(51, 3%, 45%)",
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            14,
                            2
                        ],
                        [
                            22,
                            4
                        ]
                    ]
                },
                "line-dasharray": [
                    4,
                    4
                ]
            }
        },
        {
            "id": "fkb-vegrekkverk",
            "type": "line",
            "metadata": {
                "mapbox:group": "1451981488150.5059"
            },
            "source": "composite",
            "source-layer": "FKB_Vegrekkverk_1",
            "minzoom": 15,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "rgba(140,140,136,1)",
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            14,
                            0.51
                        ],
                        [
                            22,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "fkb-tunnellportal",
            "type": "line",
            "metadata": {
                "mapbox:group": "1451981488150.5059"
            },
            "source": "composite",
            "source-layer": "FKB_Tunnellportal",
            "minzoom": 15,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-opacity": 0.7
            }
        },
        {
            "id": "fkb-bru",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451981488150.5059"
            },
            "source": "composite",
            "source-layer": "fkb_bru",
            "minzoom": 15,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#fff"
            }
        },
        {
            "id": "fkb-bruavgrensning",
            "type": "line",
            "metadata": {
                "mapbox:group": "1451981488150.5059"
            },
            "source": "composite",
            "source-layer": "fkb_bruavgrensning",
            "minzoom": 15,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#808080",
                "line-width": {
                    "base": 1.3,
                    "stops": [
                        [
                            15,
                            0.5
                        ],
                        [
                            22,
                            1.5
                        ]
                    ]
                }
            }
        },
        {
            "id": "fkb-fylkesveg-bro",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451981488150.5059"
            },
            "source": "composite",
            "source-layer": "FKB_Veg_Bro",
            "minzoom": 15,
            "interactive": true,
            "filter": [
                "==",
                "vnr_vegkategori",
                "F"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#f2cdc1"
            }
        },
        {
            "id": "fkb-kommunealveg-bro",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451981488150.5059"
            },
            "source": "composite",
            "source-layer": "FKB_Veg_Bro",
            "minzoom": 15,
            "interactive": true,
            "filter": [
                "==",
                "vnr_vegkategori",
                "K"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#fff"
            }
        },
        {
            "id": "fkb-europaveg-bro",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451981488150.5059"
            },
            "source": "composite",
            "source-layer": "FKB_Veg_Bro",
            "minzoom": 15,
            "interactive": true,
            "filter": [
                "==",
                "vnr_vegkategori",
                "E"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#ebd950"
            }
        },
        {
            "id": "fkb-riksveg-bro",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451981488150.5059"
            },
            "source": "composite",
            "source-layer": "FKB_Veg_Bro",
            "minzoom": 15,
            "interactive": true,
            "filter": [
                "==",
                "vnr_vegkategori",
                "R"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#e38f8f"
            }
        },
        {
            "id": "fkb-vegrekkverk-bro",
            "type": "line",
            "metadata": {
                "mapbox:group": "1451981488150.5059"
            },
            "source": "composite",
            "source-layer": "FKB_Vegrekkverk_Bro_1",
            "minzoom": 15,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#9b9e99"
            }
        },
        {
            "id": "fkb-fortauskant-bro",
            "type": "line",
            "metadata": {
                "mapbox:group": "1451981488150.5059"
            },
            "source": "composite",
            "source-layer": "FKB_Fortauskant_Bro",
            "minzoom": 15,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#808080",
                "line-width": {
                    "base": 1.3,
                    "stops": [
                        [
                            13,
                            0.4
                        ],
                        [
                            22,
                            1.5
                        ]
                    ]
                }
            }
        },
        {
            "id": "fkb-gangvegkant-bro",
            "type": "line",
            "metadata": {
                "mapbox:group": "1451981488150.5059"
            },
            "source": "composite",
            "source-layer": "FKB_Gangvegkant_Bro",
            "minzoom": 15,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#808080",
                "line-width": {
                    "base": 1.3,
                    "stops": [
                        [
                            13,
                            0.4
                        ],
                        [
                            22,
                            1.5
                        ]
                    ]
                }
            }
        },
        {
            "id": "fkb-trikk-spor-bro",
            "type": "line",
            "metadata": {
                "mapbox:group": "1451981488150.5059"
            },
            "source": "composite",
            "source-layer": "FKB_Bane_Bro",
            "minzoom": 15,
            "interactive": true,
            "filter": [
                "in",
                "jernbanetype",
                "J",
                "T"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#b3b1a6",
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            13.75,
                            0
                        ],
                        [
                            14,
                            1
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            14,
                            4
                        ],
                        [
                            20,
                            8
                        ]
                    ]
                },
                "line-dasharray": [
                    0.1,
                    15
                ]
            }
        },
        {
            "id": "fkb-trikk-bro",
            "metadata": {
                "mapbox:group": "1451981488150.5059"
            },
            "ref": "fkb-trikk-spor-bro",
            "interactive": true,
            "paint": {
                "line-color": "#75746f",
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            14,
                            1
                        ],
                        [
                            22,
                            4
                        ]
                    ]
                }
            }
        },
        {
            "id": "fkb-trappbygg",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451981488150.5059"
            },
            "source": "composite",
            "source-layer": "fkb_trappbygg",
            "minzoom": 16,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#96999e",
                "fill-outline-color": "#96999e"
            }
        },
        {
            "id": "fkb-bygning-3",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451979086080.5315"
            },
            "source": "composite",
            "source-layer": "FKB_Bygning_3",
            "minzoom": 14,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#c3c8cb"
            }
        },
        {
            "id": "fkb-bygning-2",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451979086080.5315"
            },
            "source": "composite",
            "source-layer": "FKB_Bygning_2",
            "minzoom": 15,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#c3c8cb"
            }
        },
        {
            "id": "fkb-bygning-1",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451979086080.5315"
            },
            "source": "composite",
            "source-layer": "FKB_Bygning_1",
            "minzoom": 16,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#c3c8cb"
            }
        },
        {
            "id": "fkb-annenbygning-3",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451979086080.5315"
            },
            "source": "composite",
            "source-layer": "FKB_AnnenBygning_3",
            "minzoom": 14,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#c3c8cb"
            }
        },
        {
            "id": "fkb-annenbygning-2",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451979086080.5315"
            },
            "source": "composite",
            "source-layer": "FKB_AnnenBygning_2",
            "minzoom": 14,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#c3c8cb"
            }
        },
        {
            "id": "fkb-annenbygning-1",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451979086080.5315"
            },
            "source": "composite",
            "source-layer": "FKB_AnnenBygning_1",
            "minzoom": 14,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#c3c8cb"
            }
        },
        {
            "id": "fkbbsk-takflate-omriss-lysvinkel-3d-4",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451979086080.5315"
            },
            "source": "composite",
            "source-layer": "FKBBSK_Takflate_omriss-Lysvinkel_3d_4",
            "minzoom": 16,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#afb3b5",
                "fill-outline-color": "#969696"
            }
        },
        {
            "id": "fkbbsk-takflate-omriss-lysvinkel-3d-3",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451979086080.5315"
            },
            "source": "composite",
            "source-layer": "FKBBSK_Takflate_omriss-Lysvinkel_3d_3",
            "minzoom": 15,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#b6babc",
                "fill-outline-color": "#969696"
            }
        },
        {
            "id": "fkbbsk-takflate-omriss-lysvinkel-3d-2",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451979086080.5315"
            },
            "source": "composite",
            "source-layer": "FKBBSK_Takflate_omriss-Lysvinkel_3d_2",
            "minzoom": 16,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#bcc1c4",
                "fill-outline-color": "#969696"
            }
        },
        {
            "id": "fkbbsk-takflate-omriss-lysvinkel-3d-1",
            "type": "fill",
            "metadata": {
                "mapbox:group": "1451979086080.5315"
            },
            "source": "composite",
            "source-layer": "FKBBSK_Takflate_omriss-Lysvinkel_3d_1",
            "minzoom": 16,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "#c2c8ca",
                "fill-outline-color": "#969696"
            }
        },
        {
            "id": "fkb-taksprang-1",
            "type": "line",
            "metadata": {
                "mapbox:group": "1451979086080.5315"
            },
            "source": "composite",
            "source-layer": "FKB_Taksprang_1",
            "minzoom": 16,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#96999e"
            }
        },
        {
            "id": "fkb-moenelinje-1",
            "type": "line",
            "metadata": {
                "mapbox:group": "1451979086080.5315"
            },
            "source": "composite",
            "source-layer": "FKB_Moenelinje_1",
            "minzoom": 16,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#96999e",
                "line-width": {
                    "base": 1.3,
                    "stops": [
                        [
                            17,
                            0.8
                        ],
                        [
                            22,
                            2.5
                        ]
                    ]
                }
            }
        },
        {
            "id": "fkb-bygningslinje-1",
            "type": "line",
            "metadata": {
                "mapbox:group": "1451979086080.5315"
            },
            "source": "composite",
            "source-layer": "FKB_Bygningslinje_1",
            "minzoom": 16,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#96999e",
                "line-width": 0.6
            }
        },
        {
            "id": "fkb-bygningsdelelinje",
            "type": "line",
            "metadata": {
                "mapbox:group": "1451979086080.5315"
            },
            "source": "composite",
            "source-layer": "FKB_Bygningsdelelinje",
            "minzoom": 14,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#808080",
                "line-width": 0.5
            }
        },
        {
            "id": "fkb-takoverbyggkant-3",
            "type": "line",
            "metadata": {
                "mapbox:group": "1451979086080.5315"
            },
            "source": "composite",
            "source-layer": "FKB_TakoverbyggKant_3",
            "minzoom": 16,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#96999e",
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            0.3
                        ],
                        [
                            22,
                            1.1
                        ]
                    ]
                }
            }
        },
        {
            "id": "fkb-takoverbyggkant-2",
            "type": "line",
            "metadata": {
                "mapbox:group": "1451979086080.5315"
            },
            "source": "composite",
            "source-layer": "FKB_TakoverbyggKant_2",
            "minzoom": 16,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#96999e",
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            0.3
                        ],
                        [
                            22,
                            1.1
                        ]
                    ]
                }
            }
        },
        {
            "id": "fkb-takoverbyggkant-1",
            "type": "line",
            "metadata": {
                "mapbox:group": "1451979086080.5315"
            },
            "source": "composite",
            "source-layer": "FKB_TakoverbyggKant_1",
            "minzoom": 16,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#96999e",
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            0.3
                        ],
                        [
                            22,
                            1.1
                        ]
                    ]
                }
            }
        },
        {
            "id": "fkb-takkant-3",
            "type": "line",
            "metadata": {
                "mapbox:group": "1451979086080.5315"
            },
            "source": "composite",
            "source-layer": "FKB_Takkant_3",
            "minzoom": 14,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#96999e",
                "line-width": 0.5
            }
        },
        {
            "id": "fkb-takkant-2",
            "type": "line",
            "metadata": {
                "mapbox:group": "1451979086080.5315"
            },
            "source": "composite",
            "source-layer": "FKB_Takkant_2",
            "minzoom": 14,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#96999e",
                "line-width": 0.5
            }
        },
        {
            "id": "fkb-takkant-1",
            "type": "line",
            "metadata": {
                "mapbox:group": "1451979086080.5315"
            },
            "source": "composite",
            "source-layer": "FKB_Takkant_1",
            "minzoom": 14,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#96999e",
                "line-width": 0.5
            }
        },
        {
            "id": "fkb-murlodrett_ind",
            "type": "line",
            "metadata": {
                "mapbox:group": "1451979086080.5315"
            },
            "source": "composite",
            "source-layer": "fkb_murlodrett",
            "minzoom": 17,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "#b3b1a6",
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            13.75,
                            0
                        ],
                        [
                            14,
                            1
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            14,
                            3
                        ],
                        [
                            20,
                            6
                        ]
                    ]
                },
                "line-dasharray": {
                    "base": 1,
                    "stops": [
                        [
                            16,
                            [
                                0.1,
                                6
                            ]
                        ],
                        [
                            18,
                            [
                                0.1,
                                3
                            ]
                        ]
                    ]
                },
                "line-offset": -3
            }
        },
        {
            "id": "fkb-murlodrett",
            "metadata": {
                "mapbox:group": "1451979086080.5315"
            },
            "ref": "fkb-murlodrett_ind",
            "interactive": true,
            "paint": {
                "line-width": 0.4,
                "line-color": "hsl(0, 0%, 50%)",
                "line-opacity": 0.7
            }
        },
        {
            "id": "fotgjenger-platform",
            "type": "line",
            "metadata": {
                "mapbox:group": "1451979086080.5315"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "in",
                    "$type",
                    "Point",
                    "LineString",
                    "Polygon"
                ],
                [
                    "==",
                    "type",
                    "platform"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-width": 0.5,
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            12,
                            0.3
                        ],
                        [
                            22,
                            0.6
                        ]
                    ]
                }
            }
        },
        {
            "id": "fkb-grunnmur",
            "type": "line",
            "metadata": {
                "mapbox:group": "1451979086080.5315"
            },
            "source": "composite",
            "source-layer": "FKB_GrunnMur",
            "minzoom": 15,
            "interactive": true,
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "hsl(0, 0%, 50%)",
                "line-width": 0.5,
                "line-opacity": 0.5
            }
        },
        {
            "id": "n50-lysloeype",
            "type": "line",
            "source": "composite",
            "source-layer": "N50_Lysloeype",
            "minzoom": 6,
            "interactive": true,
            "filter": [
                "==",
                "$type",
                "LineString"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "hsl(36, 91%, 57%)",
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            1
                        ],
                        [
                            22,
                            2
                        ]
                    ]
                },
                "line-opacity": 0.65
            }
        },
        // {
        //     "id": "wam-teig",
        //     "type": "line",
        //     "source": "composite",
        //     "source-layer": "WAM_Teig",
        //     "minzoom": 16,
        //     "interactive": true,
        //     "layout": {
        //         "visibility": "none"
        //     },
        //     "paint": {
        //         "line-color": "#f20a0a",
        //         "line-width": 0.6,
        //         "line-opacity": 0.5
        //     }
        // },
        {
            "id": "railway",
            "type": "line",
            "source": "composite",
            "source-layer": "road",
            "maxzoom": 15,
            "interactive": true,
            "filter": [
                "in",
                "class",
                "major_rail",
                "minor_rail"
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "line-color": "hsl(109, 5%, 37%)",
                "line-opacity": 0.55,
                "line-width": 0.5
            }
        },
        {
            "id": "railway-tracks",
            "type": "line",
            "source": "composite",
            "source-layer": "road",
            "maxzoom": 15,
            "interactive": true,
            "filter": [
                "in",
                "class",
                "major_rail",
                "minor_rail"
            ],
            "layout": {
                "visibility": "visible",
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(109, 5%, 37%)",
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            11,
                            0
                        ],
                        [
                            14,
                            1
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.49,
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            16,
                            6
                        ]
                    ]
                },
                "line-dasharray": [
                    0.15,
                    3
                ]
            }
        },
        {
            "id": "rail-station-label",
            "type": "symbol",
            "source": "composite",
            "source-layer": "rail_station_label",
            "minzoom": 11,
            "interactive": true,
            "filter": [
                "all",
                [
                    "!=",
                    "maki",
                    "entrance"
                ],
                [
                    "==",
                    "maki",
                    "rail-metro"
                ]
            ],
            "layout": {
                "text-field": "{name}",
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            16,
                            11
                        ],
                        [
                            20,
                            13
                        ]
                    ]
                },
                "icon-image": "t-bane-stasjon",
                "icon-size": 0.6,
                "visibility": "visible",
                "text-anchor": "top",
                "text-offset": [
                    0,
                    0.85
                ],
                "text-transform": "uppercase"
            },
            "paint": {
                "text-color": "hsl(240, 100%, 50%)",
                "text-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            13.99,
                            0
                        ],
                        [
                            14,
                            1
                        ]
                    ]
                },
                "text-halo-color": "hsl(0, 0%, 100%)",
                "text-halo-width": 1,
                "text-halo-blur": 0.5
            }
        },
        {
            "id": "fkb-presstedsnavn-84(øy)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1460452470657.2046"
            },
            "source": "composite",
            "source-layer": "FKB_PresStedsnavn",
            "minzoom": 15,
            "interactive": true,
            "filter": [
                "all",
                [
                    "in",
                    "$type",
                    "LineString",
                    "Point"
                ],
                [
                    "==",
                    "navntype",
                    84
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            12,
                            9
                        ],
                        [
                            22,
                            18
                        ]
                    ]
                },
                "text-allow-overlap": false,
                "symbol-avoid-edges": false,
                "text-ignore-placement": false,
                "text-transform": "none",
                "symbol-spacing": 10,
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": "point",
                "text-justify": "center",
                "visibility": "visible",
                "text-rotation-alignment": "map",
                "text-anchor": "center",
                "text-field": "{streng}"
            },
            "paint": {
                "text-color": "hsl(240, 100%, 3%)",
                "text-halo-color": "#fff",
                "text-halo-width": 1.25,
                "text-halo-blur": 0.25
            }
        },
        {
            "id": "Skrivemaate-82_83(bukt)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1460452470657.2046"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 13,
            "maxzoom": 14,
            "interactive": true,
            "filter": [
                "all",
                [
                    "in",
                    "$type",
                    "LineString",
                    "Point"
                ],
                [
                    "in",
                    "ptema",
                    "83",
                    "82"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            12,
                            9
                        ],
                        [
                            22,
                            18
                        ]
                    ]
                },
                "text-allow-overlap": true,
                "symbol-avoid-edges": false,
                "text-ignore-placement": true,
                "text-max-angle": 25,
                "text-transform": "uppercase",
                "symbol-spacing": 1,
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": "point",
                "text-justify": "center",
                "text-padding": 1,
                "visibility": "visible",
                "text-rotation-alignment": "map",
                "text-anchor": "center",
                "text-keep-upright": true,
                "text-field": "{streng}"
            },
            "paint": {
                "text-color": "#5b5bcf",
                "text-halo-color": "#fff",
                "text-halo-blur": 0.25,
                "text-halo-width": 1.25
            }
        },
        // {
        //     "id": "Skrivemaate_xyzvann_32 copy",
        //     "type": "symbol",
        //     "metadata": {
        //         "mapbox:group": "1460452470657.2046"
        //     },
        //     "source": "composite",
        //     "source-layer": "Skrivemaate",
        //     "minzoom": 12,
        //     "maxzoom": 18,
        //     "interactive": true,
        //     "layout": {
        //         "text-size": {
        //             "base": 1,
        //             "stops": [
        //                 [
        //                     6,
        //                     8
        //                 ],
        //                 [
        //                     14,
        //                     11
        //                 ]
        //             ]
        //         },
        //         "text-allow-overlap": false,
        //         "symbol-avoid-edges": false,
        //         "text-ignore-placement": false,
        //         "text-font": [
        //             "DIN Offc Pro Regular",
        //             "Arial Unicode MS Regular"
        //         ],
        //         "symbol-placement": "point",
        //         "text-justify": "center",
        //         "text-padding": 2,
        //         "visibility": "none",
        //         "text-rotation-alignment": "map",
        //         "text-anchor": "center",
        //         "text-field": "{streng}"
        //     },
        //     "paint": {
        //         "text-color": "hsl(1, 80%, 41%)",
        //         "text-opacity": 1,
        //         "text-halo-color": "#fff",
        //         "text-halo-width": 1,
        //         "text-halo-blur": 1
        //     }
        // },
        {
            "id": "Skrivemaate_50_isbre",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1460452470657.2046"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 8,
            "maxzoom": 10,
            "interactive": true,
            "filter": [
                "==",
                "ptema",
                "50"
            ],
            "layout": {
                "visibility": "visible",
                "text-field": "{streng}",
                "text-font": [
                    "DIN Offc Pro Bold Italic",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            8,
                            10
                        ],
                        [
                            10,
                            12
                        ]
                    ]
                },
                "text-transform": "none"
            },
            "paint": {
                "text-halo-color": "#fff",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "hsl(211, 92%, 44%)",
                "text-opacity": 0.7
            }
        },
        {
            "id": "Vegskilt_Riksveg",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1452168476723.928"
            },
            "source": "composite",
            "source-layer": "road_label",
            "minzoom": 6,
            "interactive": true,
            "filter": [
                "all",
                [
                    "!in",
                    "ref",
                    "E6",
                    "E16",
                    "E134",
                    "E45",
                    "E39",
                    "E18",
                    "E14"
                ],
                [
                    "<=",
                    "reflen",
                    3
                ]
            ],
            "layout": {
                "text-size": 10,
                "icon-image": "riksvegskilt",
                "icon-rotation-alignment": "viewport",
                "text-max-angle": 38,
                "icon-keep-upright": true,
                "symbol-spacing": {
                    "base": 1,
                    "stops": [
                        [
                            11,
                            150
                        ],
                        [
                            14,
                            200
                        ]
                    ]
                },
                "text-font": [
                    "Open Sans Bold",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            "point"
                        ],
                        [
                            11,
                            "line"
                        ]
                    ]
                },
                "text-padding": 2,
                "visibility": "visible",
                "text-rotation-alignment": "viewport",
                "text-keep-upright": true,
                "text-field": "{ref}"
            },
            "paint": {
                "text-color": "#000",
                "text-halo-width": 0,
                "text-opacity": 1
            }
        },
        // {
        //     "id": "Vegskilt_Europaveg",
        //     "type": "symbol",
        //     "metadata": {
        //         "mapbox:group": "1452168476723.928"
        //     },
        //     "source": "composite",
        //     "source-layer": "road_label",
        //     "interactive": true,
        //     "filter": [
        //         "all",
        //         [
        //             "in",
        //             "ref",
        //             "E6",
        //             "E18",
        //             "E16",
        //             "E134",
        //             "E45",
        //             "E39",
        //             "E4",
        //             "E14"
        //         ],
        //         [
        //             "==",
        //             "shield",
        //             "e-road"
        //         ]
        //     ],
        //     "layout": {
        //         "text-size": 10,
        //         "text-allow-overlap": false,
        //         "icon-image": "europavegskilt-2",
        //         "icon-rotation-alignment": "viewport",
        //         "icon-keep-upright": true,
        //         "text-font": [
        //             "Open Sans Bold",
        //             "Arial Unicode MS Regular"
        //         ],
        //         "symbol-placement": "point",
        //         "text-padding": 50,
        //         "visibility": "none",
        //         "text-rotation-alignment": "viewport",
        //         "text-keep-upright": true,
        //         "text-field": "{ref}"
        //     },
        //     "paint": {
        //         "text-color": "rgba(255,255,255,1)",
        //         "text-halo-width": 0,
        //         "text-opacity": 1
        //     }
        // },
        {
            "id": "Vegskilt_Europaveg_Global",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1452168476723.928"
            },
            "source": "composite",
            "source-layer": "road_label",
            "interactive": true,
            "filter": [
                "all",
                [
                    "in",
                    "shield",
                    "at-expressway",
                    "e-road"
                ],
                [
                    "<",
                    "reflen",
                    6
                ]
            ],
            "layout": {
                "text-size": 10,
                "text-allow-overlap": false,
                "icon-image": "europavegskilt-2",
                "icon-rotation-alignment": "viewport",
                "text-max-angle": 38,
                "icon-keep-upright": true,
                "symbol-spacing": {
                    "base": 1,
                    "stops": [
                        [
                            11,
                            150
                        ],
                        [
                            14,
                            200
                        ]
                    ]
                },
                "text-font": [
                    "Open Sans Bold",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            "point"
                        ],
                        [
                            11,
                            "line"
                        ]
                    ]
                },
                "text-padding": 2,
                "visibility": "visible",
                "text-rotation-alignment": "viewport",
                "text-keep-upright": true,
                "text-field": "{ref}",
                "text-letter-spacing": 0.05
            },
            "paint": {
                "text-color": "rgba(255,255,255,1)",
                "text-halo-width": 0,
                "text-opacity": 1
            }
        },
        {
            "id": "Vegnavn_Liten",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1452168476723.928"
            },
            "source": "composite",
            "source-layer": "road_label",
            "minzoom": 11,
            "interactive": true,
            "filter": [
                "in",
                "class",
                "street_limited",
                "street"
            ],
            "layout": {
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            8
                        ],
                        [
                            13,
                            11
                        ],
                        [
                            22,
                            15
                        ]
                    ]
                },
                "text-font": [
                    "DIN Offc Pro Regular",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": "line",
                "text-padding": 1,
                "visibility": "visible",
                "text-rotation-alignment": "map",
                "text-keep-upright": true,
                "text-field": "{name_en}",
                "text-letter-spacing": 0.01
            },
            "paint": {
                "text-color": "#3a3836",
                "text-halo-color": "rgba(255,255,255,0.77)",
                "text-halo-width": 1.25,
                "text-halo-blur": 0.5
            }
        },
        {
            "id": "Vegnavn_Middels",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1452168476723.928"
            },
            "source": "composite",
            "source-layer": "road_label",
            "minzoom": 11,
            "interactive": true,
            "filter": [
                "in",
                "class",
                "trunk",
                "primary",
                "secondary",
                "tertiary"
            ],
            "layout": {
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            8
                        ],
                        [
                            13,
                            11
                        ],
                        [
                            22,
                            15
                        ]
                    ]
                },
                "text-font": [
                    "DIN Offc Pro Regular",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": "line",
                "text-padding": 1,
                "visibility": "visible",
                "text-rotation-alignment": "map",
                "text-keep-upright": true,
                "text-field": "{name_en}",
                "text-letter-spacing": 0.01
            },
            "paint": {
                "text-color": "#3a3836",
                "text-halo-color": "rgba(255,255,255,0.77)",
                "text-halo-width": 1.25,
                "text-halo-blur": 0.5
            }
        },
        {
            "id": "Vegnavn",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1452168476723.928"
            },
            "source": "composite",
            "source-layer": "road_label",
            "interactive": true,
            "filter": [
                "in",
                "class",
                "motorway",
                "main"
            ],
            "layout": {
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            8
                        ],
                        [
                            13,
                            12
                        ],
                        [
                            22,
                            16
                        ]
                    ]
                },
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": "line",
                "text-padding": 1,
                "visibility": "visible",
                "text-rotation-alignment": "map",
                "text-keep-upright": true,
                "text-field": "{name_en}",
                "text-letter-spacing": 0.01
            },
            "paint": {
                "text-color": "#3a3836",
                "text-halo-color": "rgba(255,255,255,0.77)",
                "text-halo-width": 1.25,
                "text-halo-blur": 0.5
            }
        },
        {
            "id": "wam-adresse-1",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1461904943095.7854"
            },
            "source": "composite",
            "source-layer": "WAM_Adresse_1",
            "minzoom": 16,
            "interactive": true,
            "layout": {
                "text-field": "{adressetekst}",
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            16,
                            10
                        ],
                        [
                            22,
                            12
                        ]
                    ]
                },
                "icon-image": "dot-9",
                "text-anchor": "left",
                "icon-size": 0.6,
                "text-offset": [
                    0.4,
                    0
                ],
                "visibility": "visible"
            },
            "paint": {
                "text-color": "#3a3836",
                "text-halo-color": "#fff",
                "text-halo-width": 0.75,
                "text-halo-blur": 0.25
            }
        },
        {
            "id": "wam-gidtext-1",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1461904943095.7854"
            },
            "source": "composite",
            "source-layer": "WAM_GIDText_1",
            "minzoom": 17,
            "interactive": true,
            "layout": {
                "visibility": "visible",
                "text-field": "{gidtxt}",
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            12,
                            8
                        ],
                        [
                            22,
                            12
                        ]
                    ]
                },
                "icon-image": "dot-9",
                "icon-size": 1,
                "text-anchor": "top",
                "text-offset": [
                    0,
                    0.6
                ]
            },
            "paint": {
                "text-color": "#c20808",
                "text-halo-color": "#fff",
                "text-halo-width": 0.75,
                "text-halo-blur": 0.25
            }
        },
        {
            "id": "fkb-presstedsnavn-170",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1461904943095.7854"
            },
            "source": "composite",
            "source-layer": "FKB_PresStedsnavn",
            "minzoom": 10,
            "interactive": true,
            "filter": [
                "==",
                "navntype",
                170
            ],
            "layout": {
                "text-field": "{streng}",
                "text-font": [
                    "DIN Offc Pro Regular",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            12,
                            12
                        ],
                        [
                            22,
                            14
                        ]
                    ]
                },
                "visibility": "visible"
            },
            "paint": {
                "text-halo-color": "#fff",
                "text-halo-width": 1.25,
                "text-halo-blur": 0.25
            }
        },
        {
            "id": "fkb-presstedsnavn-101",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1461904943095.7854"
            },
            "source": "composite",
            "source-layer": "FKB_PresStedsnavn",
            "minzoom": 14,
            "interactive": true,
            "filter": [
                "==",
                "navntype",
                101
            ],
            "layout": {
                "text-field": "{streng}",
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            12,
                            12
                        ],
                        [
                            22,
                            14
                        ]
                    ]
                },
                "visibility": "visible"
            },
            "paint": {
                "text-halo-color": "#fff",
                "text-halo-width": 1.25,
                "text-halo-blur": 0.25
            }
        },
        {
            "id": "fkb-presstedsnavn-206",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1461904943095.7854"
            },
            "source": "composite",
            "source-layer": "FKB_PresStedsnavn",
            "minzoom": 10,
            "interactive": true,
            "filter": [
                "==",
                "navntype",
                206
            ],
            "layout": {
                "text-field": "{streng}",
                "text-font": [
                    "DIN Offc Pro Regular",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            12,
                            12
                        ],
                        [
                            22,
                            14
                        ]
                    ]
                },
                "visibility": "visible"
            },
            "paint": {
                "text-halo-color": "#fff",
                "text-halo-width": 1.25,
                "text-halo-blur": 0.25
            }
        },
        {
            "id": "fkb-presstedsnavn-72",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1461904943095.7854"
            },
            "source": "composite",
            "source-layer": "FKB_PresStedsnavn",
            "minzoom": 16,
            "interactive": true,
            "filter": [
                "==",
                "navntype",
                72
            ],
            "layout": {
                "text-field": "{streng}",
                "text-font": [
                    "DIN Offc Pro Italic",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            12,
                            12
                        ],
                        [
                            22,
                            14
                        ]
                    ]
                },
                "visibility": "visible"
            },
            "paint": {
                "text-halo-color": "#fff",
                "text-halo-width": 1.25,
                "text-halo-blur": 0.25
            }
        },
        {
            "id": "fkb-presstedsnavn-5",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1461904943095.7854"
            },
            "source": "composite",
            "source-layer": "FKB_PresStedsnavn",
            "minzoom": 10,
            "interactive": true,
            "filter": [
                "==",
                "navntype",
                5
            ],
            "layout": {
                "text-field": "{streng}",
                "text-font": [
                    "DIN Offc Pro Regular",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            12,
                            10
                        ],
                        [
                            22,
                            12
                        ]
                    ]
                },
                "visibility": "visible"
            },
            "paint": {
                "text-halo-color": "#fff",
                "text-halo-width": 1.25,
                "text-halo-blur": 0.25,
                "text-color": "#612700"
            }
        },
        // {
        //     "id": "fkb-presstedsnavn-",
        //     "type": "symbol",
        //     "metadata": {
        //         "mapbox:group": "1461904943095.7854"
        //     },
        //     "source": "composite",
        //     "source-layer": "FKB_PresStedsnavn",
        //     "minzoom": 10,
        //     "interactive": true,
        //     "filter": [
        //         "in",
        //         "$type",
        //         "LineString",
        //         "Polygon",
        //         "Point"
        //     ],
        //     "layout": {
        //         "visibility": "none",
        //         "text-field": "{streng}"
        //     },
        //     "paint": {
        //         "text-color": "hsl(0, 94%, 50%)"
        //     }
        // },
        {
            "id": "fkb-presstedsnavn-vann",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1461904943095.7854"
            },
            "source": "composite",
            "source-layer": "FKB_PresStedsnavn",
            "minzoom": 14,
            "interactive": true,
            "filter": [
                "all",
                [
                    "in",
                    "$type",
                    "LineString",
                    "Point"
                ],
                [
                    "in",
                    "navntype",
                    31,
                    32,
                    81,
                    82,
                    83
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            12,
                            9
                        ],
                        [
                            22,
                            18
                        ]
                    ]
                },
                "text-allow-overlap": false,
                "symbol-avoid-edges": false,
                "text-ignore-placement": false,
                "text-transform": "none",
                "symbol-spacing": 10,
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": "point",
                "text-justify": "center",
                "text-padding": 10,
                "visibility": "visible",
                "text-rotation-alignment": "map",
                "text-anchor": "center",
                "text-field": "{streng}"
            },
            "paint": {
                "text-color": "#5b5bcf",
                "text-halo-color": "#fff",
                "text-halo-width": 1.25,
                "text-halo-blur": 0.25
            }
        },
        {
            "id": "fkb-presstedsnavn-bydel",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1461904943095.7854"
            },
            "source": "composite",
            "source-layer": "FKB_PresStedsnavn",
            "minzoom": 12,
            "interactive": true,
            "filter": [
                "==",
                "navntype",
                132
            ],
            "layout": {
                "visibility": "visible",
                "text-field": "{streng}",
                "text-font": [
                    "DIN Offc Pro Medium Italic",
                    "Arial Unicode MS Regular"
                ],
                "text-size": 14
            },
            "paint": {
                "text-color": "#212121",
                "text-halo-color": "#fff",
                "text-halo-width": 1.25,
                "text-halo-blur": 0.25,
                "text-opacity": 0.85
            }
        },
        {
            "id": "fkb-presannentekst-linje",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1461904943095.7854"
            },
            "source": "composite",
            "source-layer": "FKB_PresAnnenTekst_Linje",
            "minzoom": 4,
            "interactive": true,
            "layout": {
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            6
                        ],
                        [
                            16,
                            10
                        ]
                    ]
                },
                "text-allow-overlap": true,
                "symbol-avoid-edges": false,
                "text-ignore-placement": false,
                "symbol-spacing": 100,
                "text-font": [
                    "DIN Offc Pro Light",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": "line",
                "visibility": "visible",
                "text-rotation-alignment": {
                    "base": 1,
                    "stops": [
                        [
                            12,
                            "viewport"
                        ],
                        [
                            13,
                            "map"
                        ]
                    ]
                },
                "text-keep-upright": true,
                "text-field": "{streng}"
            },
            "paint": {
                "text-color": "#000",
                "text-halo-width": 0,
                "text-halo-blur": 0,
                "text-halo-color": "#000"
            }
        },
        {
            "id": "Skrivemaate_132(Bydel)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1452087317478.8662"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 9,
            "maxzoom": 13,
            "interactive": true,
            "filter": [
                "==",
                "ptema",
                "132"
            ],
            "layout": {
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            8,
                            10
                        ],
                        [
                            14,
                            15
                        ]
                    ]
                },
                "text-allow-overlap": false,
                "text-transform": "none",
                "text-font": [
                    "DIN Offc Pro Medium Italic",
                    "Arial Unicode MS Regular"
                ],
                "text-justify": "left",
                "text-padding": 1,
                "visibility": "visible",
                "text-rotation-alignment": "map",
                "text-anchor": "center",
                "text-field": "{streng}"
            },
            "paint": {
                "text-halo-width": 1,
                "text-halo-blur": 0.5,
                "text-halo-color": "#fff",
                "text-color": "rgba(33,33,33,1)",
                "text-opacity": 0.85
            }
        },
        {
            "id": "Skrivemaate_123+162",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1452087317478.8662"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 12,
            "maxzoom": 13,
            "interactive": true,
            "filter": [
                "any",
                [
                    "==",
                    "ptema",
                    "123"
                ],
                [
                    "==",
                    "ptema",
                    "162"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            9,
                            10
                        ],
                        [
                            12,
                            14
                        ]
                    ]
                },
                "text-allow-overlap": false,
                "text-font": [
                    "DIN Offc Pro Regular",
                    "Arial Unicode MS Regular"
                ],
                "text-justify": "left",
                "text-padding": 5,
                "visibility": "visible",
                "text-rotation-alignment": "map",
                "text-anchor": "left",
                "text-field": "{streng}"
            },
            "paint": {
                "text-halo-width": 1.25,
                "text-halo-blur": 0.5,
                "text-halo-color": "#fff",
                "text-color": "#000",
                "text-opacity": 0.8
            }
        },
        // {
        //     "id": "Skrivemaate_Txxx",
        //     "type": "symbol",
        //     "metadata": {
        //         "mapbox:group": "1452087317478.8662"
        //     },
        //     "source": "composite",
        //     "source-layer": "Skrivemaate",
        //     "minzoom": 7,
        //     "interactive": true,
        //     "filter": [
        //         "==",
        //         "$type",
        //         "Point"
        //     ],
        //     "layout": {
        //         "text-size": {
        //             "base": 1,
        //             "stops": [
        //                 [
        //                     10,
        //                     12
        //                 ],
        //                 [
        //                     14,
        //                     12
        //                 ]
        //             ]
        //         },
        //         "text-allow-overlap": false,
        //         "text-transform": "none",
        //         "text-font": [
        //             "DIN Offc Pro Medium Italic",
        //             "Arial Unicode MS Regular"
        //         ],
        //         "text-justify": "left",
        //         "text-padding": 1,
        //         "visibility": "none",
        //         "text-rotation-alignment": "map",
        //         "text-anchor": "center",
        //         "text-field": "{streng}"
        //     },
        //     "paint": {
        //         "text-halo-width": 1,
        //         "text-halo-blur": 0.5,
        //         "text-halo-color": "#fff",
        //         "text-color": "hsl(0, 91%, 67%)",
        //         "text-opacity": 0.85
        //     }
        // },
        // {
        //     "id": "Skrivemaate_161",
        //     "type": "symbol",
        //     "metadata": {
        //         "mapbox:group": "1452087317478.8662"
        //     },
        //     "source": "composite",
        //     "source-layer": "Skrivemaate",
        //     "minzoom": 9,
        //     "maxzoom": 15,
        //     "interactive": true,
        //     "filter": [
        //         "==",
        //         "ptema",
        //         "161"
        //     ],
        //     "layout": {
        //         "text-size": {
        //             "base": 1,
        //             "stops": [
        //                 [
        //                     10,
        //                     10
        //                 ],
        //                 [
        //                     12,
        //                     12
        //                 ]
        //             ]
        //         },
        //         "text-allow-overlap": false,
        //         "text-font": [
        //             "DIN Offc Pro Medium Italic",
        //             "Arial Unicode MS Regular"
        //         ],
        //         "text-justify": "left",
        //         "text-padding": 5,
        //         "visibility": "none",
        //         "text-rotation-alignment": "map",
        //         "text-anchor": "center",
        //         "text-field": "{streng}"
        //     },
        //     "paint": {
        //         "text-halo-width": 1,
        //         "text-halo-blur": 0,
        //         "text-halo-color": "#fff",
        //         "text-color": "#323232"
        //     }
        // },
        {
            "id": "Skrivemaate_235+72",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1452087317478.8662"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 7,
            "maxzoom": 16,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    "in",
                    "ptema",
                    "235",
                    "72"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            12
                        ],
                        [
                            14,
                            12
                        ]
                    ]
                },
                "text-allow-overlap": false,
                "text-transform": "none",
                "text-font": [
                    "DIN Offc Pro Medium Italic",
                    "Arial Unicode MS Regular"
                ],
                "text-justify": "left",
                "text-padding": 1,
                "visibility": "visible",
                "text-rotation-alignment": "map",
                "text-anchor": "center",
                "text-field": "{streng}"
            },
            "paint": {
                "text-halo-width": 1,
                "text-opacity": 1,
                "text-halo-color": "#fff",
                "text-color": "hsl(0, 0%, 39%)"
            }
        },
        {
            "id": "Skrivemaate_50",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1452087317478.8662"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 10,
            "maxzoom": 14,
            "interactive": true,
            "filter": [
                "==",
                "ptema",
                "50"
            ],
            "layout": {
                "visibility": "visible",
                "text-field": "{streng}",
                "text-font": [
                    "DIN Offc Pro Bold Italic",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            4,
                            10
                        ],
                        [
                            7,
                            12
                        ]
                    ]
                },
                "text-transform": "none"
            },
            "paint": {
                "text-halo-color": "#fff",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "hsl(224, 63%, 62%)",
                "text-opacity": 0.8
            }
        },
        {
            "id": "Skrivemaate_208",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1452087317478.8662"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 13,
            "maxzoom": 14,
            "interactive": true,
            "filter": [
                "==",
                "ptema",
                "208"
            ],
            "layout": {
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            10
                        ],
                        [
                            14,
                            12
                        ]
                    ]
                },
                "text-allow-overlap": false,
                "text-transform": "none",
                "text-font": [
                    "DIN Offc Pro Medium Italic",
                    "Arial Unicode MS Regular"
                ],
                "text-justify": "left",
                "text-padding": 1,
                "visibility": "visible",
                "text-rotation-alignment": "map",
                "text-anchor": "center",
                "text-field": "{streng}"
            },
            "paint": {
                "text-halo-width": 1,
                "text-halo-blur": 0.5,
                "text-halo-color": "#fff",
                "text-color": "hsl(0, 2%, 22%)",
                "text-opacity": 0.85
            }
        },
        {
            "id": "Skrivemaate_idrettsanlegg",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1452087317478.8662"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 9,
            "maxzoom": 17,
            "interactive": true,
            "filter": [
                "==",
                "ptema",
                "190"
            ],
            "layout": {
                "text-size": 10,
                "text-allow-overlap": true,
                "text-ignore-placement": false,
                "text-transform": "none",
                "text-font": [
                    "DIN Offc Pro Medium Italic",
                    "Arial Unicode MS Regular"
                ],
                "text-justify": "center",
                "text-padding": 1,
                "visibility": "visible",
                "text-rotation-alignment": "viewport",
                "text-anchor": "center",
                "text-field": "{streng}"
            },
            "paint": {
                "text-halo-width": 1,
                "text-halo-blur": 0.5,
                "text-halo-color": "#fff",
                "text-color": "hsl(0, 16%, 3%)",
                "text-opacity": 0.85
            }
        },
        {
            "id": "Skrivemaate_246(Skog)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1452087317478.8662"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 9,
            "maxzoom": 12,
            "interactive": true,
            "filter": [
                "==",
                "ptema",
                "246"
            ],
            "layout": {
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            9,
                            12
                        ],
                        [
                            12,
                            16
                        ]
                    ]
                },
                "text-allow-overlap": false,
                "text-font": [
                    "DIN Offc Pro Bold Italic",
                    "Arial Unicode MS Regular"
                ],
                "text-justify": "left",
                "text-padding": 2,
                "visibility": "visible",
                "text-rotation-alignment": "map",
                "text-anchor": "left",
                "text-field": "{streng}"
            },
            "paint": {
                "text-halo-width": 1.25,
                "text-halo-blur": 0.5,
                "text-halo-color": "#fff",
                "text-color": "#073b07"
            }
        },
        {
            "id": "skrivemaate_267(Sportsstue)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1452087317478.8662"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 12,
            "interactive": true,
            "filter": [
                "==",
                "ptema",
                "267"
            ],
            "layout": {
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            10
                        ],
                        [
                            14,
                            13
                        ]
                    ]
                },
                "text-allow-overlap": false,
                "text-ignore-placement": false,
                "text-font": [
                    "DIN Offc Pro Italic",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": "point",
                "text-justify": "center",
                "visibility": "visible",
                "text-anchor": "center",
                "text-field": "{streng}"
            },
            "paint": {
                "text-color": "#000",
                "text-halo-color": "#fff",
                "text-halo-width": 1,
                "text-halo-blur": 0.25
            }
        },
        {
            "id": "Skrivemaate_182",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1452087317478.8662"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 9,
            "maxzoom": 14,
            "interactive": true,
            "filter": [
                "==",
                "ptema",
                "182"
            ],
            "layout": {
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            8,
                            10
                        ],
                        [
                            14,
                            15
                        ]
                    ]
                },
                "text-allow-overlap": false,
                "text-transform": "none",
                "text-font": [
                    "DIN Offc Pro Medium Italic",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": "point",
                "text-justify": "left",
                "text-padding": 1,
                "visibility": "visible",
                "text-rotation-alignment": "map",
                "text-anchor": "left",
                "text-field": "{streng}"
            },
            "paint": {
                "text-halo-width": 1,
                "text-halo-blur": 0.5,
                "text-halo-color": "#fff",
                "text-color": "rgba(33,33,33,1)",
                "text-opacity": 0.85
            }
        },
        {
            "id": "Skrivemaate_104",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1452087317478.8662"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 11,
            "maxzoom": 13,
            "interactive": true,
            "filter": [
                "==",
                "ptema",
                "104"
            ],
            "layout": {
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            11
                        ],
                        [
                            15,
                            12
                        ]
                    ]
                },
                "text-allow-overlap": false,
                "text-font": [
                    "DIN Offc Pro Regular",
                    "Arial Unicode MS Regular"
                ],
                "text-justify": "left",
                "text-padding": 1,
                "visibility": "visible",
                "text-rotation-alignment": "map",
                "text-anchor": "center",
                "text-field": "{streng}"
            },
            "paint": {
                "text-halo-width": 0.5,
                "text-opacity": 1,
                "text-halo-color": "#fff",
                "text-color": "hsl(0, 0%, 10%)",
                "text-halo-blur": 0.5
            }
        },
        {
            "id": "Skrivemaate_103",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1452087317478.8662"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 9,
            "maxzoom": 13,
            "interactive": true,
            "filter": [
                "==",
                "ptema",
                "103"
            ],
            "layout": {
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            8,
                            10
                        ],
                        [
                            15,
                            12
                        ]
                    ]
                },
                "text-allow-overlap": false,
                "text-font": [
                    "DIN Offc Pro Regular",
                    "Arial Unicode MS Regular"
                ],
                "text-justify": "left",
                "text-padding": 1,
                "visibility": "visible",
                "text-rotation-alignment": "map",
                "text-anchor": "center",
                "text-field": "{streng}"
            },
            "paint": {
                "text-halo-width": 0.5,
                "text-opacity": 1,
                "text-halo-color": "#fff",
                "text-color": "hsl(0, 0%, 10%)",
                "text-halo-blur": 0.5
            }
        },
        {
            "id": "Skrivemaate_102",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1452087317478.8662"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 10,
            "maxzoom": 13,
            "interactive": true,
            "filter": [
                "==",
                "ptema",
                "102"
            ],
            "layout": {
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            10
                        ],
                        [
                            15,
                            12
                        ]
                    ]
                },
                "text-allow-overlap": false,
                "text-font": [
                    "DIN Offc Pro Regular",
                    "Arial Unicode MS Regular"
                ],
                "text-justify": "center",
                "text-padding": 1,
                "visibility": "visible",
                "text-rotation-alignment": "map",
                "text-anchor": "center",
                "text-field": "{streng}"
            },
            "paint": {
                "text-halo-width": 1,
                "text-opacity": 1,
                "text-halo-color": "#fff",
                "text-color": "hsl(0, 0%, 10%)",
                "text-halo-blur": 0.5
            }
        },
        // {
        //     "id": "skrivemaate_108-110",
        //     "type": "symbol",
        //     "metadata": {
        //         "mapbox:group": "1452087317478.8662"
        //     },
        //     "source": "composite",
        //     "source-layer": "Skrivemaate",
        //     "minzoom": 13,
        //     "interactive": true,
        //     "filter": [
        //         "in",
        //         "ptema",
        //         "108",
        //         "109",
        //         "110"
        //     ],
        //     "layout": {
        //         "text-field": "{streng}",
        //         "text-font": [
        //             "DIN Offc Pro Regular",
        //             "Arial Unicode MS Regular"
        //         ],
        //         "text-size": {
        //             "base": 1,
        //             "stops": [
        //                 [
        //                     10,
        //                     10
        //                 ],
        //                 [
        //                     12,
        //                     12
        //                 ]
        //             ]
        //         },
        //         "visibility": "none"
        //     },
        //     "paint": {
        //         "text-color": "#323232",
        //         "text-halo-color": "#fff",
        //         "text-halo-width": 1
        //     }
        // },
        // {
        //     "id": "Skrivemaate_101",
        //     "type": "symbol",
        //     "metadata": {
        //         "mapbox:group": "1452087317478.8662"
        //     },
        //     "source": "composite",
        //     "source-layer": "Skrivemaate",
        //     "minzoom": 8,
        //     "maxzoom": 13,
        //     "interactive": true,
        //     "filter": [
        //         "==",
        //         "ptema",
        //         "101"
        //     ],
        //     "layout": {
        //         "text-size": {
        //             "base": 1,
        //             "stops": [
        //                 [
        //                     7,
        //                     11
        //                 ],
        //                 [
        //                     15,
        //                     15
        //                 ]
        //             ]
        //         },
        //         "text-allow-overlap": false,
        //         "text-font": [
        //             "DIN Offc Pro Medium",
        //             "Arial Unicode MS Regular"
        //         ],
        //         "text-justify": "left",
        //         "text-padding": 10,
        //         "visibility": "none",
        //         "text-rotation-alignment": "map",
        //         "text-anchor": "center",
        //         "text-field": "{streng}"
        //     },
        //     "paint": {
        //         "text-halo-width": 1.25,
        //         "text-halo-blur": 0.5,
        //         "text-halo-color": "#fff",
        //         "text-color": "#000",
        //         "text-opacity": 0.85
        //     }
        // },
        // {
        //     "id": "Skrivemaate_100",
        //     "type": "symbol",
        //     "metadata": {
        //         "mapbox:group": "1452087317478.8662"
        //     },
        //     "source": "composite",
        //     "source-layer": "Skrivemaate",
        //     "minzoom": 6,
        //     "maxzoom": 12,
        //     "interactive": true,
        //     "filter": [
        //         "all",
        //         [
        //             "!=",
        //             "streng",
        //             "Oslo"
        //         ],
        //         [
        //             "==",
        //             "ptema",
        //             "100"
        //         ]
        //     ],
        //     "layout": {
        //         "text-size": {
        //             "base": 0.9,
        //             "stops": [
        //                 [
        //                     7,
        //                     12
        //                 ],
        //                 [
        //                     10,
        //                     18
        //                 ]
        //             ]
        //         },
        //         "text-allow-overlap": false,
        //         "icon-image": "dot-9",
        //         "icon-rotation-alignment": "viewport",
        //         "symbol-avoid-edges": false,
        //         "text-transform": "none",
        //         "text-font": [
        //             "DIN Offc Pro Medium",
        //             "Arial Unicode MS Regular"
        //         ],
        //         "visibility": "none",
        //         "text-rotation-alignment": "viewport",
        //         "text-anchor": "bottom",
        //         "text-field": "{streng}"
        //     },
        //     "paint": {
        //         "text-halo-color": "#fff",
        //         "text-halo-width": 1,
        //         "text-halo-blur": 1,
        //         "text-color": "#000",
        //         "text-opacity": 0.85
        //     }
        // },
        // {
        //     "id": "Skrivemaate_Trikk_Bane",
        //     "type": "symbol",
        //     "metadata": {
        //         "mapbox:group": "1452087317478.8662"
        //     },
        //     "source": "composite",
        //     "source-layer": "Skrivemaate",
        //     "minzoom": 9,
        //     "maxzoom": 14,
        //     "interactive": true,
        //     "filter": [
        //         "all",
        //         [
        //             "==",
        //             "$type",
        //             "Point"
        //         ],
        //         [
        //             "==",
        //             "ptema",
        //             "219"
        //         ]
        //     ],
        //     "layout": {
        //         "text-size": {
        //             "base": 1,
        //             "stops": [
        //                 [
        //                     10,
        //                     8
        //                 ],
        //                 [
        //                     14,
        //                     12
        //                 ]
        //             ]
        //         },
        //         "text-allow-overlap": false,
        //         "text-transform": "none",
        //         "text-font": [
        //             "DIN Offc Pro Medium Italic",
        //             "Arial Unicode MS Regular"
        //         ],
        //         "symbol-placement": "point",
        //         "text-justify": "left",
        //         "text-padding": 1,
        //         "visibility": "none",
        //         "text-rotation-alignment": "map",
        //         "text-anchor": "center",
        //         "text-field": "{streng}"
        //     },
        //     "paint": {
        //         "text-halo-width": 1,
        //         "text-halo-blur": 0.5,
        //         "text-halo-color": "#fff",
        //         "text-color": "hsl(0, 91%, 67%)",
        //         "text-opacity": 0.85
        //     }
        // },
        // {
        //     "id": "Skrivemaate_punkt",
        //     "type": "symbol",
        //     "metadata": {
        //         "mapbox:group": "1452087317478.8662"
        //     },
        //     "source": "composite",
        //     "source-layer": "Skrivemaate",
        //     "minzoom": 5,
        //     "maxzoom": 15,
        //     "interactive": true,
        //     "filter": [
        //         "in",
        //         "$type",
        //         "LineString",
        //         "Polygon",
        //         "Point"
        //     ],
        //     "layout": {
        //         "text-size": {
        //             "base": 1,
        //             "stops": [
        //                 [
        //                     6,
        //                     10
        //                 ],
        //                 [
        //                     14,
        //                     15
        //                 ]
        //             ]
        //         },
        //         "text-allow-overlap": true,
        //         "symbol-avoid-edges": false,
        //         "text-ignore-placement": false,
        //         "text-transform": "none",
        //         "text-font": [
        //             "DIN Offc Pro Cond",
        //             "Arial Unicode MS Regular"
        //         ],
        //         "symbol-placement": "point",
        //         "text-justify": "center",
        //         "visibility": "none",
        //         "text-rotation-alignment": "map",
        //         "text-anchor": "center",
        //         "text-keep-upright": true,
        //         "text-field": "{streng}"
        //     },
        //     "paint": {
        //         "text-halo-color": "#fff",
        //         "text-color": "hsl(0, 91%, 55%)",
        //         "text-halo-width": 1
        //     }
        // },
        // {
        //     "id": "Skrivemaate_187",
        //     "type": "symbol",
        //     "metadata": {
        //         "mapbox:group": "1452087317478.8662"
        //     },
        //     "source": "composite",
        //     "source-layer": "Skrivemaate",
        //     "minzoom": 8,
        //     "maxzoom": 14,
        //     "interactive": true,
        //     "filter": [
        //         "all",
        //         [
        //             "==",
        //             "$type",
        //             "Point"
        //         ],
        //         [
        //             "==",
        //             "ptema",
        //             "187"
        //         ]
        //     ],
        //     "layout": {
        //         "visibility": "visible",
        //         "text-field": "{streng}",
        //         "text-font": [
        //             "DIN Offc Pro Bold Italic",
        //             "Arial Unicode MS Regular"
        //         ],
        //         "text-size": {
        //             "base": 1,
        //             "stops": [
        //                 [
        //                     4,
        //                     10
        //                 ],
        //                 [
        //                     7,
        //                     12
        //                 ]
        //             ]
        //         },
        //         "text-transform": "none"
        //     },
        //     "paint": {
        //         "text-halo-color": "#fff",
        //         "text-halo-width": 1,
        //         "text-halo-blur": 1,
        //         "text-color": "rgba(37,99,1,1)",
        //         "text-opacity": 0.7
        //     }
        // },
        // {
        //     "id": "Skrivemaate_100(Oslo)",
        //     "type": "symbol",
        //     "metadata": {
        //         "mapbox:group": "1452087317478.8662"
        //     },
        //     "source": "composite",
        //     "source-layer": "Skrivemaate",
        //     "minzoom": 10,
        //     "maxzoom": 15,
        //     "interactive": true,
        //     "filter": [
        //         "all",
        //         [
        //             "==",
        //             "ptema",
        //             "100"
        //         ],
        //         [
        //             "==",
        //             "streng",
        //             "Oslo"
        //         ]
        //     ],
        //     "layout": {
        //         "visibility": "none",
        //         "text-field": "{streng}",
        //         "text-font": [
        //             "DIN Offc Pro Bold",
        //             "Arial Unicode MS Regular"
        //         ],
        //         "text-size": {
        //             "base": 0.9,
        //             "stops": [
        //                 [
        //                     4,
        //                     13
        //                 ],
        //                 [
        //                     6,
        //                     16
        //                 ]
        //             ]
        //         },
        //         "text-transform": "none",
        //         "icon-image": "dot-9",
        //         "text-anchor": "top"
        //     },
        //     "paint": {
        //         "text-halo-color": "#fff",
        //         "text-halo-width": 1,
        //         "text-halo-blur": 1,
        //         "text-color": "rgba(20,20,20,1)"
        //     }
        // },
        {
            "id": "Skrivemaate_9004(Høyde_Vann)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1452087317478.8662"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 13,
            "maxzoom": 20,
            "interactive": true,
            "filter": [
                "==",
                "ptema",
                "9004"
            ],
            "layout": {
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            9,
                            8
                        ],
                        [
                            16,
                            14
                        ]
                    ]
                },
                "text-allow-overlap": true,
                "text-font": [
                    "DIN Offc Pro Italic",
                    "Arial Unicode MS Regular"
                ],
                "text-justify": "left",
                "text-padding": 1,
                "visibility": "visible",
                "text-rotation-alignment": "map",
                "text-anchor": "center",
                "text-field": "{streng}"
            },
            "paint": {
                "text-color": "hsl(245, 77%, 46%)",
                "text-halo-width": 0.75,
                "text-halo-color": "#fff",
                "text-halo-blur": 0.25,
                "text-opacity": 1
            }
        },
        {
            "id": "Skrivemaate_9002(Høyde_Ås)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1452087317478.8662"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 13,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    "==",
                    "ptema",
                    "9002"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            9,
                            6
                        ],
                        [
                            14,
                            10
                        ]
                    ]
                },
                "text-allow-overlap": true,
                "text-font": [
                    "DIN Offc Pro Italic",
                    "Arial Unicode MS Regular"
                ],
                "text-justify": "left",
                "text-padding": 1,
                "visibility": "visible",
                "text-rotation-alignment": "map",
                "text-anchor": "center",
                "text-field": "{streng}"
            },
            "paint": {
                "text-color": "hsl(24, 100%, 19%)",
                "text-halo-width": 1,
                "text-halo-color": "#fff",
                "text-halo-blur": 0.25,
                "text-opacity": 1
            }
        },
        {
            "id": "Skrivemaate_10(Fjell)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1452087317478.8662"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 11,
            "maxzoom": 14,
            "interactive": true,
            "filter": [
                "==",
                "ptema",
                "10"
            ],
            "layout": {
                "visibility": "visible",
                "text-field": "{streng}",
                "text-font": [
                    "DIN Offc Pro Bold Italic",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            10
                        ],
                        [
                            14,
                            14
                        ]
                    ]
                },
                "text-transform": "none"
            },
            "paint": {
                "text-halo-color": "#fff",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "hsl(0, 0%, 0%)",
                "text-opacity": 0.7
            }
        },
        {
            "id": "Skrivemaate_6(Fjell)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1452087317478.8662"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 11,
            "maxzoom": 14,
            "interactive": true,
            "filter": [
                "==",
                "ptema",
                "6"
            ],
            "layout": {
                "visibility": "visible",
                "text-field": "{streng}",
                "text-font": [
                    "DIN Offc Pro Bold Italic",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            10
                        ],
                        [
                            14,
                            14
                        ]
                    ]
                },
                "text-transform": "none"
            },
            "paint": {
                "text-halo-color": "#fff",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "hsl(0, 0%, 0%)",
                "text-opacity": 0.7
            }
        },
        {
            "id": "Skrivemaate_6(Fjell) copy",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1452087317478.8662"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 11,
            "maxzoom": 14,
            "interactive": true,
            "filter": [
                "==",
                "ptema",
                "2"
            ],
            "layout": {
                "visibility": "visible",
                "text-field": "{streng}",
                "text-font": [
                    "DIN Offc Pro Bold Italic",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            10
                        ],
                        [
                            14,
                            14
                        ]
                    ]
                },
                "text-transform": "none"
            },
            "paint": {
                "text-halo-color": "#fff",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "hsl(0, 0%, 0%)",
                "text-opacity": 0.7
            }
        },
        // {
        //     "id": "Skrivemaate_alle",
        //     "type": "symbol",
        //     "metadata": {
        //         "mapbox:group": "1463636918781.4102"
        //     },
        //     "source": "composite",
        //     "source-layer": "Skrivemaate",
        //     "minzoom": 8,
        //     "maxzoom": 12,
        //     "interactive": true,
        //     "layout": {
        //         "visibility": "none",
        //         "text-field": "{streng}",
        //         "text-font": [
        //             "DIN Offc Pro Cond Medium",
        //             "Arial Unicode MS Regular"
        //         ],
        //         "text-size": {
        //             "base": 0.9,
        //             "stops": [
        //                 [
        //                     12,
        //                     10
        //                 ],
        //                 [
        //                     14,
        //                     14
        //                 ]
        //             ]
        //         },
        //         "text-transform": "none",
        //         "text-allow-overlap": false,
        //         "text-letter-spacing": 0.06
        //     },
        //     "paint": {
        //         "text-halo-color": "#fff",
        //         "text-halo-width": 1,
        //         "text-halo-blur": 1,
        //         "text-color": "hsl(0, 96%, 49%)",
        //         "text-opacity": 0.75
        //     }
        // },
        {
            "id": "Skrivemaate-80_89(øy)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1463636918781.4102"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 13,
            "maxzoom": 14,
            "interactive": true,
            "filter": [
                "all",
                [
                    ">=",
                    "ptema",
                    "80"
                ],
                [
                    "<=",
                    "ptema",
                    "89"
                ],
                [
                    "!in",
                    "ptema",
                    "84",
                    "85",
                    "83",
                    "82"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "text-field": "{streng}",
                "text-anchor": "center",
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            8
                        ],
                        [
                            22,
                            12
                        ]
                    ]
                },
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "text-allow-overlap": false
            },
            "paint": {
                "text-halo-color": "#fff",
                "text-halo-width": 0.75,
                "text-halo-blur": 0.5,
                "text-color": "hsl(0, 0%, 30%)"
            }
        },
        {
            "id": "Skrivemaate-85+90(øy)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1463636918781.4102"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 12,
            "maxzoom": 15,
            "interactive": true,
            "filter": [
                "in",
                "ptema",
                "90",
                "85"
            ],
            "layout": {
                "visibility": "visible",
                "text-field": "{streng}",
                "text-anchor": "center",
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            10
                        ],
                        [
                            22,
                            14
                        ]
                    ]
                },
                "text-font": [
                    "DIN Offc Pro Regular",
                    "Arial Unicode MS Regular"
                ],
                "text-allow-overlap": false
            },
            "paint": {
                "text-halo-color": "#fff",
                "text-halo-width": 0.75,
                "text-halo-blur": 0.5,
                "text-color": "hsl(0, 0%, 30%)"
            }
        },
        {
            "id": "Skrivemaate-84(øy)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1463636918781.4102"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 12,
            "maxzoom": 15,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    "==",
                    "ptema",
                    "84"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "text-field": "{streng}",
                "text-anchor": "center",
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            12
                        ],
                        [
                            22,
                            16
                        ]
                    ]
                },
                "text-font": [
                    "DIN Offc Pro Medium Italic",
                    "Arial Unicode MS Regular"
                ]
            },
            "paint": {
                "text-halo-color": "#fff",
                "text-halo-width": 0.75,
                "text-halo-blur": 0.5,
                "text-color": "hsl(0, 0%, 20%)",
                "text-opacity": 0.7
            }
        },
        {
            "id": "Skrivemaate_36(Elv)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1463636918781.4102"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 8,
            "maxzoom": 13,
            "interactive": true,
            "filter": [
                "all",
                [
                    "in",
                    "$type",
                    "LineString",
                    "Polygon",
                    "Point"
                ],
                [
                    "==",
                    "ptema",
                    "36"
                ]
            ],
            "layout": {
                "text-field": "{streng}",
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            10
                        ],
                        [
                            9,
                            14
                        ]
                    ]
                },
                "text-font": [
                    "DIN Offc Pro Cond",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": "line",
                "text-rotation-alignment": "map"
            },
            "paint": {
                "text-color": "#405ace",
                "text-halo-color": "#fff",
                "text-halo-width": 1
            }
        },
        {
            "id": "Skrivemaate_vann_32",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1463636918781.4102"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 11,
            "maxzoom": 14,
            "interactive": true,
            "filter": [
                "==",
                "ptema",
                "32"
            ],
            "layout": {
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            6,
                            8
                        ],
                        [
                            14,
                            14
                        ]
                    ]
                },
                "text-allow-overlap": false,
                "symbol-avoid-edges": false,
                "text-ignore-placement": false,
                "text-font": [
                    "DIN Offc Pro Regular",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": "point",
                "text-justify": "center",
                "text-padding": 2,
                "visibility": "visible",
                "text-rotation-alignment": "map",
                "text-anchor": "center",
                "text-field": "{streng}"
            },
            "paint": {
                "text-color": "#1815bd",
                "text-opacity": 1,
                "text-halo-color": "#fff",
                "text-halo-width": 1,
                "text-halo-blur": 1
            }
        },
        // {
        //     "id": "Skrivemaate_vann_xx",
        //     "type": "symbol",
        //     "metadata": {
        //         "mapbox:group": "1463636918781.4102"
        //     },
        //     "source": "composite",
        //     "source-layer": "Skrivemaate",
        //     "minzoom": 8,
        //     "maxzoom": 14,
        //     "interactive": true,
        //     "layout": {
        //         "text-size": {
        //             "base": 1,
        //             "stops": [
        //                 [
        //                     8,
        //                     15
        //                 ],
        //                 [
        //                     14,
        //                     17
        //                 ]
        //             ]
        //         },
        //         "text-allow-overlap": false,
        //         "symbol-avoid-edges": false,
        //         "text-ignore-placement": false,
        //         "text-font": [
        //             "DIN Offc Pro Medium",
        //             "Arial Unicode MS Regular"
        //         ],
        //         "symbol-placement": "point",
        //         "text-justify": "center",
        //         "text-padding": 2,
        //         "visibility": "none",
        //         "text-rotation-alignment": "map",
        //         "text-anchor": "center",
        //         "text-field": "{streng}"
        //     },
        //     "paint": {
        //         "text-color": "#1815bd",
        //         "text-opacity": 1,
        //         "text-halo-color": "#fff",
        //         "text-halo-width": 1,
        //         "text-halo-blur": 1
        //     }
        // },
        {
            "id": "Skrivemaate_30(Fjord)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1463636918781.4102"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 7,
            "maxzoom": 10,
            "interactive": true,
            "filter": [
                "all",
                [
                    "in",
                    "$type",
                    "LineString",
                    "Polygon"
                ],
                [
                    "==",
                    "ptema",
                    "30"
                ]
            ],
            "layout": {
                "text-field": "{streng}",
                "visibility": "visible",
                "text-font": [
                    "DIN Offc Pro Cond",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            10
                        ],
                        [
                            9,
                            11
                        ]
                    ]
                },
                "symbol-placement": "line"
            },
            "paint": {
                "text-color": "#4a47e6",
                "text-halo-color": "#fff",
                "text-halo-width": 0.5
            }
        },
        {
            "id": "Skrivemaate_80(Fjord)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1463636918781.4102"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 7,
            "maxzoom": 14,
            "interactive": true,
            "filter": [
                "all",
                [
                    "in",
                    "$type",
                    "LineString",
                    "Polygon"
                ],
                [
                    "==",
                    "ptema",
                    "80"
                ]
            ],
            "layout": {
                "text-field": "{streng}",
                "visibility": "visible",
                "text-font": [
                    "DIN Offc Pro Regular",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            10
                        ],
                        [
                            9,
                            11
                        ]
                    ]
                },
                "symbol-placement": "line",
                "text-letter-spacing": 0.02
            },
            "paint": {
                "text-color": "#4a47e6",
                "text-halo-color": "#fff",
                "text-halo-width": 1
            }
        },
        {
            "id": "Skrivemaate_vann_31",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1463636918781.4102"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 7,
            "maxzoom": 14,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    "==",
                    "ptema",
                    "31"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            9,
                            9
                        ],
                        [
                            13,
                            14
                        ]
                    ]
                },
                "text-allow-overlap": false,
                "symbol-avoid-edges": false,
                "text-ignore-placement": true,
                "text-font": [
                    "DIN Offc Pro Italic",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": "point",
                "text-justify": "center",
                "text-padding": 4,
                "visibility": "visible",
                "text-rotation-alignment": "viewport",
                "text-anchor": "left",
                "text-field": "{streng}"
            },
            "paint": {
                "text-color": "hsl(241, 76%, 59%)",
                "text-opacity": 1,
                "text-halo-color": "#fff",
                "text-halo-width": 1,
                "text-halo-blur": 1
            }
        },
        {
            "id": "Skrivemaate_vann_30",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1463636918781.4102"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 7,
            "maxzoom": 14,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    "==",
                    "ptema",
                    "30"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            9,
                            10
                        ],
                        [
                            12,
                            14
                        ]
                    ]
                },
                "text-allow-overlap": false,
                "symbol-avoid-edges": false,
                "text-ignore-placement": false,
                "text-font": [
                    "DIN Offc Pro Italic",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": "point",
                "text-justify": "center",
                "text-padding": 20,
                "visibility": "visible",
                "text-rotation-alignment": "map",
                "text-anchor": "center",
                "text-field": "{streng}"
            },
            "paint": {
                "text-color": "hsl(241, 76%, 59%)",
                "text-opacity": 1,
                "text-halo-color": "#fff",
                "text-halo-width": 1,
                "text-halo-blur": 1
            }
        },
        {
            "id": "Skrivemaate_16(Dal)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1463636918781.4102"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 8,
            "maxzoom": 10,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "==",
                    "ptema",
                    "16"
                ]
            ],
            "layout": {
                "text-field": "{streng}",
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            10
                        ],
                        [
                            9,
                            12
                        ]
                    ]
                },
                "text-font": [
                    "DIN Offc Pro Cond Medium",
                    "Arial Unicode MS Regular"
                ],
                "text-justify": "center",
                "symbol-placement": "line",
                "text-rotation-alignment": "map",
                "text-letter-spacing": 0.02
            },
            "paint": {
                "text-halo-color": "#fff",
                "text-halo-width": 1,
                "text-halo-blur": 0.5,
                "text-opacity": 0.7
            }
        },
        {
            "id": "Skrivemaate_15(Dal)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1463636918781.4102"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 7,
            "maxzoom": 10,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "==",
                    "ptema",
                    "15"
                ]
            ],
            "layout": {
                "text-field": "{streng}",
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            9
                        ],
                        [
                            9,
                            11
                        ]
                    ]
                },
                "text-letter-spacing": 0.05,
                "symbol-placement": "line",
                "text-rotation-alignment": "map",
                "text-font": [
                    "DIN Offc Pro Cond Medium",
                    "Arial Unicode MS Regular"
                ]
            },
            "paint": {
                "text-halo-color": "#fff",
                "text-halo-width": 1,
                "text-halo-blur": 0.5,
                "text-opacity": 0.8
            }
        },
        {
            "id": "Skrivemaate_6(Ås)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1463636918781.4102"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 9,
            "maxzoom": 12,
            "interactive": true,
            "filter": [
                "==",
                "ptema",
                "6"
            ],
            "layout": {
                "visibility": "visible",
                "text-field": "{streng}",
                "text-font": [
                    "DIN Offc Pro Bold Italic",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            10
                        ],
                        [
                            12,
                            14
                        ]
                    ]
                },
                "text-transform": "none"
            },
            "paint": {
                "text-halo-color": "#fff",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "rgba(37,99,1,1)",
                "text-opacity": 0.7
            }
        },
        {
            "id": "Skrivemaate_5(Fjellområde)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1463636918781.4102"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 9,
            "maxzoom": 12,
            "interactive": true,
            "filter": [
                "==",
                "ptema",
                "5"
            ],
            "layout": {
                "visibility": "visible",
                "text-field": "{streng}",
                "text-font": [
                    "DIN Offc Pro Bold Italic",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            10
                        ],
                        [
                            12,
                            14
                        ]
                    ]
                },
                "text-transform": "none"
            },
            "paint": {
                "text-halo-color": "#fff",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "rgba(37,99,1,1)",
                "text-opacity": 0.7
            }
        },
        {
            "id": "Skrivemaate_4(Fjell)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1463636918781.4102"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 7,
            "maxzoom": 10,
            "interactive": true,
            "filter": [
                "==",
                "ptema",
                "4"
            ],
            "layout": {
                "visibility": "visible",
                "text-field": "{streng}",
                "text-font": [
                    "DIN Offc Pro Bold Italic",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            10
                        ],
                        [
                            14,
                            14
                        ]
                    ]
                },
                "text-transform": "none"
            },
            "paint": {
                "text-halo-color": "#fff",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "hsl(0, 0%, 0%)",
                "text-opacity": 0.7
            }
        },
        {
            "id": "Skrivemaate_3(Fjell)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1463636918781.4102"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 7,
            "maxzoom": 10,
            "interactive": true,
            "filter": [
                "==",
                "ptema",
                "3"
            ],
            "layout": {
                "visibility": "visible",
                "text-field": "{streng}",
                "text-font": [
                    "DIN Offc Pro Bold Italic",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            10
                        ],
                        [
                            14,
                            14
                        ]
                    ]
                },
                "text-transform": "none"
            },
            "paint": {
                "text-halo-color": "#fff",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "hsl(0, 0%, 0%)",
                "text-opacity": 0.7
            }
        },
        {
            "id": "Skrivemaate_2(Fjell)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1463636918781.4102"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 8,
            "maxzoom": 12,
            "interactive": true,
            "filter": [
                "==",
                "ptema",
                "2"
            ],
            "layout": {
                "visibility": "visible",
                "text-field": "{streng}",
                "text-font": [
                    "DIN Offc Pro Cond Medium",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 0.9,
                    "stops": [
                        [
                            12,
                            10
                        ],
                        [
                            14,
                            14
                        ]
                    ]
                },
                "text-transform": "none",
                "text-allow-overlap": false,
                "text-letter-spacing": 0.06
            },
            "paint": {
                "text-halo-color": "#fff",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "hsl(0, 0%, 0%)",
                "text-opacity": 0.75
            }
        },
        {
            "id": "Skrivemaate_7(Fylke)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1463636370102.6504"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 4,
            "maxzoom": 10,
            "interactive": true,
            "filter": [
                "in",
                "ptema",
                "7",
                "181"
            ],
            "layout": {
                "visibility": "visible",
                "text-field": "{streng}",
                "text-font": [
                    "DIN Offc Pro Light Italic",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 0.9,
                    "stops": [
                        [
                            4,
                            11
                        ],
                        [
                            8,
                            16
                        ]
                    ]
                },
                "text-transform": "none",
                "text-anchor": "left"
            },
            "paint": {
                "text-halo-color": "#fff",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "rgba(20,20,20,1)",
                "text-opacity": 0.9
            }
        },
        {
            "id": "Skrivemaate_6(Innsjoe)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1463636370102.6504"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 6,
            "maxzoom": 7,
            "interactive": true,
            "filter": [
                "==",
                "ptema",
                "6"
            ],
            "layout": {
                "visibility": "visible",
                "text-field": "{streng}",
                "text-font": [
                    "DIN Offc Pro Italic",
                    "Arial Unicode MS Regular"
                ],
                "text-size": 12,
                "text-transform": "none",
                "text-allow-overlap": false
            },
            "paint": {
                "text-halo-color": "#fff",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "hsl(229, 92%, 42%)",
                "text-opacity": 0.75
            }
        },
        // {
        //     "id": "Skrivemaate_4",
        //     "type": "symbol",
        //     "metadata": {
        //         "mapbox:group": "1463636370102.6504"
        //     },
        //     "source": "composite",
        //     "source-layer": "Skrivemaate",
        //     "minzoom": 5,
        //     "maxzoom": 7,
        //     "interactive": true,
        //     "filter": [
        //         "==",
        //         "ptema",
        //         "4"
        //     ],
        //     "layout": {
        //         "text-size": {
        //             "base": 0.9,
        //             "stops": [
        //                 [
        //                     6,
        //                     10
        //                 ],
        //                 [
        //                     7,
        //                     12
        //                 ]
        //             ]
        //         },
        //         "text-allow-overlap": true,
        //         "icon-image": "dot-9",
        //         "text-transform": "none",
        //         "text-font": [
        //             "DIN Offc Pro Regular",
        //             "Arial Unicode MS Regular"
        //         ],
        //         "text-padding": 1,
        //         "visibility": "none",
        //         "icon-size": 0.8,
        //         "text-anchor": "center",
        //         "text-field": "{streng}",
        //         "text-letter-spacing": 0.01,
        //         "icon-padding": 1
        //     },
        //     "paint": {
        //         "text-halo-color": "#fff",
        //         "text-halo-width": 1,
        //         "text-halo-blur": 1,
        //         "text-color": "rgba(20,20,20,1)"
        //     }
        // },
        // {
        //     "id": "Skrivemaate_3",
        //     "type": "symbol",
        //     "metadata": {
        //         "mapbox:group": "1463636370102.6504"
        //     },
        //     "source": "composite",
        //     "source-layer": "Skrivemaate",
        //     "minzoom": 5,
        //     "maxzoom": 7,
        //     "interactive": true,
        //     "filter": [
        //         "==",
        //         "ptema",
        //         "3"
        //     ],
        //     "layout": {
        //         "text-size": {
        //             "base": 0.9,
        //             "stops": [
        //                 [
        //                     6,
        //                     10
        //                 ],
        //                 [
        //                     7,
        //                     12
        //                 ]
        //             ]
        //         },
        //         "text-allow-overlap": true,
        //         "icon-image": "dot-9",
        //         "text-transform": "none",
        //         "text-font": [
        //             "DIN Offc Pro Regular",
        //             "Arial Unicode MS Regular"
        //         ],
        //         "text-padding": 1,
        //         "visibility": "none",
        //         "icon-size": 0.8,
        //         "text-anchor": "center",
        //         "text-field": "{streng}",
        //         "text-letter-spacing": 0.01,
        //         "icon-padding": 1
        //     },
        //     "paint": {
        //         "text-halo-color": "#fff",
        //         "text-halo-width": 1,
        //         "text-halo-blur": 1,
        //         "text-color": "rgba(20,20,20,1)"
        //     }
        // },
        // {
        //     "id": "Skrivemaate_2(LitenBy)",
        //     "type": "symbol",
        //     "metadata": {
        //         "mapbox:group": "1463636370102.6504"
        //     },
        //     "source": "composite",
        //     "source-layer": "Skrivemaate",
        //     "minzoom": 5,
        //     "maxzoom": 7,
        //     "interactive": true,
        //     "filter": [
        //         "==",
        //         "ptema",
        //         "2"
        //     ],
        //     "layout": {
        //         "text-size": {
        //             "base": 0.9,
        //             "stops": [
        //                 [
        //                     6,
        //                     10
        //                 ],
        //                 [
        //                     7,
        //                     12
        //                 ]
        //             ]
        //         },
        //         "text-allow-overlap": true,
        //         "icon-image": "dot-9",
        //         "text-transform": "none",
        //         "text-font": [
        //             "DIN Offc Pro Medium",
        //             "Arial Unicode MS Regular"
        //         ],
        //         "text-padding": 1,
        //         "visibility": "none",
        //         "icon-size": 0.8,
        //         "text-anchor": "center",
        //         "text-field": "{streng}",
        //         "text-letter-spacing": 0.01,
        //         "icon-padding": 1
        //     },
        //     "paint": {
        //         "text-halo-color": "#fff",
        //         "text-halo-width": 1,
        //         "text-halo-blur": 1,
        //         "text-color": "rgba(20,20,20,1)"
        //     }
        // },
        // {
        //     "id": "Skrivemaate_1(Stor by)",
        //     "type": "symbol",
        //     "metadata": {
        //         "mapbox:group": "1463636370102.6504"
        //     },
        //     "source": "composite",
        //     "source-layer": "Skrivemaate",
        //     "minzoom": 4,
        //     "maxzoom": 7,
        //     "interactive": true,
        //     "filter": [
        //         "all",
        //         [
        //             "==",
        //             "ptema",
        //             "1"
        //         ],
        //         [
        //             "!=",
        //             "streng",
        //             "Oslo"
        //         ]
        //     ],
        //     "layout": {
        //         "visibility": "none",
        //         "text-field": "{streng}",
        //         "text-font": [
        //             "DIN Offc Pro Regular",
        //             "Arial Unicode MS Regular"
        //         ],
        //         "text-size": {
        //             "base": 0.9,
        //             "stops": [
        //                 [
        //                     4,
        //                     13
        //                 ],
        //                 [
        //                     6,
        //                     16
        //                 ]
        //             ]
        //         },
        //         "text-transform": "none",
        //         "icon-image": "dot-9",
        //         "text-anchor": "bottom"
        //     },
        //     "paint": {
        //         "text-halo-color": "#fff",
        //         "text-halo-width": 1,
        //         "text-halo-blur": 1,
        //         "text-color": "rgba(20,20,20,1)"
        //     }
        // },
        // {
        //     "id": "Skrivemaate_1(Oslo)",
        //     "type": "symbol",
        //     "metadata": {
        //         "mapbox:group": "1463636370102.6504"
        //     },
        //     "source": "composite",
        //     "source-layer": "Skrivemaate",
        //     "minzoom": 4,
        //     "maxzoom": 7,
        //     "interactive": true,
        //     "filter": [
        //         "all",
        //         [
        //             "==",
        //             "ptema",
        //             "1"
        //         ],
        //         [
        //             "==",
        //             "streng",
        //             "Oslo"
        //         ]
        //     ],
        //     "layout": {
        //         "visibility": "none",
        //         "text-field": "{streng}",
        //         "text-font": [
        //             "DIN Offc Pro Bold",
        //             "Arial Unicode MS Regular"
        //         ],
        //         "text-size": {
        //             "base": 0.9,
        //             "stops": [
        //                 [
        //                     4,
        //                     13
        //                 ],
        //                 [
        //                     6,
        //                     16
        //                 ]
        //             ]
        //         },
        //         "text-transform": "none",
        //         "icon-image": "dot-9",
        //         "text-anchor": "top"
        //     },
        //     "paint": {
        //         "text-halo-color": "#fff",
        //         "text-halo-width": 1,
        //         "text-halo-blur": 1,
        //         "text-color": "rgba(20,20,20,1)"
        //     }
        // },
        {
            "id": "place-label-sted",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1463634697483.6973"
            },
            "source": "composite",
            "source-layer": "place_label",
            "minzoom": 8,
            "maxzoom": 12,
            "interactive": true,
            "filter": [
                "all",
                [
                    "!in",
                    "type",
                    "town",
                    "city",
                    "suburb"
                ],
                [
                    ">",
                    "localrank",
                    2
                ]
            ],
            "layout": {
                "visibility": "visible",
                "text-field": "{name_en}",
                "text-font": [
                    "DIN Offc Pro Italic",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            11
                        ],
                        [
                            14,
                            14
                        ]
                    ]
                },
                "text-anchor": "center",
                "text-rotation-alignment": "map"
            },
            "paint": {
                "text-opacity": 0.85,
                "text-halo-color": "#fff",
                "text-halo-width": 1.5,
                "text-halo-blur": 0.1
            }
        },
        {
            "id": "place-label-stortsted",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1463634697483.6973"
            },
            "source": "composite",
            "source-layer": "place_label",
            "minzoom": 8,
            "maxzoom": 12,
            "interactive": true,
            "filter": [
                "all",
                [
                    "!in",
                    "type",
                    "town",
                    "city"
                ],
                [
                    "<=",
                    "localrank",
                    2
                ]
            ],
            "layout": {
                "visibility": "visible",
                "text-field": "{name_en}",
                "text-font": [
                    "DIN Offc Pro Medium Italic",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            12
                        ],
                        [
                            14,
                            15
                        ]
                    ]
                },
                "text-anchor": "center",
                "text-rotation-alignment": "map"
            },
            "paint": {
                "text-opacity": 0.85,
                "text-halo-color": "#fff",
                "text-halo-width": 1.5,
                "text-halo-blur": 0.1
            }
        },
        {
            "id": "place-label-Landsby",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1463634697483.6973"
            },
            "source": "composite",
            "source-layer": "place_label",
            "minzoom": 4,
            "maxzoom": 14,
            "interactive": true,
            "filter": [
                "in",
                "type",
                "town",
                ""
            ],
            "layout": {
                "visibility": "visible",
                "text-field": "{name_en}",
                "text-font": [
                    "DIN Offc Pro Regular",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            11.5
                        ],
                        [
                            15,
                            20
                        ]
                    ]
                },
                "text-anchor": "center",
                "text-rotation-alignment": "map",
                "text-max-width": 7
            },
            "paint": {
                "text-opacity": 1,
                "text-halo-color": "#fff",
                "text-halo-width": 1.25,
                "text-halo-blur": 0
            }
        },
        {
            "id": "place-label-By",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1463634697483.6973"
            },
            "source": "composite",
            "source-layer": "place_label",
            "minzoom": 4,
            "maxzoom": 14,
            "interactive": true,
            "filter": [
                "all",
                [
                    "in",
                    "scalerank",
                    3,
                    4,
                    5,
                    6,
                    7
                ],
                [
                    "==",
                    "type",
                    "city"
                ]
            ],
            "layout": {
                "text-optional": true,
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            6,
                            12
                        ],
                        [
                            10,
                            22
                        ]
                    ]
                },
                "text-allow-overlap": false,
                "icon-image": "dot-9",
                "icon-rotation-alignment": "viewport",
                "text-ignore-placement": false,
                "text-font": [
                    "DIN Offc Pro Regular",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": "point",
                "text-padding": 2,
                "visibility": "visible",
                "text-rotation-alignment": "viewport",
                "text-anchor": "bottom",
                "text-field": "{name_en}"
            },
            "paint": {
                "text-opacity": 1,
                "text-halo-color": "#fff",
                "text-halo-width": 1.25,
                "text-halo-blur": 0
            }
        },
        {
            "id": "place-label-Hovedstad",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1463634697483.6973"
            },
            "source": "composite",
            "source-layer": "place_label",
            "interactive": true,
            "filter": [
                "all",
                [
                    "in",
                    "scalerank",
                    0,
                    2,
                    1
                ],
                [
                    "==",
                    "type",
                    "city"
                ],
                [
                    "in",
                    "ldir",
                    "E",
                    "S",
                    "SW",
                    "SE"
                ]
            ],
            "layout": {
                "visibility": "visible",
                "text-field": "{name_en}",
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 0.9,
                    "stops": [
                        [
                            4,
                            12
                        ],
                        [
                            10,
                            22
                        ]
                    ]
                },
                "icon-image": "dot-9",
                "text-anchor": "top",
                "text-max-width": 7
            },
            "paint": {
                "text-opacity": 0.9,
                "text-halo-color": "#fff",
                "text-halo-width": 1,
                "text-halo-blur": 1
            }
        },
        {
            "id": "country-label-small",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1463634697483.6973"
            },
            "source": "composite",
            "source-layer": "country_label",
            "minzoom": 1,
            "maxzoom": 7,
            "interactive": true,
            "filter": [
                ">=",
                "scalerank",
                5
            ],
            "layout": {
                "visibility": "visible",
                "text-field": "{name}",
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 0.9,
                    "stops": [
                        [
                            5,
                            14
                        ],
                        [
                            9,
                            22
                        ]
                    ]
                }
            },
            "paint": {
                "text-halo-color": "#fff",
                "text-halo-width": 1.25
            }
        },
        {
            "id": "country-label-medium",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1463634697483.6973"
            },
            "source": "composite",
            "source-layer": "country_label",
            "minzoom": 1,
            "maxzoom": 7,
            "interactive": true,
            "filter": [
                "in",
                "scalerank",
                3,
                4
            ],
            "layout": {
                "visibility": "visible",
                "text-field": "{name}",
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            10
                        ],
                        [
                            8,
                            24
                        ]
                    ]
                }
            },
            "paint": {
                "text-halo-color": "#fff",
                "text-halo-width": 1.25
            }
        },
        {
            "id": "country-label-large",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1463634697483.6973"
            },
            "source": "composite",
            "source-layer": "country_label",
            "minzoom": 1,
            "maxzoom": 7,
            "interactive": true,
            "filter": [
                "in",
                "scalerank",
                1,
                2
            ],
            "layout": {
                "visibility": "visible",
                "text-field": "{name}",
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            1,
                            10
                        ],
                        [
                            6,
                            24
                        ]
                    ]
                }
            },
            "paint": {
                "text-halo-color": "#fff",
                "text-halo-width": 1.25
            }
        },
        {
            "id": "state-label-lg",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1463634697483.6973"
            },
            "source": "composite",
            "source-layer": "state_label",
            "minzoom": 3,
            "maxzoom": 8,
            "interactive": true,
            "filter": [
                ">=",
                "area",
                80000
            ],
            "layout": {
                "visibility": "visible",
                "text-field": "{abbr}",
                "text-font": [
                    "DIN Offc Pro Bold",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 0.9,
                    "stops": [
                        [
                            4,
                            10
                        ],
                        [
                            7,
                            18
                        ]
                    ]
                },
                "text-transform": "uppercase",
                "text-anchor": "left",
                "text-max-width": 6,
                "text-letter-spacing": 0.15
            },
            "paint": {
                "text-halo-color": "#fff",
                "text-halo-width": 1,
                "text-halo-blur": 0,
                "text-color": "rgba(20,20,20,1)",
                "text-opacity": 0.9
            }
        },
        {
            "id": "mountain-peak-label",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1463634697483.6973"
            },
            "source": "composite",
            "source-layer": "mountain_peak_label",
            "interactive": true,
            "filter": [
                ">",
                "elevation_m",
                0
            ],
            "layout": {
                "text-line-height": 1.1,
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            11
                        ],
                        [
                            18,
                            14
                        ]
                    ]
                },
                "icon-image": "dot-11",
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "visibility": "visible",
                "text-offset": [
                    0,
                    0.85
                ],
                "text-anchor": "top",
                "text-field": "{name}, {elevation_m}m",
                "text-letter-spacing": 0.01,
                "text-max-width": 8
            },
            "paint": {
                "text-color": "#260",
                "text-halo-color": "#fff",
                "text-halo-width": 0.5,
                "text-halo-blur": 0.5
            }
        }
    ],
    "created": "2016-05-11T06:11:46.987Z",
    "id": "cio2gxo6b000wc7m7xfh2z02o",
    "modified": "2016-05-20T19:11:20.888Z",
    "owner": "keino",
    "draft": false
};
