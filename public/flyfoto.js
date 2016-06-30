var flyfoto={
    "version": 8,
    "name": "HybridTESTE!!!!!!!!!!!",
    "metadata": {
        "mapbox:autocomposite": true,
        "mapbox:type": "default",
        "mapbox:groups": {
            "1459882298057.56": {
                "name": "Roads",
                "collapsed": true
            },
            "1466743148509.6196": {
                "name": "Skrivemaate",
                "collapsed": true
            },
            "1460058190129.9705": {
                "name": "POI labels (scalerank 2)",
                "collapsed": true
            },
            "1460127465037.9006": {
                "name": "Tunnels",
                "collapsed": true
            },
            "1459882330622.065": {
                "name": "Admin bounds",
                "collapsed": true
            },
            "1466743171666.8916": {
                "name": "FKB_preststedsnavn",
                "collapsed": true
            },
            "1459882360129.4563": {
                "name": "Bridges",
                "collapsed": true
            },
            "1459802933574.639": {
                "name": "state labels",
                "collapsed": true
            },
            "1459802922547.9956": {
                "name": "marine labels",
                "collapsed": true
            },
            "1459802941943.712": {
                "name": "country labels",
                "collapsed": true
            }
        },
        "mapbox:trackposition": false
    },
    "sources": {
        "composite": {
            "url": "mapbox://mapbox.mapbox-streets-v7,keino.8328776z,keino.d6h26g0g,mapbox.mapbox-terrain-v2,keino.3o3buv99,keino.0265oxm6,keino.2z35bhc7,keino.2hsr3nop,keino.4e8kthuy,keino.7x11tylg",
            "type": "vector"
        },
        "mapbox://mapbox.satellite": {
            "url": "mapbox://mapbox.satellite",
            "type": "raster",
            "tileSize": 256
        }
    },
    "sprite": "mapbox://sprites/keino/cips6baso001sdmm5qfbdurn8",
    "glyphs": "mapbox://fonts/keino/{fontstack}/{range}.pbf",
    "layers": [
        {
            "id": "background",
            "type": "background",
            "interactive": true,
            "layout": {},
            "paint": {
                "background-color": "rgb(4,7,14)"
            }
        },
        {
            "id": "mapbox-mapbox-satellite",
            "type": "raster",
            "source": "mapbox://mapbox.satellite",
            "maxzoom": 15,
            "interactive": true,
            "layout": {},
            "paint": {}
        },
        {
            "id": "tunnel-secondary-tertiary case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1460127465037.9006"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "structure",
                    "tunnel"
                ],
                [
                    "in",
                    "class",
                    "secondary",
                    "tertiary"
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-color": "#fff",
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            13,
                            0
                        ],
                        [
                            13.5,
                            0.5
                        ],
                        [
                            16,
                            0.75
                        ],
                        [
                            18,
                            0.35
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
                            2
                        ]
                    ]
                },
                "line-dasharray": [
                    3,
                    3
                ],
                "line-blur": 0,
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            18,
                            12
                        ]
                    ]
                }
            }
        },
        {
            "id": "tunnel-street_limited case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1460127465037.9006"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "street_limited"
                ],
                [
                    "==",
                    "structure",
                    "tunnel"
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-color": "#fff",
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            13,
                            0
                        ],
                        [
                            13.5,
                            0.5
                        ],
                        [
                            16,
                            0.75
                        ],
                        [
                            18,
                            0.35
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
                            2
                        ]
                    ]
                },
                "line-dasharray": [
                    3,
                    3
                ],
                "line-blur": 0,
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            18,
                            12
                        ]
                    ]
                }
            }
        },
        {
            "id": "tunnel-street case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1460127465037.9006"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "street"
                ],
                [
                    "==",
                    "structure",
                    "tunnel"
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(0, 28%, 93%)",
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            13,
                            0
                        ],
                        [
                            13.5,
                            0.5
                        ],
                        [
                            16,
                            0.75
                        ],
                        [
                            18,
                            0.35
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
                            2
                        ]
                    ]
                },
                "line-dasharray": [
                    3,
                    3
                ],
                "line-blur": 0,
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
                }
            }
        },
        {
            "id": "tunnel-primary-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1460127465037.9006"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "primary"
                ],
                [
                    "==",
                    "structure",
                    "tunnel"
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-color": "#fff",
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            13,
                            0
                        ],
                        [
                            13.5,
                            0.5
                        ],
                        [
                            16,
                            0.75
                        ],
                        [
                            18,
                            0.35
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
                            2
                        ]
                    ]
                },
                "line-dasharray": [
                    3,
                    3
                ],
                "line-blur": 0,
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                }
            }
        },
        {
            "id": "tunnel-trunk_link-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1460127465037.9006"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "structure",
                    "tunnel"
                ],
                [
                    "==",
                    "type",
                    "trunk_link"
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(0, 28%, 93%)",
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            13,
                            0
                        ],
                        [
                            13.5,
                            0.5
                        ],
                        [
                            16,
                            0.75
                        ],
                        [
                            18,
                            0.35
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
                            2
                        ]
                    ]
                },
                "line-dasharray": [
                    3,
                    3
                ],
                "line-blur": 0,
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
                }
            }
        },
        {
            "id": "tunnel-motorway_link-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1460127465037.9006"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "motorway_link"
                ],
                [
                    "==",
                    "structure",
                    "tunnel"
                ]
            ],
            "layout": {
                "line-cap": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            "round"
                        ],
                        [
                            12,
                            "butt"
                        ]
                    ]
                },
                "line-join": "round"
            },
            "paint": {
                "line-color": "#fff",
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            13,
                            0
                        ],
                        [
                            13.5,
                            0.5
                        ],
                        [
                            16,
                            0.75
                        ],
                        [
                            18,
                            0.35
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.5
                        ],
                        [
                            16,
                            2
                        ]
                    ]
                },
                "line-dasharray": [
                    3,
                    3
                ],
                "line-blur": 0,
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                }
            }
        },
        {
            "id": "tunnel-trunk-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1460127465037.9006"
            },
            "source": "composite",
            "source-layer": "road",
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
                "line-join": "round"
            },
            "paint": {
                "line-color": "#fff",
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            0.75
                        ],
                        [
                            16,
                            0.5
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
                "line-dasharray": [
                    3,
                    3
                ],
                "line-blur": 0,
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                }
            }
        },
        {
            "id": "tunnel-motorway-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1460127465037.9006"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "motorway"
                ],
                [
                    "==",
                    "structure",
                    "tunnel"
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-color": "#fff",
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            0.75
                        ],
                        [
                            16,
                            0.5
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
                "line-dasharray": [
                    3,
                    3
                ],
                "line-blur": 0,
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.75
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                }
            }
        },
        {
            "id": "tunnel-path",
            "type": "line",
            "metadata": {
                "mapbox:group": "1460127465037.9006"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "!=",
                    "type",
                    "steps"
                ],
                [
                    "==",
                    "class",
                    "path"
                ],
                [
                    "==",
                    "structure",
                    "tunnel"
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(0, 0%, 86%)",
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            0.25
                        ],
                        [
                            15,
                            0.4
                        ],
                        [
                            16,
                            0.75
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            14,
                            1
                        ],
                        [
                            18,
                            2.5
                        ]
                    ]
                },
                "line-dasharray": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            [
                                1,
                                0
                            ]
                        ],
                        [
                            15,
                            [
                                1.75,
                                1
                            ]
                        ],
                        [
                            16,
                            [
                                1,
                                0.75
                            ]
                        ],
                        [
                            17,
                            [
                                1,
                                0.5
                            ]
                        ]
                    ]
                }
            }
        },
        {
            "id": "tunnel-trunk_link",
            "type": "line",
            "metadata": {
                "mapbox:group": "1460127465037.9006"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "structure",
                    "tunnel"
                ],
                [
                    "==",
                    "type",
                    "trunk_link"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(0, 28%, 93%)",
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            0.75
                        ],
                        [
                            16,
                            0
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.75
                        ],
                        [
                            20,
                            2
                        ]
                    ]
                },
                "line-dasharray": [
                    1,
                    0
                ],
                "line-blur": 0
            }
        },
        {
            "id": "tunnel-motorway_link",
            "type": "line",
            "metadata": {
                "mapbox:group": "1460127465037.9006"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "motorway_link"
                ],
                [
                    "==",
                    "structure",
                    "tunnel"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            5,
                            "hsl(31, 27%, 51%)"
                        ],
                        [
                            14.5,
                            "hsl(31, 59%, 56%)"
                        ],
                        [
                            18,
                            "hsl(84, 2%, 82%)"
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            0.75
                        ],
                        [
                            16,
                            0
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
                            18
                        ]
                    ]
                },
                "line-dasharray": [
                    1,
                    0
                ],
                "line-blur": 0
            }
        },
        {
            "id": "tunnel-pedestrian case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1460127465037.9006"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "pedestrian"
                ],
                [
                    "==",
                    "structure",
                    "tunnel"
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(26, 33%, 97%)",
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            0.75
                        ],
                        [
                            16,
                            0.5
                        ]
                    ]
                },
                "line-width": 1,
                "line-dasharray": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            [
                                1,
                                0
                            ]
                        ],
                        [
                            15,
                            [
                                1.5,
                                1
                            ]
                        ],
                        [
                            16,
                            [
                                1,
                                2
                            ]
                        ]
                    ]
                },
                "line-blur": 0,
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            14,
                            0.5
                        ],
                        [
                            18,
                            12
                        ]
                    ]
                }
            }
        },
        {
            "id": "tunnel-service-link-track case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1460127465037.9006"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 14,
            "interactive": true,
            "filter": [
                "all",
                [
                    "!=",
                    "type",
                    "trunk_link"
                ],
                [
                    "==",
                    "structure",
                    "tunnel"
                ],
                [
                    "in",
                    "class",
                    "link",
                    "service",
                    "track"
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            "hsl(0, 1%, 56%)"
                        ],
                        [
                            10,
                            "hsl(0, 0%, 75%)"
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            0.75
                        ],
                        [
                            16,
                            0.5
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
                            12
                        ]
                    ]
                },
                "line-dasharray": [
                    1,
                    0
                ]
            }
        },
        {
            "id": "tunnel-street_limited",
            "metadata": {
                "mapbox:group": "1460127465037.9006"
            },
            "ref": "tunnel-street_limited case",
            "interactive": true,
            "paint": {
                "line-color": "hsl(0, 1%, 17%)",
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            12,
                            0
                        ],
                        [
                            14,
                            0.5
                        ],
                        [
                            16,
                            0
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            10.5,
                            0.5
                        ],
                        [
                            12,
                            4
                        ]
                    ]
                },
                "line-dasharray": [
                    1,
                    0
                ],
                "line-blur": 0
            }
        },
        {
            "id": "tunnel-street",
            "metadata": {
                "mapbox:group": "1460127465037.9006"
            },
            "ref": "tunnel-street case",
            "interactive": true,
            "paint": {
                "line-color": "hsl(0, 1%, 17%)",
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            12,
                            0
                        ],
                        [
                            14,
                            0.5
                        ],
                        [
                            16,
                            0
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            10.5,
                            0.5
                        ],
                        [
                            12,
                            4
                        ]
                    ]
                },
                "line-dasharray": [
                    1,
                    0
                ],
                "line-blur": 0
            }
        },
        {
            "id": "tunnel-secondary-tertiary",
            "type": "line",
            "metadata": {
                "mapbox:group": "1460127465037.9006"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "structure",
                    "tunnel"
                ],
                [
                    "in",
                    "class",
                    "secondary",
                    "tertiary"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(0, 1%, 17%)",
                "line-opacity": {
                    "base": 1.2,
                    "stops": [
                        [
                            11.5,
                            0
                        ],
                        [
                            12.5,
                            0.65
                        ],
                        [
                            16,
                            0
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
                            12
                        ]
                    ]
                },
                "line-dasharray": [
                    1,
                    0
                ],
                "line-blur": 0
            }
        },
        {
            "id": "tunnel-primary",
            "type": "line",
            "metadata": {
                "mapbox:group": "1460127465037.9006"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "primary"
                ],
                [
                    "==",
                    "structure",
                    "tunnel"
                ]
            ],
            "layout": {
                "line-cap": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            "round"
                        ],
                        [
                            12,
                            "butt"
                        ]
                    ]
                },
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(0, 2%, 83%)",
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            0.75
                        ],
                        [
                            16,
                            0
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
                            18
                        ]
                    ]
                },
                "line-dasharray": [
                    1,
                    0
                ],
                "line-blur": 0
            }
        },
        {
            "id": "tunnel-oneway-arrows-blue-minor",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1460127465037.9006"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "interactive": true,
            "filter": [
                "all",
                [
                    "!=",
                    "type",
                    "trunk_link"
                ],
                [
                    "==",
                    "oneway",
                    "true"
                ],
                [
                    "==",
                    "structure",
                    "tunnel"
                ],
                [
                    "in",
                    "class",
                    "link",
                    "path",
                    "pedestrian",
                    "service",
                    "track"
                ]
            ],
            "layout": {
                "icon-image": "oneway-spaced-white-large",
                "visibility": "visible"
            },
            "paint": {}
        },
        {
            "id": "tunnel-oneway-arrows-blue-major",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1460127465037.9006"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "interactive": true,
            "filter": [
                "all",
                [
                    "!=",
                    "type",
                    "trunk_link"
                ],
                [
                    "==",
                    "oneway",
                    "true"
                ],
                [
                    "==",
                    "structure",
                    "tunnel"
                ],
                [
                    "in",
                    "class",
                    "primary",
                    "secondary",
                    "street",
                    "street_limited",
                    "tertiary"
                ]
            ],
            "layout": {
                "icon-image": "oneway-spaced-white-large",
                "visibility": "visible"
            },
            "paint": {}
        },
        {
            "id": "tunnel-trunk",
            "type": "line",
            "metadata": {
                "mapbox:group": "1460127465037.9006"
            },
            "source": "composite",
            "source-layer": "road",
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
                "line-join": "round"
            },
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            "hsl(54, 59%, 54%)"
                        ],
                        [
                            18,
                            "hsl(84, 2%, 82%)"
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            0.75
                        ],
                        [
                            16,
                            0
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
                            18
                        ]
                    ]
                },
                "line-dasharray": [
                    1,
                    0
                ],
                "line-blur": 0
            }
        },
        {
            "id": "tunnel-motorway",
            "type": "line",
            "metadata": {
                "mapbox:group": "1460127465037.9006"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "motorway"
                ],
                [
                    "==",
                    "structure",
                    "tunnel"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            5,
                            "hsl(31, 27%, 51%)"
                        ],
                        [
                            14.5,
                            "hsl(31, 59%, 56%)"
                        ],
                        [
                            18,
                            "hsl(84, 2%, 82%)"
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            0.75
                        ],
                        [
                            16,
                            0
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
                            18
                        ]
                    ]
                },
                "line-dasharray": [
                    1,
                    0
                ],
                "line-blur": 0
            }
        },
        {
            "id": "tunnel-oneway-arrows-white",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1460127465037.9006"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "interactive": true,
            "filter": [
                "all",
                [
                    "!in",
                    "type",
                    "primary_link",
                    "secondary_link",
                    "tertiary_link"
                ],
                [
                    "==",
                    "oneway",
                    "true"
                ],
                [
                    "==",
                    "structure",
                    "tunnel"
                ],
                [
                    "in",
                    "class",
                    "link",
                    "motorway",
                    "motorway_link",
                    "trunk"
                ]
            ],
            "layout": {
                "icon-image": "oneway-spaced-white-large",
                "symbol-placement": "line",
                "symbol-spacing": 150,
                "icon-padding": 2,
                "visibility": "visible"
            },
            "paint": {}
        },
        // {
        //     "id": "ferry",
        //     "type": "line",
        //     "source": "composite",
        //     "source-layer": "road",
        //     "interactive": true,
        //     "filter": [
        //         "==",
        //         "type",
        //         "ferry"
        //     ],
        //     "layout": {
        //         "line-join": "round",
        //         "visibility": "none"
        //     },
        //     "paint": {
        //         "line-color": "#dbdbdb",
        //         "line-opacity": {
        //             "base": 1,
        //             "stops": [
        //                 [
        //                     7.5,
        //                     0
        //                 ],
        //                 [
        //                     8,
        //                     0.15
        //                 ],
        //                 [
        //                     16,
        //                     0.5
        //                 ]
        //             ]
        //         },
        //         "line-width": {
        //             "base": 1,
        //             "stops": [
        //                 [
        //                     14,
        //                     1
        //                 ],
        //                 [
        //                     18,
        //                     2.5
        //                 ]
        //             ]
        //         },
        //         "line-dasharray": {
        //             "base": 1,
        //             "stops": [
        //                 [
        //                     12,
        //                     [
        //                         3.5,
        //                         2
        //                     ]
        //                 ],
        //                 [
        //                     14,
        //                     [
        //                         2,
        //                         1
        //                     ]
        //                 ]
        //             ]
        //         }
        //     }
        // },
        {
            "id": "ferry, auto",
            "type": "line",
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "==",
                "type",
                "ferry_auto"
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-color": "#dbdbdb",
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            7.5,
                            0
                        ],
                        [
                            8,
                            0.15
                        ],
                        [
                            16,
                            0.5
                        ]
                    ]
                },
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            1
                        ],
                        [
                            18,
                            2.5
                        ]
                    ]
                }
            }
        },
        {
            "id": "ferry-label",
            "type": "symbol",
            "source": "composite",
            "source-layer": "road_label",
            "interactive": true,
            "filter": [
                "==",
                "class",
                "ferry"
            ],
            "layout": {
                "text-field": "{name_en}",
                "visibility": "visible",
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
                "text-letter-spacing": 0.01,
                "text-line-height": 1.1,
                "text-max-width": 7,
                "symbol-placement": "line"
            },
            "paint": {
                "text-color": "hsl(230, 50%, 98%)",
                "text-opacity": 1,
                "text-halo-color": "hsl(0, 1%, 3%)",
                "text-halo-blur": 0.5,
                "text-halo-width": 1.75
            }
        },
        {
            "id": "road-link case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1459882298057.56"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "!=",
                    "type",
                    "trunk_link"
                ],
                [
                    "!in",
                    "structure",
                    "bridge",
                    "tunnel"
                ],
                [
                    "==",
                    "class",
                    "link"
                ]
            ],
            "layout": {
                "line-cap": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            "round"
                        ],
                        [
                            12,
                            "butt"
                        ]
                    ]
                },
                "line-join": "round"
            },
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            "hsl(0, 1%, 56%)"
                        ],
                        [
                            10,
                            "hsl(0, 0%, 75%)"
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            1
                        ],
                        [
                            16,
                            0
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.75
                        ],
                        [
                            20,
                            2
                        ]
                    ]
                },
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            14,
                            0.5
                        ],
                        [
                            18,
                            12
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-motorway_link-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1459882298057.56"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 10,
            "interactive": true,
            "filter": [
                "all",
                [
                    "!in",
                    "structure",
                    "bridge",
                    "tunnel"
                ],
                [
                    "==",
                    "class",
                    "motorway_link"
                ]
            ],
            "layout": {
                "line-cap": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            "round"
                        ],
                        [
                            12,
                            "butt"
                        ]
                    ]
                },
                "line-join": "round"
            },
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            9,
                            "hsl(0, 1%, 26%)"
                        ],
                        [
                            12,
                            "hsl(0, 1%, 31%)"
                        ],
                        [
                            15,
                            "hsl(0, 1%, 25%)"
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            1
                        ],
                        [
                            16,
                            0
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.5
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
                            12,
                            0.5
                        ],
                        [
                            14,
                            2
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-primary-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1459882298057.56"
            },
            "source": "composite",
            "source-layer": "road",
            "maxzoom": 15,
            "interactive": true,
            "filter": [
                "all",
                [
                    "!in",
                    "structure",
                    "bridge",
                    "tunnel"
                ],
                [
                    "==",
                    "class",
                    "primary"
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            11,
                            "hsl(0, 1%, 17%)"
                        ],
                        [
                            14,
                            "hsl(54, 2%, 53%)"
                        ],
                        [
                            18,
                            "hsl(0, 1%, 13%)"
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
                            10,
                            0.5
                        ],
                        [
                            14,
                            1
                        ],
                        [
                            16,
                            0
                        ]
                    ]
                },
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            12,
                            2
                        ],
                        [
                            18,
                            1
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
                }
            }
        },
        {
            "id": "road-trunk_link-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1459882298057.56"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "interactive": true,
            "filter": [
                "all",
                [
                    "!in",
                    "structure",
                    "bridge",
                    "tunnel"
                ],
                [
                    "==",
                    "type",
                    "trunk_link"
                ]
            ],
            "layout": {
                "line-cap": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            "round"
                        ],
                        [
                            12,
                            "butt"
                        ]
                    ]
                },
                "line-join": "round"
            },
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            9,
                            "hsl(0, 1%, 26%)"
                        ],
                        [
                            12,
                            "hsl(0, 1%, 31%)"
                        ],
                        [
                            15,
                            "hsl(0, 1%, 25%)"
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            11,
                            0.75
                        ],
                        [
                            12,
                            0.65
                        ],
                        [
                            18,
                            0
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.75
                        ],
                        [
                            14,
                            2
                        ]
                    ]
                },
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.5
                        ],
                        [
                            14,
                            2
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-trunk-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1459882298057.56"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "!in",
                    "structure",
                    "bridge",
                    "tunnel"
                ],
                [
                    "==",
                    "class",
                    "trunk"
                ]
            ],
            "layout": {
                "line-cap": {
                    "base": 1,
                    "stops": [
                        [
                            5,
                            "round"
                        ],
                        [
                            11,
                            "butt"
                        ]
                    ]
                },
                "line-join": "round"
            },
            "paint": {
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            12,
                            2
                        ],
                        [
                            18,
                            1
                        ]
                    ]
                },
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            9,
                            "hsl(0, 1%, 26%)"
                        ],
                        [
                            12,
                            "hsl(0, 1%, 31%)"
                        ]
                    ]
                },
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            18,
                            2
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            1
                        ],
                        [
                            16,
                            0
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-motorway-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1459882298057.56"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "!in",
                    "structure",
                    "bridge",
                    "tunnel"
                ],
                [
                    "==",
                    "class",
                    "motorway"
                ]
            ],
            "layout": {
                "line-cap": {
                    "base": 1,
                    "stops": [
                        [
                            5,
                            "round"
                        ],
                        [
                            11,
                            "butt"
                        ]
                    ]
                },
                "line-join": "round"
            },
            "paint": {
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            12,
                            2
                        ],
                        [
                            18,
                            1
                        ]
                    ]
                },
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            9,
                            "hsl(0, 1%, 26%)"
                        ],
                        [
                            12,
                            "hsl(0, 1%, 31%)"
                        ],
                        [
                            15,
                            "hsl(0, 1%, 25%)"
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
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            1
                        ],
                        [
                            16,
                            0
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-path",
            "type": "line",
            "metadata": {
                "mapbox:group": "1459882298057.56"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "!in",
                        "structure",
                        "bridge",
                        "tunnel"
                    ],
                    [
                        "!in",
                        "type",
                        "crossing",
                        "piste",
                        "sidewalk",
                        "steps"
                    ],
                    [
                        "==",
                        "class",
                        "path"
                    ]
                ]
            ],
            "layout": {
                "line-join": "round",
                "visibility": "none"
            },
            "paint": {
                "line-color": "hsl(0, 0%, 86%)",
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            14,
                            1
                        ],
                        [
                            18,
                            2.5
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            0.25
                        ],
                        [
                            15,
                            0.4
                        ],
                        [
                            16,
                            0.75
                        ]
                    ]
                },
                "line-dasharray": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            [
                                1,
                                0
                            ]
                        ],
                        [
                            15,
                            [
                                1.75,
                                1
                            ]
                        ],
                        [
                            16,
                            [
                                1,
                                0.75
                            ]
                        ],
                        [
                            17,
                            [
                                1,
                                0.5
                            ]
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-trunk_link",
            "metadata": {
                "mapbox:group": "1459882298057.56"
            },
            "ref": "road-trunk_link-case",
            "interactive": true,
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            "hsl(54, 48%, 49%)"
                        ],
                        [
                            18,
                            "hsl(84, 2%, 82%)"
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            1
                        ],
                        [
                            16,
                            0
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.5
                        ],
                        [
                            14,
                            2
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-motorway_link",
            "metadata": {
                "mapbox:group": "1459882298057.56"
            },
            "ref": "road-motorway_link-case",
            "interactive": true,
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            5,
                            "hsl(31, 27%, 51%)"
                        ],
                        [
                            14.5,
                            "hsl(31, 59%, 56%)"
                        ],
                        [
                            18,
                            "hsl(84, 2%, 82%)"
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            1
                        ],
                        [
                            16,
                            0
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.5
                        ],
                        [
                            14,
                            2
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-pedestrian",
            "type": "line",
            "metadata": {
                "mapbox:group": "1459882298057.56"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "==",
                        "class",
                        "pedestrian"
                    ],
                    [
                        "==",
                        "structure",
                        "none"
                    ]
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(0, 0%, 86%)",
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            14,
                            1
                        ],
                        [
                            18,
                            2.5
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            0.25
                        ],
                        [
                            15,
                            0.4
                        ],
                        [
                            16,
                            0.75
                        ]
                    ]
                },
                "line-dasharray": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            [
                                1,
                                0
                            ]
                        ],
                        [
                            15,
                            [
                                1.5,
                                1
                            ]
                        ],
                        [
                            16,
                            [
                                1,
                                2
                            ]
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-link",
            "type": "line",
            "metadata": {
                "mapbox:group": "1459882298057.56"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "!=",
                    "type",
                    "o"
                ],
                [
                    "!in",
                    "structure",
                    "bridge",
                    "tunnel"
                ],
                [
                    "==",
                    "class",
                    "link"
                ]
            ],
            "layout": {
                "line-cap": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            "round"
                        ],
                        [
                            12,
                            "butt"
                        ]
                    ]
                },
                "line-join": "round"
            },
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            "hsl(0, 1%, 56%)"
                        ],
                        [
                            10,
                            "hsl(0, 0%, 75%)"
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            1
                        ],
                        [
                            16,
                            0
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            14,
                            0.5
                        ],
                        [
                            18,
                            12
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-street_limited",
            "type": "line",
            "metadata": {
                "mapbox:group": "1459882298057.56"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "==",
                        "class",
                        "street_limited"
                    ],
                    [
                        "==",
                        "structure",
                        "none"
                    ]
                ]
            ],
            "layout": {
                "line-cap": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            "round"
                        ],
                        [
                            12,
                            "butt"
                        ]
                    ]
                },
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(0, 1%, 17%)",
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            12,
                            0
                        ],
                        [
                            14,
                            0.25
                        ],
                        [
                            16,
                            0
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            10.5,
                            0.5
                        ],
                        [
                            12,
                            4
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-street",
            "type": "line",
            "metadata": {
                "mapbox:group": "1459882298057.56"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "==",
                        "class",
                        "street"
                    ],
                    [
                        "==",
                        "structure",
                        "none"
                    ]
                ]
            ],
            "layout": {
                "line-cap": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            "round"
                        ],
                        [
                            12,
                            "butt"
                        ]
                    ]
                },
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(0, 1%, 17%)",
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            12,
                            0
                        ],
                        [
                            14,
                            0.5
                        ],
                        [
                            16,
                            0
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            10.5,
                            0.5
                        ],
                        [
                            12,
                            4
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-secondary-tertiary",
            "type": "line",
            "metadata": {
                "mapbox:group": "1459882298057.56"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "!in",
                    "structure",
                    "bridge",
                    "tunnel"
                ],
                [
                    "in",
                    "class",
                    "secondary",
                    "tertiary"
                ]
            ],
            "layout": {
                "line-cap": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            "round"
                        ],
                        [
                            12,
                            "butt"
                        ]
                    ]
                },
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(0, 1%, 17%)",
                "line-opacity": {
                    "base": 1.2,
                    "stops": [
                        [
                            11.5,
                            0
                        ],
                        [
                            12.5,
                            0.65
                        ],
                        [
                            16,
                            0
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            16,
                            2
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-primary",
            "type": "line",
            "metadata": {
                "mapbox:group": "1459882298057.56"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "!in",
                    "structure",
                    "bridge",
                    "tunnel"
                ],
                [
                    "in",
                    "class",
                    "link",
                    "primary"
                ]
            ],
            "layout": {
                "line-cap": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            "round"
                        ],
                        [
                            12,
                            "butt"
                        ]
                    ]
                },
                "line-join": "round"
            },
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            8,
                            "hsl(0, 0%, 96%)"
                        ],
                        [
                            10,
                            "hsl(0, 2%, 83%)"
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            6,
                            0.25
                        ],
                        [
                            8,
                            0.6
                        ],
                        [
                            14,
                            1
                        ],
                        [
                            16,
                            0
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            12,
                            1.75
                        ],
                        [
                            18,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-oneway-arrows-blue-minor",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1459882298057.56"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 16,
            "interactive": true,
            "filter": [
                "all",
                [
                    "!=",
                    "type",
                    "trunk_link"
                ],
                [
                    "!in",
                    "structure",
                    "bridge",
                    "tunnel"
                ],
                [
                    "==",
                    "oneway",
                    "true"
                ],
                [
                    "in",
                    "class",
                    "link",
                    "path",
                    "pedestrian",
                    "service",
                    "track"
                ]
            ],
            "layout": {
                "icon-image": {
                    "base": 1,
                    "stops": [
                        [
                            16,
                            "oneway-spaced-small"
                        ],
                        [
                            17,
                            "oneway-spaced-large"
                        ]
                    ]
                },
                "symbol-placement": "line",
                "symbol-spacing": 200,
                "icon-padding": 2,
                "icon-rotation-alignment": "map",
                "visibility": "visible"
            },
            "paint": {}
        },
        {
            "id": "road-oneway-arrows-blue-major",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1459882298057.56"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "interactive": true,
            "filter": [
                "all",
                [
                    "!=",
                    "type",
                    "trunk_link"
                ],
                [
                    "!in",
                    "structure",
                    "bridge",
                    "tunnel"
                ],
                [
                    "==",
                    "oneway",
                    "true"
                ],
                [
                    "in",
                    "class",
                    "primary",
                    "secondary",
                    "street",
                    "street_limited",
                    "tertiary"
                ]
            ],
            "layout": {
                "icon-image": {
                    "base": 1,
                    "stops": [
                        [
                            16,
                            "oneway-spaced-small"
                        ],
                        [
                            17,
                            "oneway-spaced-large"
                        ]
                    ]
                },
                "symbol-placement": "line",
                "symbol-spacing": 200,
                "icon-padding": 2,
                "icon-rotation-alignment": "map",
                "visibility": "visible"
            },
            "paint": {}
        },
        {
            "id": "road-trunk",
            "type": "line",
            "metadata": {
                "mapbox:group": "1459882298057.56"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 5,
            "interactive": true,
            "filter": [
                "all",
                [
                    "!in",
                    "structure",
                    "bridge",
                    "tunnel"
                ],
                [
                    "==",
                    "class",
                    "trunk"
                ]
            ],
            "layout": {
                "line-cap": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            "round"
                        ],
                        [
                            12,
                            "butt"
                        ]
                    ]
                },
                "line-join": "round",
                "visibility":"visible"
            },
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            "hsl(54, 59%, 54%)"
                        ],
                        [
                            18,
                            "hsl(84, 2%, 82%)"
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            1
                        ],
                        [
                            16,
                            0
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            12,
                            2
                        ],
                        [
                            18,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-motorway",
            "type": "line",
            "metadata": {
                "mapbox:group": "1459882298057.56"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "LineString"
                ],
                [
                    "all",
                    [
                        "!in",
                        "structure",
                        "bridge",
                        "tunnel"
                    ],
                    [
                        "==",
                        "class",
                        "motorway"
                    ]
                ]
            ],
            "layout": {
                "line-cap": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            "round"
                        ],
                        [
                            12,
                            "butt"
                        ]
                    ]
                },
                "line-join": "round"
            },
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            5,
                            "hsl(31, 27%, 51%)"
                        ],
                        [
                            14.5,
                            "hsl(31, 59%, 56%)"
                        ],
                        [
                            18,
                            "hsl(84, 2%, 82%)"
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            1
                        ],
                        [
                            16,
                            0
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            12,
                            2
                        ],
                        [
                            18,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "road-oneway-arrows-white",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1459882298057.56"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "interactive": true,
            "filter": [
                "all",
                [
                    "!in",
                    "type",
                    "primary_link",
                    "secondary_link",
                    "tertiary_link"
                ],
                [
                    "==",
                    "oneway",
                    "true"
                ],
                [
                    "in",
                    "class",
                    "link",
                    "motorway",
                    "motorway_link",
                    "trunk"
                ]
            ],
            "layout": {
                "icon-image": {
                    "base": 1,
                    "stops": [
                        [
                            16,
                            "oneway-spaced-small"
                        ],
                        [
                            17,
                            "oneway-spaced-large"
                        ]
                    ]
                },
                "symbol-placement": "line",
                "symbol-spacing": 200,
                "icon-padding": 2,
                "visibility": "visible"
            },
            "paint": {}
        },
        {
            "id": "bridge-primary-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1459882360129.4563"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "primary"
                ],
                [
                    "==",
                    "structure",
                    "bridge"
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            11,
                            "hsl(0, 1%, 17%)"
                        ],
                        [
                            14,
                            "hsl(54, 2%, 53%)"
                        ],
                        [
                            18,
                            "hsl(0, 1%, 13%)"
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
                            10,
                            0.5
                        ],
                        [
                            14,
                            1
                        ],
                        [
                            16,
                            0
                        ]
                    ]
                },
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            12,
                            2
                        ],
                        [
                            18,
                            1
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
                }
            }
        },
        {
            "id": "bridge-trunk_link-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1459882360129.4563"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "maxzoom": 15,
            "interactive": true,
            "filter": [
                "all",
                [
                    "!in",
                    "layer",
                    2,
                    3,
                    4,
                    5
                ],
                [
                    "==",
                    "structure",
                    "bridge"
                ],
                [
                    "==",
                    "type",
                    "trunk_link"
                ]
            ],
            "layout": {
                "line-cap": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            "round"
                        ],
                        [
                            12,
                            "butt"
                        ]
                    ]
                },
                "line-join": "round"
            },
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            9,
                            "hsl(0, 1%, 26%)"
                        ],
                        [
                            12,
                            "hsl(0, 1%, 31%)"
                        ],
                        [
                            15,
                            "hsl(0, 1%, 25%)"
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            11,
                            0.75
                        ],
                        [
                            12,
                            0.65
                        ],
                        [
                            18,
                            0
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.75
                        ],
                        [
                            14,
                            2
                        ]
                    ]
                },
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.5
                        ],
                        [
                            14,
                            2
                        ]
                    ]
                }
            }
        },
        {
            "id": "bridge-motorway_link-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1459882360129.4563"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "interactive": true,
            "filter": [
                "all",
                [
                    "!in",
                    "layer",
                    2,
                    3,
                    4,
                    5
                ],
                [
                    "==",
                    "class",
                    "motorway_link"
                ],
                [
                    "==",
                    "structure",
                    "bridge"
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            9,
                            "hsl(0, 1%, 26%)"
                        ],
                        [
                            12,
                            "hsl(0, 1%, 31%)"
                        ],
                        [
                            15,
                            "hsl(0, 1%, 25%)"
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            1
                        ],
                        [
                            16,
                            0
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.5
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
                            12,
                            0.5
                        ],
                        [
                            14,
                            2
                        ]
                    ]
                }
            }
        },
        {
            "id": "bridge-trunk-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1459882360129.4563"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "!in",
                    "layer",
                    2,
                    3,
                    4,
                    5
                ],
                [
                    "==",
                    "class",
                    "trunk"
                ],
                [
                    "==",
                    "structure",
                    "bridge"
                ]
            ],
            "layout": {
                "line-cap": {
                    "base": 1,
                    "stops": [
                        [
                            5,
                            "round"
                        ],
                        [
                            11,
                            "butt"
                        ]
                    ]
                },
                "line-join": "round"
            },
            "paint": {
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            12,
                            2
                        ],
                        [
                            18,
                            1
                        ]
                    ]
                },
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            9,
                            "hsl(0, 1%, 26%)"
                        ],
                        [
                            12,
                            "hsl(0, 1%, 31%)"
                        ]
                    ]
                },
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            18,
                            2
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            1
                        ],
                        [
                            16,
                            0
                        ]
                    ]
                }
            }
        },
        {
            "id": "bridge-motorway-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1459882360129.4563"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "!in",
                    "layer",
                    2,
                    3,
                    4,
                    5
                ],
                [
                    "==",
                    "class",
                    "motorway"
                ],
                [
                    "==",
                    "structure",
                    "bridge"
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            12,
                            2
                        ],
                        [
                            18,
                            1
                        ]
                    ]
                },
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            9,
                            "hsl(0, 1%, 26%)"
                        ],
                        [
                            12,
                            "hsl(0, 1%, 31%)"
                        ],
                        [
                            15,
                            "hsl(0, 1%, 25%)"
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
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            1
                        ],
                        [
                            16,
                            0
                        ]
                    ]
                }
            }
        },
        {
            "id": "bridge-path",
            "type": "line",
            "metadata": {
                "mapbox:group": "1459882360129.4563"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "!=",
                    "type",
                    "steps"
                ],
                [
                    "==",
                    "class",
                    "path"
                ],
                [
                    "==",
                    "structure",
                    "bridge"
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(0, 0%, 86%)",
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            14,
                            1
                        ],
                        [
                            18,
                            2.5
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            0.25
                        ],
                        [
                            15,
                            0.4
                        ],
                        [
                            16,
                            0.75
                        ]
                    ]
                },
                "line-dasharray": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            [
                                1,
                                0
                            ]
                        ],
                        [
                            15,
                            [
                                1.75,
                                1
                            ]
                        ],
                        [
                            16,
                            [
                                1,
                                0.75
                            ]
                        ],
                        [
                            17,
                            [
                                1,
                                0.5
                            ]
                        ]
                    ]
                }
            }
        },
        {
            "id": "bridge-trunk_link",
            "type": "line",
            "metadata": {
                "mapbox:group": "1459882360129.4563"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "interactive": true,
            "filter": [
                "all",
                [
                    "!in",
                    "layer",
                    2,
                    3,
                    4,
                    5
                ],
                [
                    "==",
                    "structure",
                    "bridge"
                ],
                [
                    "==",
                    "type",
                    "trunk_link"
                ]
            ],
            "layout": {
                "line-cap": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            "round"
                        ],
                        [
                            12,
                            "butt"
                        ]
                    ]
                },
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.5
                        ],
                        [
                            14,
                            2
                        ]
                    ]
                },
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            "hsl(54, 48%, 49%)"
                        ],
                        [
                            18,
                            "hsl(84, 2%, 82%)"
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            1
                        ],
                        [
                            16,
                            0
                        ]
                    ]
                }
            }
        },
        {
            "id": "bridge-motorway_link",
            "type": "line",
            "metadata": {
                "mapbox:group": "1459882360129.4563"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "interactive": true,
            "filter": [
                "all",
                [
                    "!in",
                    "layer",
                    2,
                    3,
                    4,
                    5
                ],
                [
                    "==",
                    "class",
                    "motorway_link"
                ],
                [
                    "==",
                    "structure",
                    "bridge"
                ]
            ],
            "layout": {
                "line-cap": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            "round"
                        ],
                        [
                            12,
                            "butt"
                        ]
                    ]
                },
                "line-join": "round"
            },
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            5,
                            "hsl(31, 27%, 51%)"
                        ],
                        [
                            14.5,
                            "hsl(31, 59%, 56%)"
                        ],
                        [
                            18,
                            "hsl(84, 2%, 82%)"
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            1
                        ],
                        [
                            16,
                            0
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.5
                        ],
                        [
                            14,
                            2
                        ]
                    ]
                }
            }
        },
        {
            "id": "bridge-street_limited",
            "type": "line",
            "metadata": {
                "mapbox:group": "1459882360129.4563"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "street_limited"
                ],
                [
                    "==",
                    "structure",
                    "bridge"
                ]
            ],
            "layout": {
                "line-cap": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            "round"
                        ],
                        [
                            12,
                            "butt"
                        ]
                    ]
                },
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(0, 1%, 17%)",
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            12,
                            0
                        ],
                        [
                            14,
                            0.25
                        ],
                        [
                            16,
                            0
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            10.5,
                            0.5
                        ],
                        [
                            12,
                            4
                        ]
                    ]
                }
            }
        },
        {
            "id": "bridge-street",
            "type": "line",
            "metadata": {
                "mapbox:group": "1459882360129.4563"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "street"
                ],
                [
                    "==",
                    "structure",
                    "bridge"
                ]
            ],
            "layout": {
                "line-cap": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            "round"
                        ],
                        [
                            12,
                            "butt"
                        ]
                    ]
                },
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(0, 1%, 17%)",
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            12,
                            0
                        ],
                        [
                            14,
                            0.5
                        ],
                        [
                            16,
                            0
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            10.5,
                            0.5
                        ],
                        [
                            12,
                            4
                        ]
                    ]
                }
            }
        },
        {
            "id": "bridge-secondary-tertiary",
            "type": "line",
            "metadata": {
                "mapbox:group": "1459882360129.4563"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "structure",
                    "bridge"
                ],
                [
                    "in",
                    "type",
                    "secondary",
                    "tertiary"
                ]
            ],
            "layout": {
                "line-cap": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            "round"
                        ],
                        [
                            12,
                            "butt"
                        ]
                    ]
                },
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(0, 1%, 17%)",
                "line-opacity": {
                    "base": 1.2,
                    "stops": [
                        [
                            11.5,
                            0
                        ],
                        [
                            12.5,
                            0.65
                        ],
                        [
                            16,
                            0
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            16,
                            2
                        ]
                    ]
                }
            }
        },
        {
            "id": "bridge-primary",
            "type": "line",
            "metadata": {
                "mapbox:group": "1459882360129.4563"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "primary"
                ],
                [
                    "==",
                    "structure",
                    "bridge"
                ]
            ],
            "layout": {
                "line-cap": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            "round"
                        ],
                        [
                            12,
                            "butt"
                        ]
                    ]
                },
                "line-join": "round"
            },
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            8,
                            "hsl(0, 0%, 96%)"
                        ],
                        [
                            10,
                            "hsl(0, 2%, 83%)"
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            6,
                            0.25
                        ],
                        [
                            8,
                            0.6
                        ],
                        [
                            14,
                            1
                        ],
                        [
                            16,
                            0
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            0.5
                        ],
                        [
                            12,
                            1.75
                        ],
                        [
                            18,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "bridge-oneway-arrows-blue-minor",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1459882360129.4563"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "oneway",
                    "true"
                ],
                [
                    "==",
                    "structure",
                    "bridge"
                ],
                [
                    "in",
                    "class",
                    "link",
                    "path",
                    "pedestrian",
                    "service",
                    "track"
                ]
            ],
            "layout": {
                "icon-image": {
                    "base": 1,
                    "stops": [
                        [
                            16,
                            "oneway-spaced-small"
                        ],
                        [
                            17,
                            "oneway-spaced-large"
                        ]
                    ]
                },
                "symbol-placement": "line",
                "symbol-spacing": 200,
                "icon-padding": 2,
                "icon-rotation-alignment": "map",
                "visibility": "visible"
            },
            "paint": {}
        },
        {
            "id": "bridge-oneway-arrows-blue-major",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1459882360129.4563"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 15,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "oneway",
                    "true"
                ],
                [
                    "==",
                    "structure",
                    "bridge"
                ],
                [
                    "in",
                    "class",
                    "primary",
                    "secondary",
                    "street",
                    "street_limited",
                    "tertiary"
                ]
            ],
            "layout": {
                "icon-image": {
                    "base": 1,
                    "stops": [
                        [
                            16,
                            "oneway-spaced-small"
                        ],
                        [
                            17,
                            "oneway-spaced-large"
                        ]
                    ]
                },
                "symbol-placement": "line",
                "symbol-spacing": 200,
                "icon-padding": 2,
                "icon-rotation-alignment": "map",
                "visibility": "visible"
            },
            "paint": {}
        },
        {
            "id": "bridge-trunk",
            "type": "line",
            "metadata": {
                "mapbox:group": "1459882360129.4563"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 5,
            "interactive": true,
            "filter": [
                "all",
                [
                    "!in",
                    "layer",
                    2,
                    3,
                    4,
                    5
                ],
                [
                    "==",
                    "class",
                    "trunk"
                ],
                [
                    "==",
                    "structure",
                    "bridge"
                ]
            ],
            "layout": {
                "line-cap": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            "round"
                        ],
                        [
                            12,
                            "butt"
                        ]
                    ]
                },
                "line-join": "round"
            },
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            "hsl(54, 59%, 54%)"
                        ],
                        [
                            18,
                            "hsl(84, 2%, 82%)"
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            1
                        ],
                        [
                            16,
                            0
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            12,
                            2
                        ],
                        [
                            18,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "bridge-motorway",
            "type": "line",
            "metadata": {
                "mapbox:group": "1459882360129.4563"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "all",
                    [
                        "!in",
                        "layer",
                        2,
                        3,
                        4,
                        5
                    ],
                    [
                        "==",
                        "class",
                        "motorway"
                    ],
                    [
                        "==",
                        "structure",
                        "bridge"
                    ]
                ],
                [
                    "in",
                    "$type",
                    "LineString",
                    "Point",
                    "Polygon"
                ]
            ],
            "layout": {
                "line-cap": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            "round"
                        ],
                        [
                            12,
                            "butt"
                        ]
                    ]
                },
                "line-join": "round"
            },
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            5,
                            "hsl(31, 27%, 51%)"
                        ],
                        [
                            14.5,
                            "hsl(31, 59%, 56%)"
                        ],
                        [
                            18,
                            "hsl(84, 2%, 82%)"
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            1
                        ],
                        [
                            16,
                            0
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            12,
                            2
                        ],
                        [
                            18,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "bridge-trunk_link-2-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1459882360129.4563"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 11,
            "maxzoom": 15,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "structure",
                    "bridge"
                ],
                [
                    "==",
                    "type",
                    "trunk_link"
                ],
                [
                    ">=",
                    "layer",
                    2
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            9,
                            "hsl(0, 1%, 26%)"
                        ],
                        [
                            12,
                            "hsl(0, 1%, 31%)"
                        ],
                        [
                            15,
                            "hsl(0, 1%, 25%)"
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            11,
                            0.75
                        ],
                        [
                            12,
                            0.65
                        ],
                        [
                            18,
                            0
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.75
                        ],
                        [
                            14,
                            2
                        ]
                    ]
                },
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.5
                        ],
                        [
                            14,
                            2
                        ]
                    ]
                }
            }
        },
        {
            "id": "bridge-motorway_link-2-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1459882360129.4563"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "interactive": true,
            "filter": [
                "all",
                [
                    "all",
                    [
                        "==",
                        "class",
                        "motorway_link"
                    ],
                    [
                        "==",
                        "structure",
                        "bridge"
                    ],
                    [
                        ">=",
                        "layer",
                        2
                    ]
                ],
                [
                    "in",
                    "$type",
                    "LineString",
                    "Point",
                    "Polygon"
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            9,
                            "hsl(0, 1%, 26%)"
                        ],
                        [
                            12,
                            "hsl(0, 1%, 31%)"
                        ],
                        [
                            15,
                            "hsl(0, 1%, 25%)"
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            1
                        ],
                        [
                            16,
                            0
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.5
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
                            12,
                            0.5
                        ],
                        [
                            14,
                            2
                        ]
                    ]
                }
            }
        },
        {
            "id": "bridge-trunk-2-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1459882360129.4563"
            },
            "source": "composite",
            "source-layer": "road",
            "maxzoom": 15,
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
                    "bridge"
                ],
                [
                    ">=",
                    "layer",
                    2
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
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
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            9,
                            "hsl(0, 1%, 26%)"
                        ],
                        [
                            12,
                            "hsl(0, 1%, 31%)"
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
                "line-opacity": {
                    "base": 1.2,
                    "stops": [
                        [
                            5,
                            0
                        ],
                        [
                            5.5,
                            0.5
                        ],
                        [
                            8,
                            0.85
                        ],
                        [
                            14,
                            0.2
                        ],
                        [
                            16,
                            0
                        ]
                    ]
                }
            }
        },
        {
            "id": "bridge-motorway-2-case",
            "type": "line",
            "metadata": {
                "mapbox:group": "1459882360129.4563"
            },
            "source": "composite",
            "source-layer": "road",
            "maxzoom": 15,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "motorway"
                ],
                [
                    "==",
                    "structure",
                    "bridge"
                ],
                [
                    ">=",
                    "layer",
                    2
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-gap-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            12,
                            2
                        ],
                        [
                            18,
                            1
                        ]
                    ]
                },
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            9,
                            "hsl(0, 1%, 26%)"
                        ],
                        [
                            12,
                            "hsl(0, 1%, 31%)"
                        ],
                        [
                            15,
                            "hsl(0, 1%, 25%)"
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
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            1
                        ],
                        [
                            16,
                            0
                        ]
                    ]
                }
            }
        },
        {
            "id": "bridge-trunk_link-2",
            "type": "line",
            "metadata": {
                "mapbox:group": "1459882360129.4563"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "structure",
                    "bridge"
                ],
                [
                    "==",
                    "type",
                    "trunk_link"
                ],
                [
                    ">=",
                    "layer",
                    2
                ]
            ],
            "layout": {
                "line-cap": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            "round"
                        ],
                        [
                            12,
                            "butt"
                        ]
                    ]
                },
                "line-join": "round"
            },
            "paint": {
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.5
                        ],
                        [
                            14,
                            2
                        ]
                    ]
                },
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            "hsl(54, 48%, 49%)"
                        ],
                        [
                            18,
                            "hsl(84, 2%, 82%)"
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            1
                        ],
                        [
                            16,
                            0
                        ]
                    ]
                }
            }
        },
        {
            "id": "bridge-motorway_link-2",
            "type": "line",
            "metadata": {
                "mapbox:group": "1459882360129.4563"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 13,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "class",
                    "motorway_link"
                ],
                [
                    "==",
                    "structure",
                    "bridge"
                ],
                [
                    ">=",
                    "layer",
                    2
                ]
            ],
            "layout": {
                "line-cap": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            "round"
                        ],
                        [
                            12,
                            "butt"
                        ]
                    ]
                },
                "line-join": "round"
            },
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            5,
                            "hsl(31, 27%, 51%)"
                        ],
                        [
                            14.5,
                            "hsl(31, 59%, 56%)"
                        ],
                        [
                            18,
                            "hsl(84, 2%, 82%)"
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            1
                        ],
                        [
                            16,
                            0
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            12,
                            0.5
                        ],
                        [
                            14,
                            2
                        ]
                    ]
                }
            }
        },
        {
            "id": "bridge-trunk-2",
            "type": "line",
            "metadata": {
                "mapbox:group": "1459882360129.4563"
            },
            "source": "composite",
            "source-layer": "road",
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
                    "bridge"
                ],
                [
                    ">=",
                    "layer",
                    2
                ]
            ],
            "layout": {
                "line-cap": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            "round"
                        ],
                        [
                            12,
                            "butt"
                        ]
                    ]
                },
                "line-join": "round"
            },
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            "hsl(54, 59%, 54%)"
                        ],
                        [
                            18,
                            "hsl(84, 2%, 82%)"
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            1
                        ],
                        [
                            16,
                            0
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            12,
                            2
                        ],
                        [
                            18,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "bridge-motorway-2",
            "type": "line",
            "metadata": {
                "mapbox:group": "1459882360129.4563"
            },
            "source": "composite",
            "source-layer": "road",
            "interactive": true,
            "filter": [
                "all",
                [
                    "all",
                    [
                        "==",
                        "class",
                        "motorway"
                    ],
                    [
                        "==",
                        "structure",
                        "bridge"
                    ],
                    [
                        ">=",
                        "layer",
                        2
                    ]
                ],
                [
                    "in",
                    "$type",
                    "LineString",
                    "Point",
                    "Polygon"
                ]
            ],
            "layout": {
                "line-cap": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            "round"
                        ],
                        [
                            12,
                            "butt"
                        ]
                    ]
                },
                "line-join": "round"
            },
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            5,
                            "hsl(31, 27%, 51%)"
                        ],
                        [
                            14.5,
                            "hsl(31, 59%, 56%)"
                        ],
                        [
                            18,
                            "hsl(84, 2%, 82%)"
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            1
                        ],
                        [
                            16,
                            0
                        ]
                    ]
                },
                "line-width": {
                    "base": 1.5,
                    "stops": [
                        [
                            5,
                            1
                        ],
                        [
                            12,
                            2
                        ],
                        [
                            18,
                            1
                        ]
                    ]
                }
            }
        },
        {
            "id": "bridge-oneway-arrows-white",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1459882360129.4563"
            },
            "source": "composite",
            "source-layer": "road",
            "minzoom": 16,
            "interactive": true,
            "filter": [
                "all",
                [
                    "!in",
                    "type",
                    "primary_link",
                    "secondary_link",
                    "tertiary_link"
                ],
                [
                    "==",
                    "oneway",
                    "true"
                ],
                [
                    "==",
                    "structure",
                    "bridge"
                ],
                [
                    "in",
                    "class",
                    "link",
                    "motorway",
                    "motorway_link",
                    "trunk"
                ]
            ],
            "layout": {
                "icon-image": {
                    "base": 1,
                    "stops": [
                        [
                            16,
                            "oneway-spaced-small"
                        ],
                        [
                            17,
                            "oneway-spaced-large"
                        ]
                    ]
                },
                "symbol-placement": "line",
                "symbol-spacing": 200,
                "icon-padding": 2,
                "visibility": "visible"
            },
            "paint": {}
        },
        {
            "id": "aerialway-bg",
            "type": "line",
            "source": "composite",
            "source-layer": "road",
            "minzoom": 12,
            "interactive": true,
            "filter": [
                "any",
                [
                    "==",
                    "class",
                    "aerialway"
                ],
                [
                    "==",
                    "type",
                    "piste"
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(0, 1%, 45%)",
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            12.5,
                            0
                        ],
                        [
                            14,
                            0.25
                        ],
                        [
                            16,
                            0.75
                        ]
                    ]
                },
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            0.5
                        ],
                        [
                            18,
                            2.5
                        ]
                    ]
                },
                "line-blur": 1
            }
        },
        {
            "id": "aerialway",
            "ref": "aerialway-bg",
            "interactive": true,
            "paint": {
                "line-color": "#dbdbdb",
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            12,
                            0
                        ],
                        [
                            12.5,
                            0.25
                        ],
                        [
                            16,
                            0.75
                        ]
                    ]
                },
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            1
                        ],
                        [
                            18,
                            2.5
                        ]
                    ]
                },
                "line-dasharray": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            [
                                3.5,
                                2
                            ]
                        ],
                        [
                            22,
                            [
                                2,
                                1
                            ]
                        ]
                    ]
                }
            }
        },
        {
            "id": "admin-3-4-boundaries-bg",
            "type": "line",
            "metadata": {
                "mapbox:group": "1459882330622.065"
            },
            "source": "composite",
            "source-layer": "admin",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "maritime",
                    0
                ],
                [
                    ">=",
                    "admin_level",
                    3
                ]
            ],
            "layout": {
                "line-join": "bevel"
            },
            "paint": {
                "line-color": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "hsla(93, 26%, 62%, 0.77)"
                        ],
                        [
                            6,
                            "hsla(93, 26%, 62%, 0.77)"
                        ],
                        [
                            8,
                            "hsla(93, 63%, 24%, 0.77)"
                        ]
                    ]
                },
                "line-dasharray": [
                    1,
                    0
                ],
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            4,
                            0.2
                        ],
                        [
                            8,
                            0.35
                        ]
                    ]
                },
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            2.5
                        ],
                        [
                            10,
                            4.5
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
                },
                "line-translate": [
                    0,
                    0
                ]
            }
        },
        {
            "id": "admin-2-boundaries-bg",
            "type": "line",
            "metadata": {
                "mapbox:group": "1459882330622.065"
            },
            "source": "composite",
            "source-layer": "admin",
            "minzoom": 1,
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
                ]
            ],
            "layout": {
                "line-join": "miter"
            },
            "paint": {
                "line-color": "hsla(0, 0%, 95%, 0.77)",
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            3,
                            3.5
                        ],
                        [
                            10,
                            10
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            4,
                            0.1
                        ],
                        [
                            8,
                            0.35
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
                            10,
                            2
                        ]
                    ]
                },
                "line-translate": [
                    0,
                    0
                ]
            }
        },
        {
            "id": "admin-3-4-boundaries",
            "type": "line",
            "metadata": {
                "mapbox:group": "1459882330622.065"
            },
            "source": "composite",
            "source-layer": "admin",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "maritime",
                    0
                ],
                [
                    ">=",
                    "admin_level",
                    3
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsla(0, 0%, 0%, 0.72)",
                "line-dasharray": [
                    5,
                    2.5
                ],
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            1
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
                            4,
                            1
                        ],
                        [
                            9,
                            1.75
                        ]
                    ]
                }
            }
        },
        {
            "id": "admin-2-boundaries",
            "type": "line",
            "metadata": {
                "mapbox:group": "1459882330622.065"
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
                    "disputed",
                    0
                ],
                [
                    "==",
                    "maritime",
                    0
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(0, 0%, 0%)",
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            0.5
                        ],
                        [
                            6,
                            0.75
                        ]
                    ]
                },
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            0.75
                        ],
                        [
                            4,
                            3
                        ]
                    ]
                }
            }
        },
        {
            "id": "admin-2-boundaries offset",
            "metadata": {
                "mapbox:group": "1459882330622.065"
            },
            "ref": "admin-2-boundaries",
            "interactive": true,
            "paint": {
                "line-color": "hsla(0, 5%, 92%, 0.72)",
                "line-translate": [
                    0,
                    0
                ],
                "line-width": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            0.5
                        ],
                        [
                            4,
                            0.75
                        ],
                        [
                            9,
                            1.5
                        ],
                        [
                            12,
                            2
                        ]
                    ]
                },
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            0.25
                        ],
                        [
                            4,
                            0.5
                        ],
                        [
                            8,
                            0.75
                        ]
                    ]
                },
                "line-blur": 0,
                "line-offset": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            1.5
                        ],
                        [
                            4,
                            0.75
                        ]
                    ]
                }
            }
        },
        {
            "id": "admin-2-boundaries-dispute",
            "type": "line",
            "metadata": {
                "mapbox:group": "1459882330622.065"
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
                    "disputed",
                    1
                ],
                [
                    "==",
                    "maritime",
                    0
                ]
            ],
            "layout": {
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsl(0, 0%, 0%)",
                "line-dasharray": [
                    4,
                    8
                ],
                "line-width": 0.75,
                "line-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            1
                        ],
                        [
                            12,
                            0.75
                        ],
                        [
                            16,
                            0
                        ]
                    ]
                }
            }
        },
        {
            "id": "waterway-label",
            "type": "symbol",
            "source": "composite",
            "source-layer": "waterway_label",
            "minzoom": 12,
            "interactive": true,
            "filter": [
                "in",
                "class",
                "canal",
                "river",
                "stream"
            ],
            "layout": {
                "text-field": "{name_en}",
                "text-font": [
                    "DIN Offc Pro Italic",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": "line",
                "visibility": "visible",
                "text-max-angle": 30,
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            13,
                            12
                        ],
                        [
                            18,
                            16
                        ]
                    ]
                }
            },
            "paint": {
                "text-halo-width": {
                    "base": 1,
                    "stops": [
                        [
                            12,
                            0.5
                        ],
                        [
                            14,
                            1.5
                        ]
                    ]
                },
                "text-halo-color": "hsl(0, 0%, 9%)",
                "text-color": "#75cff0",
                "text-halo-blur": 0.5
            }
        },
        {
            "id": "poi-scalerank2",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1460058190129.9705"
            },
            "source": "composite",
            "source-layer": "poi_label",
            "interactive": true,
            "filter": [
                "all",
                [
                    "!in",
                    "maki",
                    "campsite",
                    "cemetery",
                    "dog-park",
                    "garden",
                    "golf",
                    "park",
                    "picnic-site",
                    "playground",
                    "zoo"
                ],
                [
                    "<=",
                    "localrank",
                    3
                ],
                [
                    "==",
                    "scalerank",
                    2
                ]
            ],
            "layout": {
                "text-line-height": 1.1,
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            11
                        ],
                        [
                            20,
                            14
                        ]
                    ]
                },
                "icon-image": {
                    "base": 1,
                    "stops": [
                        [
                            12,
                            "{maki}-11"
                        ],
                        [
                            14,
                            "{maki}-15"
                        ]
                    ]
                },
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "text-offset": [
                    0,
                    0.65
                ],
                "text-anchor": "top",
                "text-field": "{name_en}",
                "text-letter-spacing": 0.01,
                "text-max-width": 8,
                "visibility": "visible"
            },
            "paint": {
                "text-color": "hsl(0, 0%, 92%)",
                "text-halo-color": {
                    "base": 1,
                    "stops": [
                        [
                            8,
                            "hsl(0, 1%, 10%)"
                        ],
                        [
                            16,
                            "hsl(0, 3%, 16%)"
                        ]
                    ]
                },
                "text-halo-width": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            1.25
                        ],
                        [
                            15,
                            1.5
                        ]
                    ]
                },
                "text-halo-blur": 0
            }
        },
        {
            "id": "poi-parks-scalerank2",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1460058190129.9705"
            },
            "source": "composite",
            "source-layer": "poi_label",
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "scalerank",
                    2
                ],
                [
                    "in",
                    "maki",
                    "campsite",
                    "cemetery",
                    "dog-park",
                    "garden",
                    "golf",
                    "park",
                    "picnic-site",
                    "playground",
                    "zoo"
                ]
            ],
            "layout": {
                "text-line-height": 1.1,
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            11
                        ],
                        [
                            20,
                            14
                        ]
                    ]
                },
                "icon-image": {
                    "base": 1,
                    "stops": [
                        [
                            13,
                            ""
                        ],
                        [
                            14,
                            "{maki}-15"
                        ]
                    ]
                },
                "text-font": [
                    "DIN Offc Pro Medium Italic",
                    "Arial Unicode MS Regular"
                ],
                "text-padding": 2,
                "text-offset": [
                    0,
                    0.65
                ],
                "text-rotation-alignment": "viewport",
                "text-anchor": "top",
                "text-field": "{name_en}",
                "text-letter-spacing": 0.01,
                "text-max-width": 8,
                "visibility": "visible"
            },
            "paint": {
                "text-color": "hsl(100, 50%, 60%)",
                "text-halo-width": {
                    "base": 1,
                    "stops": [
                        [
                            14,
                            1.25
                        ],
                        [
                            15,
                            1.5
                        ]
                    ]
                },
                "text-halo-blur": 0,
                "text-halo-color": {
                    "base": 1,
                    "stops": [
                        [
                            8,
                            "hsl(0, 1%, 10%)"
                        ],
                        [
                            16,
                            "hsl(0, 1%, 18%)"
                        ]
                    ]
                },
                "icon-opacity": 1
            }
        },
        {
            "id": "rail-label",
            "type": "symbol",
            "source": "composite",
            "source-layer": "rail_station_label",
            "minzoom": 12,
            "interactive": true,
            "filter": [
                "!=",
                "maki",
                "entrance"
            ],
            "layout": {
                "text-line-height": 1.1,
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
                "icon-image": "{network}",
                "symbol-spacing": 250,
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "text-offset": [
                    0,
                    0.85
                ],
                "text-rotation-alignment": "viewport",
                "text-anchor": "top",
                "text-field": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            ""
                        ],
                        [
                            13,
                            "{name_en}"
                        ]
                    ]
                },
                "text-letter-spacing": 0.01,
                "icon-padding": 0,
                "text-max-width": 7,
                "visibility": "visible"
            },
            "paint": {
                "text-color": "hsl(0, 0%, 92%)",
                "text-halo-color": "hsl(0, 0%, 25%)",
                "text-halo-width": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            0.5
                        ],
                        [
                            16,
                            1.5
                        ]
                    ]
                },
                "icon-halo-width": 4,
                "icon-halo-color": "#fff",
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
                "text-halo-blur": 0.5
            }
        },
        {
            "id": "airport-label",
            "type": "symbol",
            "source": "composite",
            "source-layer": "airport_label",
            "minzoom": 9,
            "interactive": true,
            "filter": [
                "<=",
                "scalerank",
                2
            ],
            "layout": {
                "text-line-height": 1.1,
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            12
                        ],
                        [
                            18,
                            18
                        ]
                    ]
                },
                "icon-image": {
                    "stops": [
                        [
                            12,
                            "{maki}-11"
                        ],
                        [
                            13,
                            "{maki}-15"
                        ]
                    ]
                },
                "symbol-spacing": 250,
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "text-padding": 2,
                "text-offset": [
                    0,
                    0.75
                ],
                "text-rotation-alignment": "viewport",
                "text-anchor": "top",
                "text-field": {
                    "stops": [
                        [
                            11,
                            "{ref}"
                        ],
                        [
                            12,
                            "{name_en}"
                        ]
                    ]
                },
                "text-letter-spacing": 0.01,
                "text-max-width": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            7
                        ],
                        [
                            12,
                            8
                        ],
                        [
                            16,
                            10
                        ]
                    ]
                },
                "visibility": "visible"
            },
            "paint": {
                "text-color": "hsl(0, 0%, 92%)",
                "text-halo-color": "hsl(0, 0%, 25%)",
                "text-halo-width": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            0.5
                        ],
                        [
                            16,
                            1.5
                        ]
                    ]
                },
                "text-halo-blur": 0.5,
                "icon-opacity": 0.8
            }
        },
        {
            "id": "place-islets",
            "type": "symbol",
            "source": "composite",
            "source-layer": "place_label",
            "interactive": true,
            "filter": [
                "==",
                "type",
                "islet"
            ],
            "layout": {
                "text-line-height": 1.2,
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            11
                        ],
                        [
                            18,
                            16
                        ]
                    ]
                },
                "text-max-angle": 38,
                "symbol-spacing": 250,
                "text-font": [
                    "DIN Offc Pro Regular",
                    "Arial Unicode MS Regular"
                ],
                "text-padding": 2,
                "text-offset": [
                    0,
                    0
                ],
                "text-rotation-alignment": "viewport",
                "text-field": "{name_en}",
                "text-letter-spacing": 0.01,
                "text-max-width": 8,
                "visibility": "visible"
            },
            "paint": {
                "text-color": "hsl(0, 100%, 100%)",
                "text-halo-color": {
                    "base": 1,
                    "stops": [
                        [
                            9,
                            "hsl(0, 0%, 18%)"
                        ],
                        [
                            12,
                            "hsl(0, 2%, 14%)"
                        ]
                    ]
                },
                "text-halo-width": 1,
                "text-halo-blur": 0.5
            }
        },
        {
            "id": "place-neighbourhood",
            "type": "symbol",
            "source": "composite",
            "source-layer": "place_label",
            "minzoom": 10,
            "maxzoom": 16,
            "interactive": true,
            "filter": [
                "==",
                "type",
                "neighbourhood"
            ],
            "layout": {
                "text-line-height": 1,
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            12,
                            11
                        ],
                        [
                            16,
                            16
                        ]
                    ]
                },
                "text-transform": "uppercase",
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "text-padding": 3,
                "visibility": "none",
                "text-field": "{name_en}",
                "text-letter-spacing": 0.1,
                "text-max-width": 7
            },
            "paint": {
                "text-halo-color": {
                    "base": 1,
                    "stops": [
                        [
                            9,
                            "hsl(0, 0%, 18%)"
                        ],
                        [
                            12,
                            "hsl(0, 2%, 14%)"
                        ]
                    ]
                },
                "text-halo-blur": 0.5,
                "text-color": "hsl(35, 100%, 100%)",
                "text-halo-width": 1
            }
        },
        {
            "id": "place-suburb",
            "type": "symbol",
            "source": "composite",
            "source-layer": "place_label",
            "minzoom": 10,
            "maxzoom": 16,
            "interactive": true,
            "filter": [
                "==",
                "type",
                "suburb"
            ],
            "layout": {
                "text-line-height": 1,
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            12,
                            11
                        ],
                        [
                            15,
                            18
                        ]
                    ]
                },
                "text-transform": "uppercase",
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "text-padding": 3,
                "visibility": "none",
                "text-field": "{name_en}",
                "text-letter-spacing": 0.15,
                "text-max-width": 7
            },
            "paint": {
                "text-halo-color": {
                    "base": 1,
                    "stops": [
                        [
                            9,
                            "hsl(0, 0%, 18%)"
                        ],
                        [
                            12,
                            "hsl(0, 2%, 14%)"
                        ]
                    ]
                },
                "text-halo-blur": 0.5,
                "text-color": "hsl(35, 100%, 100%)",
                "text-halo-width": 1
            }
        },
        {
            "id": "place-hamlet",
            "type": "symbol",
            "source": "composite",
            "source-layer": "place_label",
            "minzoom": 10,
            "maxzoom": 16,
            "interactive": true,
            "filter": [
                "==",
                "type",
                "hamlet"
            ],
            "layout": {
                "text-line-height": 1,
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            12,
                            11.5
                        ],
                        [
                            15,
                            16
                        ]
                    ]
                },
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "text-padding": 3,
                "text-field": "{name_en}",
                "text-letter-spacing": 0.1,
                "text-max-width": 7,
                "visibility": "visible"
            },
            "paint": {
                "text-halo-color": {
                    "base": 1,
                    "stops": [
                        [
                            9,
                            "hsl(0, 0%, 18%)"
                        ],
                        [
                            12,
                            "hsl(0, 2%, 14%)"
                        ]
                    ]
                },
                "text-halo-blur": 0.5,
                "text-color": "hsl(35, 100%, 100%)",
                "text-halo-width": 1
            }
        },
        {
            "id": "place-village",
            "type": "symbol",
            "source": "composite",
            "source-layer": "place_label",
            "minzoom": 8,
            "maxzoom": 15,
            "interactive": true,
            "filter": [
                "all",
                [
                    "<=",
                    "localrank",
                    12
                ],
                [
                    "==",
                    "type",
                    "village"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            11.5
                        ],
                        [
                            16,
                            18
                        ]
                    ]
                },
                "text-font": {
                    "base": 1,
                    "stops": [
                        [
                            5,
                            [
                                "DIN Offc Pro Regular",
                                "Arial Unicode MS Regular"
                            ]
                        ],
                        [
                            6,
                            [
                                "DIN Offc Pro Medium",
                                "Arial Unicode MS Regular"
                            ]
                        ]
                    ]
                },
                "text-offset": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            [
                                0,
                                -0.15
                            ]
                        ],
                        [
                            8,
                            [
                                0,
                                0
                            ]
                        ]
                    ]
                },
                "icon-size": 1,
                "text-anchor": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            "bottom"
                        ],
                        [
                            8,
                            "center"
                        ]
                    ]
                },
                "text-field": "{name_en}",
                "text-max-width": 7,
                "visibility": "visible"
            },
            "paint": {
                "text-color": "hsl(0, 100%, 100%)",
                "text-halo-color": {
                    "base": 1,
                    "stops": [
                        [
                            9,
                            "hsl(0, 0%, 18%)"
                        ],
                        [
                            12,
                            "hsl(0, 2%, 14%)"
                        ]
                    ]
                },
                "text-halo-width": 1,
                "icon-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            7.99,
                            0.9
                        ],
                        [
                            8,
                            0
                        ]
                    ]
                },
                "text-halo-blur": 0.5
            }
        },
        {
            "id": "place-town",
            "type": "symbol",
            "source": "composite",
            "source-layer": "place_label",
            "minzoom": 6,
            "maxzoom": 15,
            "interactive": true,
            "filter": [
                "all",
                [
                    "<=",
                    "localrank",
                    12
                ],
                [
                    "==",
                    "type",
                    "town"
                ]
            ],
            "layout": {
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
                "icon-image": "dot-9",
                "visibility": "visible",
                "text-font": {
                    "base": 1,
                    "stops": [
                        [
                            5,
                            [
                                "DIN Offc Pro Regular",
                                "Arial Unicode MS Regular"
                            ]
                        ],
                        [
                            6,
                            [
                                "DIN Offc Pro Medium",
                                "Arial Unicode MS Regular"
                            ]
                        ]
                    ]
                },
                "text-offset": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            [
                                0,
                                -0.15
                            ]
                        ],
                        [
                            8,
                            [
                                0,
                                0
                            ]
                        ]
                    ]
                },
                "icon-size": 1,
                "text-anchor": {
                    "base": 1,
                    "stops": [
                        [
                            7,
                            "bottom"
                        ],
                        [
                            8,
                            "center"
                        ]
                    ]
                },
                "text-field": "{name_en}",
                "text-max-width": 7
            },
            "paint": {
                "text-color": "hsl(0, 100%, 100%)",
                "text-halo-color": {
                    "base": 1,
                    "stops": [
                        [
                            9,
                            "hsl(0, 0%, 18%)"
                        ],
                        [
                            12,
                            "hsl(0, 2%, 14%)"
                        ]
                    ]
                },
                "text-halo-width": 1,
                "icon-opacity": {
                    "base": 1,
                    "stops": [
                        [
                            7.99,
                            0.9
                        ],
                        [
                            8,
                            0
                        ]
                    ]
                },
                "text-halo-blur": 0.5
            }
        },
        {
            "id": "place-islands",
            "type": "symbol",
            "source": "composite",
            "source-layer": "place_label",
            "interactive": true,
            "filter": [
                "==",
                "type",
                "island"
            ],
            "layout": {
                "text-line-height": 1.2,
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            10,
                            11
                        ],
                        [
                            18,
                            16
                        ]
                    ]
                },
                "text-max-angle": 38,
                "symbol-spacing": 250,
                "text-font": [
                    "DIN Offc Pro Regular",
                    "Arial Unicode MS Regular"
                ],
                "text-padding": 2,
                "text-offset": [
                    0,
                    0
                ],
                "text-rotation-alignment": "viewport",
                "text-field": "{name_en}",
                "text-letter-spacing": 0.01,
                "text-max-width": 7,
                "visibility": "visible"
            },
            "paint": {
                "text-color": "hsl(0, 100%, 100%)",
                "text-halo-color": {
                    "base": 1,
                    "stops": [
                        [
                            9,
                            "hsl(0, 0%, 18%)"
                        ],
                        [
                            12,
                            "hsl(0, 2%, 14%)"
                        ]
                    ]
                },
                "text-halo-width": 1,
                "text-halo-blur": 0.5
            }
        },
        {
            "id": "marine-label-sm-ln",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1459802922547.9956"
            },
            "source": "composite",
            "source-layer": "marine_label",
            "minzoom": 3,
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
                    ">=",
                    "labelrank",
                    4
                ]
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
                "text-field": "{name_en}",
                "text-letter-spacing": 0.1,
                "text-max-width": 5,
                "visibility": "visible"
            },
            "paint": {
                "text-color": "hsl(224, 29%, 40%)"
            }
        },
        {
            "id": "marine-label-sm-pt",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1459802922547.9956"
            },
            "source": "composite",
            "source-layer": "marine_label",
            "minzoom": 3,
            "maxzoom": 10,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "$type",
                    "Point"
                ],
                [
                    ">=",
                    "labelrank",
                    4
                ]
            ],
            "layout": {
                "text-field": "{name_en}",
                "visibility": "visible",
                "text-max-width": 5,
                "text-letter-spacing": 0.1,
                "text-line-height": 1.5,
                "text-font": [
                    "DIN Offc Pro Italic",
                    "Arial Unicode MS Regular"
                ],
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
                }
            },
            "paint": {
                "text-color": "hsl(224, 29%, 40%)"
            }
        },
        {
            "id": "marine-label-md-ln",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1459802922547.9956"
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
                    "LineString"
                ],
                [
                    "in",
                    "labelrank",
                    2,
                    3
                ]
            ],
            "layout": {
                "text-line-height": 1.1,
                "text-size": {
                    "base": 1.1,
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
                "symbol-spacing": 250,
                "text-font": [
                    "DIN Offc Pro Italic",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": "line",
                "text-field": "{name_en}",
                "text-letter-spacing": 0.15,
                "text-max-width": 5,
                "visibility": "visible"
            },
            "paint": {
                "text-color": "hsl(224, 29%, 40%)"
            }
        },
        {
            "id": "marine-label-md-pt",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1459802922547.9956"
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
                    2,
                    3
                ]
            ],
            "layout": {
                "text-field": "{name_en}",
                "text-max-width": 5,
                "text-letter-spacing": 0.15,
                "text-line-height": 1.5,
                "text-font": [
                    "DIN Offc Pro Italic",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 1.1,
                    "stops": [
                        [
                            2,
                            14
                        ],
                        [
                            5,
                            20
                        ]
                    ]
                },
                "visibility": "visible"
            },
            "paint": {
                "text-color": "hsl(224, 29%, 40%)"
            }
        },
        {
            "id": "marine-label-lg-ln",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1459802922547.9956"
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
                    "LineString"
                ],
                [
                    "==",
                    "labelrank",
                    1
                ]
            ],
            "layout": {
                "text-field": "{name_en}",
                "text-max-width": 4,
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
                "text-line-height": 1.1,
                "symbol-placement": "line",
                "text-font": [
                    "DIN Offc Pro Italic",
                    "Arial Unicode MS Regular"
                ],
                "text-letter-spacing": 0.25,
                "visibility": "visible"
            },
            "paint": {
                "text-color": "hsl(224, 29%, 40%)"
            }
        },
        {
            "id": "marine-label-lg-pt",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1459802922547.9956"
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
                "text-field": "{name_en}",
                "text-max-width": 4,
                "text-letter-spacing": 0.25,
                "text-line-height": 1.5,
                "text-font": [
                    "DIN Offc Pro Italic",
                    "Arial Unicode MS Regular"
                ],
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
                "visibility": "visible"
            },
            "paint": {
                "text-color": "hsl(224, 29%, 40%)"
            }
        },
        {
            "id": "state-label-sm",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1459802933574.639"
            },
            "source": "composite",
            "source-layer": "state_label",
            "minzoom": 3,
            "maxzoom": 9,
            "interactive": true,
            "filter": [
                "<",
                "area",
                20000
            ],
            "layout": {
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            6,
                            10
                        ],
                        [
                            9,
                            14
                        ]
                    ]
                },
                "text-transform": "uppercase",
                "text-font": [
                    "DIN Offc Pro Bold",
                    "Arial Unicode MS Bold"
                ],
                "text-field": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "{abbr}"
                        ],
                        [
                            6,
                            "{name_en}"
                        ]
                    ]
                },
                "text-letter-spacing": 0.15,
                "text-max-width": 5,
                "visibility": "visible"
            },
            "paint": {
                "text-color": "hsl(0, 0%, 100%)",
                "text-halo-color": "hsl(224, 2%, 18%)",
                "text-halo-width": 1,
                "text-opacity": 1
            }
        },
        {
            "id": "state-label-md",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1459802933574.639"
            },
            "source": "composite",
            "source-layer": "state_label",
            "minzoom": 3,
            "maxzoom": 8,
            "interactive": true,
            "filter": [
                "all",
                [
                    "<",
                    "area",
                    80000
                ],
                [
                    ">=",
                    "area",
                    20000
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            5,
                            10
                        ],
                        [
                            8,
                            16
                        ]
                    ]
                },
                "text-transform": "uppercase",
                "text-font": [
                    "DIN Offc Pro Bold",
                    "Arial Unicode MS Bold"
                ],
                "text-field": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "{abbr}"
                        ],
                        [
                            5,
                            "{name_en}"
                        ]
                    ]
                },
                "text-letter-spacing": 0.15,
                "text-max-width": 6,
                "visibility": "visible"
            },
            "paint": {
                "text-color": "hsl(0, 0%, 100%)",
                "text-halo-color": "hsl(224, 2%, 18%)",
                "text-halo-width": 2
            }
        },
        {
            "id": "state-label-lg",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1459802933574.639"
            },
            "source": "composite",
            "source-layer": "state_label",
            "minzoom": 3,
            "maxzoom": 7,
            "interactive": true,
            "filter": [
                ">=",
                "area",
                80000
            ],
            "layout": {
                "text-size": {
                    "base": 1,
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
                "text-font": [
                    "DIN Offc Pro Bold",
                    "Arial Unicode MS Bold"
                ],
                "text-padding": 1,
                "text-field": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "{abbr}"
                        ],
                        [
                            4,
                            "{name_en}"
                        ]
                    ]
                },
                "text-letter-spacing": 0.15,
                "text-max-width": 6,
                "visibility": "visible"
            },
            "paint": {
                "text-color": "hsl(0, 0%, 100%)",
                "text-halo-color": "hsl(224, 2%, 18%)",
                "text-opacity": 1,
                "text-halo-width": 2
            }
        },
        {
            "id": "country-label-sm",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1459802941943.712"
            },
            "source": "composite",
            "source-layer": "country_label",
            "minzoom": 1,
            "maxzoom": 10,
            "interactive": true,
            "filter": [
                ">=",
                "scalerank",
                5
            ],
            "layout": {
                "text-field": "{name_en}",
                "text-max-width": 6,
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
                },
                "visibility": "visible"
            },
            "paint": {
                "text-color": "hsl(0, 0%, 100%)",
                "text-halo-color": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "hsl(224, 2%, 18%)"
                        ],
                        [
                            4,
                            "hsl(224, 1%, 12%)"
                        ],
                        [
                            8,
                            "hsl(224, 1%, 2%)"
                        ]
                    ]
                },
                "text-halo-width": 1.25
            }
        },
        {
            "id": "country-label-md",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1459802941943.712"
            },
            "source": "composite",
            "source-layer": "country_label",
            "minzoom": 1,
            "maxzoom": 8,
            "interactive": true,
            "filter": [
                "in",
                "scalerank",
                3,
                4
            ],
            "layout": {
                "visibility":"visible",
                "text-field": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "{code}"
                        ],
                        [
                            2,
                            "{name_en}"
                        ]
                    ]
                },
                "text-max-width": 6,
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
                "text-color": "hsl(0, 0%, 100%)",
                "text-halo-color": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "hsl(224, 2%, 18%)"
                        ],
                        [
                            4,
                            "hsl(224, 1%, 12%)"
                        ],
                        [
                            8,
                            "hsl(224, 1%, 2%)"
                        ]
                    ]
                },
                "text-halo-width": 1.25
            }
        },
        {
            "id": "country-label-lg",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1459802941943.712"
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
                "visibility":"visible",
                "text-field": "{name}",
                "text-max-width": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            5
                        ],
                        [
                            3,
                            6
                        ]
                    ]
                },
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
                "text-halo-color": {
                    "base": 1,
                    "stops": [
                        [
                            0,
                            "hsl(224, 2%, 18%)"
                        ],
                        [
                            4,
                            "hsl(224, 1%, 12%)"
                        ],
                        [
                            8,
                            "hsl(224, 1%, 2%)"
                        ]
                    ]
                },
                "text-halo-width": 1.25,
                "text-color": "hsl(0, 0%, 100%)"
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
                "visibility": "none"
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
                "visibility": "none"
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
                "visibility": "none"
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
                "visibility": "none"
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
                "visibility": "none"
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
                "visibility": "none"
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
                "visibility": "none"
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
                "visibility": "none"
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
                "visibility": "none"
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
                "visibility": "none"
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
                "visibility": "none"
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
                "visibility": "none"
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
                "visibility": "none"
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
                "visibility": "none"
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
                "visibility": "none"
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
                "visibility": "none"
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
                "visibility": "none"
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
                "visibility": "none",
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
                "visibility": "none"
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
                "visibility": "none"
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
                "visibility": "none"
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
                "visibility": "none"
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
                "visibility": "none"
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
                "visibility": "none"
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
                "visibility": "none"
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
                "visibility": "none"
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
                "visibility": "none"
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
            "layout": {
                "visibility": "none"
            },
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
                "visibility": "none"
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
                "visibility": "none"
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
                "visibility": "none"
            },
            "paint": {
                "fill-color": "hsla(202, 7%, 78%, 0.5)",
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
                10,
                5
            ],
            "layout": {
                "visibility": "none"
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
                10,
                5
            ],
            "layout": {
                "visibility": "none"
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
                10,
                5
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
                "visibility": "none",
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
                "fill-color": "hsla(208, 88%, 84%, 0.5)"
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
                "line-color": "hsla(209, 81%, 74%, 0.5)",
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
                "visibility": "none"
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
                "visibility": "none"
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
                "fill-color": "hsla(0, 0%, 100%, 0.15)",
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
                "visibility": "none",
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
                "line-opacity": 0.8,
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
                "visibility": "none",
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
                    "medium",
                    "U"
                ],
                [
                    "==",
                    "vnr_vegkategori",
                    "F"
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
                    "!=",
                    "komm",
                    "0301"
                ],
                [
                    "==",
                    "medium",
                    "U"
                ],
                [
                    "==",
                    "vnr_vegkategori",
                    "R"
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
                    "komm",
                    "0301"
                ],
                [
                    "==",
                    "medium",
                    "U"
                ],
                [
                    "==",
                    "vnr_vegkategori",
                    "R"
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
                    "komm",
                    "0301"
                ],
                [
                    "==",
                    "medium",
                    "U"
                ],
                [
                    "==",
                    "vnr_vegkategori",
                    "E"
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
                    "!=",
                    "komm",
                    "0301"
                ],
                [
                    "==",
                    "medium",
                    "U"
                ],
                [
                    "==",
                    "vnr_vegkategori",
                    "E"
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
                    "medium",
                    "T"
                ],
                [
                    "==",
                    "vnr_vegkategori",
                    "F"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "hsla(0, 0%, 42%, 0.5)",
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
                "line-color": "hsla(0, 0%, 50%, 0.5)",
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
                "line-color": "hsla(0, 0%, 100%, 0.5)"
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
                    "B",
                    "L",
                    "T"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "hsla(120, 1%, 60%, 0.3)",
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
                "line-opacity": 1
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
                    "B",
                    "L",
                    "T"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "visibility": "visible",
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsla(0, 0%, 50%, 0.2)",
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
                    "B",
                    "L",
                    "T"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "visibility": "visible",
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsla(0, 0%, 50%, 0.5)",
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
                    "medium",
                    "T"
                ],
                [
                    "==",
                    "vnr_vegkategori",
                    "E"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "visibility": "visible",
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsla(0, 0%, 58%, 0.3)",
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
                    "medium",
                    "U"
                ],
                [
                    "==",
                    "vnr_vegkategori",
                    "F"
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
                    "!=",
                    "komm",
                    "0301"
                ],
                [
                    "==",
                    "medium",
                    "U"
                ],
                [
                    "==",
                    "vnr_vegkategori",
                    "R"
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
                    "komm",
                    "0301"
                ],
                [
                    "==",
                    "medium",
                    "U"
                ],
                [
                    "==",
                    "vnr_vegkategori",
                    "R"
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
                "line-color": "hsla(53, 100%, 77%, 0.15)",
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
                "line-color": "hsla(53, 100%, 77%, 0.5)",
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
                    "medium",
                    "L"
                ],
                [
                    "==",
                    "vnr_vegkategori",
                    "E"
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
                    "medium",
                    "L"
                ],
                [
                    "==",
                    "vnr_vegkategori",
                    "E"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "hsla(53, 79%, 62%, 0.5)",
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
                    "L",
                    "T"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "visibility": "visible",
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsla(0, 0%, 100%, 0.2)",
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
                    "L",
                    "T"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "visibility": "visible",
                "line-join": "round"
            },
            "paint": {
                "line-color": "hsla(0, 0%, 100%, 0.5)",
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
                    "medium",
                    "T"
                ],
                [
                    "==",
                    "vnr_vegkategori",
                    "F"
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
                            "hsla(0, 100%, 88%, 0.5)"
                        ],
                        [
                            8,
                            "hsla(0, 100%, 94%, 0.5)"
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
                    "L",
                    "T"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "hsla(0, 91%, 78%, 0.3)",
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
                    "!=",
                    "medium",
                    "U"
                ],
                [
                    "==",
                    "vnr_vegkategori",
                    "E"
                ]
            ],
            "layout": {
                "line-cap": "round",
                "line-join": "round",
                "visibility": "visible"
            },
            "paint": {
                "line-color": "hsla(53, 79%, 62%, 0.5)",
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
                "fill-color": "hsla(53, 100%, 77%, 0.5)"
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
                "fill-color": "hsla(53, 79%, 62%, 0.15)"
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
                "fill-color": "hsla(0, 0%, 100%, 0.15)"
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
                "fill-color": "hsla(0, 0%, 100%, 0.15)"
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
                "fill-color": "hsla(15, 66%, 86%, 0.15)"
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
                    "!=",
                    "medium",
                    "T"
                ],
                [
                    "==",
                    "vnr_vegkategori",
                    "R"
                ]
            ],
            "layout": {
                "visibility": "visible"
            },
            "paint": {
                "fill-color": "hsla(0, 60%, 73%, 0.33)"
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
                "fill-color": "hsla(0, 0%, 100%, 0.5)"
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
                "visibility": "none"
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
        {
            "id": "fkb-parkeringsomraadeavgrensning",
            "type": "line",
            "metadata": {
                "mapbox:group": "1451981488150.5059"
            },
            "source": "composite",
            "source-layer": "fkb_parkeringsomraadeavgrensning",
            "minzoom": 15,
            "interactive": true,
            "layout": {
                "visibility": "none",
                "line-cap": "round",
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
                "line-opacity": 0.7
            }
        },
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
                "line-color": "hsla(0, 0%, 59%, 0.15)"
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
                "fill-color": "hsl(0, 0%, 100%)",
                "fill-outline-color": "#fefefe",
                "fill-opacity": 0.15
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
                "J",
                "S",
                "T"
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
                "J",
                "T"
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
                "fill-color": "hsla(0, 0%, 100%, 0.15)"
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
                "fill-color": "hsla(15, 66%, 86%, 0.15)"
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
                "fill-color": "hsla(0, 0%, 100%, 0.14)"
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
                "fill-color": "hsla(53, 79%, 62%, 0.15)"
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
                "line-color": "hsla(0, 0%, 50%, 0.5)",
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
                "visibility": "none"
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
                "visibility": "none"
            },
            "paint": {
                "fill-color": "hsla(202, 7%, 78%, 0.2)"
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
                "visibility": "none"
            },
            "paint": {
                "fill-color": "hsla(202, 7%, 78%, 0.5)"
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
                "visibility": "none"
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
                "visibility": "none"
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
                "visibility": "none"
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
                "visibility": "none"
            },
            "paint": {
                "fill-color": "#c3c8cb"
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
                "line-color": "hsla(218, 4%, 60%, 0.5)",
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
                "line-color": "hsla(218, 4%, 60%, 0.5)",
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
                "visibility": "none"
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
                    "==",
                    "type",
                    "platform"
                ],
                [
                    "in",
                    "$type",
                    "LineString",
                    "Point",
                    "Polygon"
                ]
            ],
            "layout": {
                "visibility": "none"
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
                "line-color": "hsla(36, 91%, 57%, 0.5)",
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
        {
            "id": "wam-teig",
            "type": "line",
            "source": "composite",
            "source-layer": "WAM_Teig",
            "minzoom": 16,
            "interactive": true,
            "layout": {
                "visibility": "none"
            },
            "paint": {
                "line-color": "#f20a0a",
                "line-width": 0.6,
                "line-opacity": 0.5
            }
        },
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
                "text-anchor": "top",
                "text-offset": [
                    0,
                    0.85
                ],
                "text-transform": "uppercase",
                "visibility": "visible"
            },
            "paint": {
                "text-color": "#fff",
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
                "text-halo-color": "#00f",
                "text-halo-width": 1,
                "text-halo-blur": 0.5
            }
        },
        {
            "id": "fkb-presstedsnavn-84(Øy)",
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
                    "==",
                    "navntype",
                    84
                ],
                [
                    "in",
                    "$type",
                    "LineString",
                    "Point"
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
                "text-color": "#fff",
                "text-halo-color": "#00000f",
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
                    "82",
                    "83"
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
                "text-color": "#fff",
                "text-halo-color": "#5b5bcf",
                "text-halo-blur": 0.25,
                "text-halo-width": 1.25
            }
        },
        {
            "id": "Skrivemaate_xyzvann_32 copy",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1460452470657.2046"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 12,
            "maxzoom": 18,
            "interactive": true,
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
                            11
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
                "visibility": "none",
                "text-rotation-alignment": "map",
                "text-anchor": "center",
                "text-field": "{streng}"
            },
            "paint": {
                "text-color": "hsl(1, 80%, 41%)",
                "text-opacity": 1,
                "text-halo-color": "#fff",
                "text-halo-width": 1,
                "text-halo-blur": 1
            }
        },
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
                "text-halo-color": "#096dd7",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "#fff",
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
                    "E134",
                    "E14",
                    "E16",
                    "E18",
                    "E39",
                    "E45",
                    "E6"
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
        {
            "id": "Vegskilt_Europaveg",
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
                    "==",
                    "shield",
                    "e-road"
                ],
                [
                    "in",
                    "ref",
                    "E134",
                    "E14",
                    "E16",
                    "E18",
                    "E39",
                    "E4",
                    "E45",
                    "E6"
                ]
            ],
            "layout": {
                "text-size": 10,
                "text-allow-overlap": false,
                "icon-image": "europavegskilt-2",
                "icon-rotation-alignment": "viewport",
                "icon-keep-upright": true,
                "text-font": [
                    "Open Sans Bold",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": "point",
                "text-padding": 50,
                "visibility": "none",
                "text-rotation-alignment": "viewport",
                "text-keep-upright": true,
                "text-field": "{ref}"
            },
            "paint": {
                "text-color": "rgba(255,255,255,1)",
                "text-halo-width": 0,
                "text-opacity": 1
            }
        },
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
                    "<",
                    "reflen",
                    6
                ],
                [
                    "in",
                    "shield",
                    "at-expressway",
                    "e-road"
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
                "street",
                "street_limited"
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
                "text-color": "hsl(0, 0%, 100%)",
                "text-halo-color": "hsla(30, 4%, 22%, 0.7)",
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
                "primary",
                "secondary",
                "tertiary",
                "trunk"
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
                "text-color": "#fff",
                "text-halo-color": "#3a3836",
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
                "main",
                "motorway"
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
                "text-color": "#fff",
                "text-halo-color": "hsl(0, 0%, 4%)",
                "text-halo-width": 0.5,
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
                "text-color": "#fff",
                "text-halo-color": "#c20808",
                "text-halo-width": 0.25,
                "text-halo-blur": 0.25
            }
        },
        {
            "id": "fkb-presstedsnavn-170",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743171666.8916"
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
                "text-halo-color": "#000",
                "text-halo-width": 1.25,
                "text-halo-blur": 0.25,
                "text-color": "#fff"
            }
        },
        {
            "id": "fkb-presstedsnavn-101",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743171666.8916"
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
                "text-halo-color": "#000",
                "text-halo-width": 1.25,
                "text-halo-blur": 0.25,
                "text-color": "#fff"
            }
        },
        {
            "id": "fkb-presstedsnavn-206",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743171666.8916"
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
                "text-halo-color": "#000",
                "text-halo-width": 1.25,
                "text-halo-blur": 0.25,
                "text-color": "#fff"
            }
        },
        {
            "id": "fkb-presstedsnavn-72",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743171666.8916"
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
                "mapbox:group": "1466743171666.8916"
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
                "text-halo-color": "#612700",
                "text-halo-width": 1.25,
                "text-halo-blur": 0.25,
                "text-color": "#fff"
            }
        },
        {
            "id": "fkb-presstedsnavn-",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743171666.8916"
            },
            "source": "composite",
            "source-layer": "FKB_PresStedsnavn",
            "minzoom": 10,
            "interactive": true,
            "filter": [
                "in",
                "$type",
                "LineString",
                "Point",
                "Polygon"
            ],
            "layout": {
                "visibility": "none",
                "text-field": "{streng}"
            },
            "paint": {
                "text-color": "hsl(0, 94%, 50%)"
            }
        },
        {
            "id": "fkb-presstedsnavn-vann",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743171666.8916"
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
                "text-halo-blur": 0.25,
                "text-halo-color": "#5b5bcf",
                "text-halo-width": 1.25,
                "text-color": "#fff"
            }
        },
        {
            "id": "fkb-presstedsnavn-bydel",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743171666.8916"
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
                "text-color": "#fff",
                "text-halo-color": "#212121",
                "text-halo-width": 1.25,
                "text-halo-blur": 0.25,
                "text-opacity": 0.85
            }
        },
        {
            "id": "fkb-presannentekst-linje",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743171666.8916"
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
                "mapbox:group": "1466743148509.6196"
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
                "text-halo-color": "#212121",
                "text-color": "#fff",
                "text-opacity": 1
            }
        },
        {
            "id": "Skrivemaate_123+162",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
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
        {
            "id": "Skrivemaate_Txxx",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 7,
            "interactive": true,
            "filter": [
                "==",
                "$type",
                "Point"
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
                "visibility": "none",
                "text-rotation-alignment": "map",
                "text-anchor": "center",
                "text-field": "{streng}"
            },
            "paint": {
                "text-halo-width": 1,
                "text-halo-blur": 0.5,
                "text-halo-color": "#fff",
                "text-color": "hsl(0, 91%, 67%)",
                "text-opacity": 0.85
            }
        },
        {
            "id": "Skrivemaate_161",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 9,
            "maxzoom": 15,
            "interactive": true,
            "filter": [
                "==",
                "ptema",
                "161"
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
                            12,
                            12
                        ]
                    ]
                },
                "text-allow-overlap": false,
                "text-font": [
                    "DIN Offc Pro Medium Italic",
                    "Arial Unicode MS Regular"
                ],
                "text-justify": "left",
                "text-padding": 5,
                "visibility": "none",
                "text-rotation-alignment": "map",
                "text-anchor": "center",
                "text-field": "{streng}"
            },
            "paint": {
                "text-halo-width": 1,
                "text-halo-blur": 0,
                "text-halo-color": "#fff",
                "text-color": "#323232"
            }
        },
        {
            "id": "Skrivemaate_235+72",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
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
                "text-halo-color": "#636363",
                "text-color": "#fff"
            }
        },
        {
            "id": "Skrivemaate_50",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
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
                "mapbox:group": "1466743148509.6196"
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
                "text-halo-color": "#393737",
                "text-color": "#fff",
                "text-opacity": 0.85
            }
        },
        {
            "id": "Skrivemaate_idrettsanlegg",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
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
                "text-halo-color": "#090606",
                "text-color": "#fff",
                "text-opacity": 0.85
            }
        },
        {
            "id": "Skrivemaate_246(Skog)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
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
                "text-halo-color": "#073b07",
                "text-color": "#fff"
            }
        },
        {
            "id": "skrivemaate_267(Sportsstue)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
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
                "text-color": "#fff",
                "text-halo-color": "#000",
                "text-halo-width": 1,
                "text-halo-blur": 0.25
            }
        },
        {
            "id": "Skrivemaate_182",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
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
                "text-halo-color": "#212121",
                "text-color": "#fff",
                "text-opacity": 1
            }
        },
        {
            "id": "Skrivemaate_104",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
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
                "text-halo-color": "#1a1a1a",
                "text-color": "#fff",
                "text-halo-blur": 0.5
            }
        },
        {
            "id": "Skrivemaate_103",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
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
                "text-halo-color": "#1a1a1a",
                "text-color": "#fff",
                "text-halo-blur": 0.5
            }
        },
        {
            "id": "Skrivemaate_102",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
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
                "text-halo-color": "#1a1a1a",
                "text-color": "#fff",
                "text-halo-blur": 0.5
            }
        },
        {
            "id": "skrivemaate_108-110",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 13,
            "interactive": true,
            "filter": [
                "in",
                "ptema",
                "108",
                "109",
                "110"
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
                            10,
                            10
                        ],
                        [
                            12,
                            12
                        ]
                    ]
                },
                "visibility": "none"
            },
            "paint": {
                "text-color": "#323232",
                "text-halo-color": "#fff",
                "text-halo-width": 1
            }
        },
        {
            "id": "Skrivemaate_101",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 8,
            "maxzoom": 13,
            "interactive": true,
            "filter": [
                "==",
                "ptema",
                "101"
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
                            15
                        ]
                    ]
                },
                "text-allow-overlap": false,
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "text-justify": "left",
                "text-padding": 10,
                "visibility": "none",
                "text-rotation-alignment": "map",
                "text-anchor": "center",
                "text-field": "{streng}"
            },
            "paint": {
                "text-halo-width": 1.25,
                "text-halo-blur": 0.5,
                "text-halo-color": "#fff",
                "text-color": "#000",
                "text-opacity": 0.85
            }
        },
        {
            "id": "Skrivemaate_100",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 6,
            "maxzoom": 12,
            "interactive": true,
            "filter": [
                "all",
                [
                    "!=",
                    "streng",
                    "Oslo"
                ],
                [
                    "==",
                    "ptema",
                    "100"
                ]
            ],
            "layout": {
                "text-size": {
                    "base": 0.9,
                    "stops": [
                        [
                            7,
                            12
                        ],
                        [
                            10,
                            18
                        ]
                    ]
                },
                "text-allow-overlap": false,
                "icon-image": "dot-9",
                "icon-rotation-alignment": "viewport",
                "symbol-avoid-edges": false,
                "text-transform": "none",
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "visibility": "none",
                "text-rotation-alignment": "viewport",
                "text-anchor": "bottom",
                "text-field": "{streng}"
            },
            "paint": {
                "text-halo-color": "#fff",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "#000",
                "text-opacity": 0.85
            }
        },
        {
            "id": "Skrivemaate_Trikk_Bane",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 9,
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
                    "219"
                ]
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
                "symbol-placement": "point",
                "text-justify": "left",
                "text-padding": 1,
                "visibility": "none",
                "text-rotation-alignment": "map",
                "text-anchor": "center",
                "text-field": "{streng}"
            },
            "paint": {
                "text-halo-width": 1,
                "text-halo-blur": 0.5,
                "text-halo-color": "#fff",
                "text-color": "hsl(0, 91%, 67%)",
                "text-opacity": 0.85
            }
        },
        {
            "id": "Skrivemaate_punkt",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 5,
            "maxzoom": 15,
            "interactive": true,
            "filter": [
                "in",
                "$type",
                "LineString",
                "Point",
                "Polygon"
            ],
            "layout": {
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            6,
                            10
                        ],
                        [
                            14,
                            15
                        ]
                    ]
                },
                "text-allow-overlap": true,
                "symbol-avoid-edges": false,
                "text-ignore-placement": false,
                "text-transform": "none",
                "text-font": [
                    "DIN Offc Pro Cond",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": "point",
                "text-justify": "center",
                "visibility": "none",
                "text-rotation-alignment": "map",
                "text-anchor": "center",
                "text-keep-upright": true,
                "text-field": "{streng}"
            },
            "paint": {
                "text-halo-color": "#fff",
                "text-color": "hsl(0, 91%, 55%)",
                "text-halo-width": 1
            }
        },
        {
            "id": "Skrivemaate_187",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 8,
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
                    "187"
                ]
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
                "text-color": "rgba(37,99,1,1)",
                "text-opacity": 1
            }
        },
        {
            "id": "Skrivemaate_100(Oslo)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 10,
            "maxzoom": 15,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "ptema",
                    "100"
                ],
                [
                    "==",
                    "streng",
                    "Oslo"
                ]
            ],
            "layout": {
                "visibility": "none",
                "text-field": "{streng}",
                "text-font": [
                    "DIN Offc Pro Bold",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 0.9,
                    "stops": [
                        [
                            4,
                            13
                        ],
                        [
                            6,
                            16
                        ]
                    ]
                },
                "text-transform": "none",
                "icon-image": "dot-9",
                "text-anchor": "top"
            },
            "paint": {
                "text-halo-color": "#fff",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "rgba(20,20,20,1)"
            }
        },
        {
            "id": "Skrivemaate_9004(Høyde_Vann)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
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
                "text-color": "#fff",
                "text-halo-width": 0.75,
                "text-halo-color": "#2a1bd0",
                "text-halo-blur": 0.25,
                "text-opacity": 1
            }
        },
        {
            "id": "Skrivemaate_9002(Høyde_Ås)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
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
                "text-color": "#fff",
                "text-halo-width": 1,
                "text-halo-color": "#612700",
                "text-halo-blur": 0.25,
                "text-opacity": 1
            }
        },
        {
            "id": "Skrivemaate_10(Fjell)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
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
                "mapbox:group": "1466743148509.6196"
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
                "text-halo-color": "#000",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "#fff",
                "text-opacity": 0.7
            }
        },
        {
            "id": "Skrivemaate_6(Fjell) copy",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
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
                "text-halo-color": "#000",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "#fff",
                "text-opacity": 1
            }
        },
        {
            "id": "Skrivemaate_alle",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 8,
            "maxzoom": 12,
            "interactive": true,
            "layout": {
                "visibility": "none",
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
                "text-color": "hsl(0, 96%, 49%)",
                "text-opacity": 0.75
            }
        },
        {
            "id": "Skrivemaate-80_89(Øy)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 13,
            "maxzoom": 14,
            "interactive": true,
            "filter": [
                "all",
                [
                    "!in",
                    "ptema",
                    "82",
                    "83",
                    "84",
                    "85"
                ],
                [
                    "<=",
                    "ptema",
                    "89"
                ],
                [
                    ">=",
                    "ptema",
                    "80"
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
                "text-halo-color": "#4d4d4d",
                "text-halo-width": 0.75,
                "text-halo-blur": 0.5,
                "text-color": "#fff"
            }
        },
        {
            "id": "Skrivemaate-85+90(Øy)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 12,
            "maxzoom": 15,
            "interactive": true,
            "filter": [
                "in",
                "ptema",
                "85",
                "90"
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
                "text-halo-color": "#4d4d4d",
                "text-halo-width": 0.75,
                "text-halo-blur": 0.5,
                "text-color": "#fff"
            }
        },
        {
            "id": "Skrivemaate-84(Øy)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
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
                "text-halo-color": "#333",
                "text-halo-width": 0.75,
                "text-halo-blur": 0.5,
                "text-color": "#fff",
                "text-opacity": 0.7
            }
        },
        {
            "id": "Skrivemaate_36(Elv)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 8,
            "maxzoom": 13,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "ptema",
                    "36"
                ],
                [
                    "in",
                    "$type",
                    "LineString",
                    "Point",
                    "Polygon"
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
                "text-rotation-alignment": "map",
                "visibility": "visible"
            },
            "paint": {
                "text-color": "#fff",
                "text-halo-color": "#405ace",
                "text-halo-width": 1
            }
        },
        {
            "id": "Skrivemaate_vann_32",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
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
                "text-color": "#fff",
                "text-opacity": 1,
                "text-halo-color": "#1815bd",
                "text-halo-width": 1,
                "text-halo-blur": 1
            }
        },
        {
            "id": "Skrivemaate_vann_xx",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 8,
            "maxzoom": 14,
            "interactive": true,
            "layout": {
                "text-size": {
                    "base": 1,
                    "stops": [
                        [
                            8,
                            15
                        ],
                        [
                            14,
                            17
                        ]
                    ]
                },
                "text-allow-overlap": false,
                "symbol-avoid-edges": false,
                "text-ignore-placement": false,
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "symbol-placement": "point",
                "text-justify": "center",
                "text-padding": 2,
                "visibility": "none",
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
        {
            "id": "Skrivemaate_30(Fjord)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
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
                    "ptema",
                    "30"
                ],
                [
                    "in",
                    "$type",
                    "LineString",
                    "Polygon"
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
                "text-color": "#fff",
                "text-halo-color": "#4a47e6",
                "text-halo-width": 0.5
            }
        },
        {
            "id": "Skrivemaate_80(Fjord)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
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
                    "ptema",
                    "80"
                ],
                [
                    "in",
                    "$type",
                    "LineString",
                    "Polygon"
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
                "text-color": "#fff",
                "text-halo-color": "#4a47e6",
                "text-halo-width": 1
            }
        },
        {
            "id": "Skrivemaate_vann_31",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
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
                    "DIN Offc Pro Medium",
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
                "text-color": "#fff",
                "text-opacity": 1,
                "text-halo-color": "#4a47e6",
                "text-halo-width": 1,
                "text-halo-blur": 1
            }
        },
        {
            "id": "Skrivemaate_vann_30",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
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
                    "DIN Offc Pro Medium Italic",
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
                "text-color": "#fff",
                "text-opacity": 1,
                "text-halo-color": "#4a47e6",
                "text-halo-width": 1,
                "text-halo-blur": 0.5
            }
        },
        {
            "id": "Skrivemaate_16(Dal)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
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
                "text-letter-spacing": 0.02,
                "visibility": "visible"
            },
            "paint": {
                "text-halo-color": "#000",
                "text-halo-width": 1,
                "text-halo-blur": 0.5,
                "text-opacity": 1,
                "text-color": "#fff"
            }
        },
        {
            "id": "Skrivemaate_15(Dal)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
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
                ],
                "visibility": "visible"
            },
            "paint": {
                "text-halo-color": "#000",
                "text-halo-width": 1,
                "text-halo-blur": 0.5,
                "text-opacity": 1,
                "text-color": "#fff"
            }
        },
        {
            "id": "Skrivemaate_6(Ås)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
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
                "text-halo-color": "#256301",
                "text-halo-width": 0.5,
                "text-halo-blur": 0.5,
                "text-color": "#fff",
                "text-opacity": 1
            }
        },
        {
            "id": "Skrivemaate_5(Fjellområde)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
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
                "text-halo-color": "#256301",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "#fff",
                "text-opacity": 1
            }
        },
        {
            "id": "Skrivemaate_4(Fjell)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
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
                "text-halo-color": "#000",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "#fff",
                "text-opacity": 1
            }
        },
        {
            "id": "Skrivemaate_3(Fjell)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
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
                "text-halo-color": "#000",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "#fff",
                "text-opacity": 1
            }
        },
        {
            "id": "Skrivemaate_2(Fjell)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
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
                "text-halo-color": "#000",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "#fff",
                "text-opacity": 1
            }
        },
        {
            "id": "Skrivemaate_7(Fylke)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 4,
            "maxzoom": 10,
            "interactive": true,
            "filter": [
                "in",
                "ptema",
                "181",
                "7"
            ],
            "layout": {
                "visibility": "visible",
                "text-field": "{streng}",
                "text-font": [
                    "DIN Offc Pro Italic",
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
                "text-halo-color": "#141414",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "#fff",
                "text-opacity": 1
            }
        },
        {
            "id": "Skrivemaate_6(Innsjoe)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
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
                    "DIN Offc Pro Medium Italic",
                    "Arial Unicode MS Regular"
                ],
                "text-size": 12,
                "text-transform": "none",
                "text-allow-overlap": false
            },
            "paint": {
                "text-halo-color": "#092dce",
                "text-halo-width": 0.5,
                "text-halo-blur": 0.5,
                "text-color": "#fff",
                "text-opacity": 1
            }
        },
        {
            "id": "Skrivemaate_4",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 5,
            "maxzoom": 7,
            "interactive": true,
            "filter": [
                "==",
                "ptema",
                "4"
            ],
            "layout": {
                "text-size": {
                    "base": 0.9,
                    "stops": [
                        [
                            6,
                            10
                        ],
                        [
                            7,
                            12
                        ]
                    ]
                },
                "text-allow-overlap": true,
                "icon-image": "dot-9",
                "text-transform": "none",
                "text-font": [
                    "DIN Offc Pro Regular",
                    "Arial Unicode MS Regular"
                ],
                "text-padding": 1,
                "visibility": "none",
                "icon-size": 0.8,
                "text-anchor": "center",
                "text-field": "{streng}",
                "text-letter-spacing": 0.01,
                "icon-padding": 1
            },
            "paint": {
                "text-halo-color": "#fff",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "rgba(20,20,20,1)"
            }
        },
        {
            "id": "Skrivemaate_3",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 5,
            "maxzoom": 7,
            "interactive": true,
            "filter": [
                "==",
                "ptema",
                "3"
            ],
            "layout": {
                "text-size": {
                    "base": 0.9,
                    "stops": [
                        [
                            6,
                            10
                        ],
                        [
                            7,
                            12
                        ]
                    ]
                },
                "text-allow-overlap": true,
                "icon-image": "dot-9",
                "text-transform": "none",
                "text-font": [
                    "DIN Offc Pro Regular",
                    "Arial Unicode MS Regular"
                ],
                "text-padding": 1,
                "visibility": "none",
                "icon-size": 0.8,
                "text-anchor": "center",
                "text-field": "{streng}",
                "text-letter-spacing": 0.01,
                "icon-padding": 1
            },
            "paint": {
                "text-halo-color": "#fff",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "rgba(20,20,20,1)"
            }
        },
        {
            "id": "Skrivemaate_2(LitenBy)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 5,
            "maxzoom": 7,
            "interactive": true,
            "filter": [
                "==",
                "ptema",
                "2"
            ],
            "layout": {
                "text-size": {
                    "base": 0.9,
                    "stops": [
                        [
                            6,
                            10
                        ],
                        [
                            7,
                            12
                        ]
                    ]
                },
                "text-allow-overlap": true,
                "icon-image": "dot-9",
                "text-transform": "none",
                "text-font": [
                    "DIN Offc Pro Medium",
                    "Arial Unicode MS Regular"
                ],
                "text-padding": 1,
                "visibility": "none",
                "icon-size": 0.8,
                "text-anchor": "center",
                "text-field": "{streng}",
                "text-letter-spacing": 0.01,
                "icon-padding": 1
            },
            "paint": {
                "text-halo-color": "#fff",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "rgba(20,20,20,1)"
            }
        },
        {
            "id": "Skrivemaate_1(Stor by)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 4,
            "maxzoom": 7,
            "interactive": true,
            "filter": [
                "all",
                [
                    "!=",
                    "streng",
                    "Oslo"
                ],
                [
                    "==",
                    "ptema",
                    "1"
                ]
            ],
            "layout": {
                "visibility": "none",
                "text-field": "{streng}",
                "text-font": [
                    "DIN Offc Pro Regular",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 0.9,
                    "stops": [
                        [
                            4,
                            13
                        ],
                        [
                            6,
                            16
                        ]
                    ]
                },
                "text-transform": "none",
                "icon-image": "dot-9",
                "text-anchor": "bottom"
            },
            "paint": {
                "text-halo-color": "#fff",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "rgba(20,20,20,1)"
            }
        },
        {
            "id": "Skrivemaate_1(Oslo)",
            "type": "symbol",
            "metadata": {
                "mapbox:group": "1466743148509.6196"
            },
            "source": "composite",
            "source-layer": "Skrivemaate",
            "minzoom": 4,
            "maxzoom": 7,
            "interactive": true,
            "filter": [
                "all",
                [
                    "==",
                    "ptema",
                    "1"
                ],
                [
                    "==",
                    "streng",
                    "Oslo"
                ]
            ],
            "layout": {
                "visibility": "none",
                "text-field": "{streng}",
                "text-font": [
                    "DIN Offc Pro Bold",
                    "Arial Unicode MS Regular"
                ],
                "text-size": {
                    "base": 0.9,
                    "stops": [
                        [
                            4,
                            13
                        ],
                        [
                            6,
                            16
                        ]
                    ]
                },
                "text-transform": "none",
                "icon-image": "dot-9",
                "text-anchor": "top"
            },
            "paint": {
                "text-halo-color": "#fff",
                "text-halo-width": 1,
                "text-halo-blur": 1,
                "text-color": "rgba(20,20,20,1)"
            }
        },
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
                    "city",
                    "suburb",
                    "town"
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
                "text-halo-color": "#000",
                "text-halo-width": 1.5,
                "text-halo-blur": 0.1,
                "text-color": "#fff"
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
                    "city",
                    "town"
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
                "text-halo-color": "#000",
                "text-halo-width": 1.5,
                "text-halo-blur": 0.1,
                "text-color": "#fff"
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
                "",
                "town"
            ],
            "layout": {
                "visibility": "visible",
                "text-field": "{name_en}",
                "text-font": [
                    "DIN Offc Pro Medium",
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
                "text-halo-color": "#000",
                "text-halo-width": 1.25,
                "text-halo-blur": 0,
                "text-color": "#fff"
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
                    "==",
                    "type",
                    "city"
                ],
                [
                    "in",
                    "scalerank",
                    3,
                    4,
                    5,
                    6,
                    7
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
                "text-halo-color": "hsl(0, 0%, 18%)",
                "text-halo-width": 1.25,
                "text-halo-blur": 0,
                "text-color": "#fff"
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
                    "==",
                    "type",
                    "city"
                ],
                [
                    "in",
                    "ldir",
                    "E",
                    "S",
                    "SE",
                    "SW"
                ],
                [
                    "in",
                    "scalerank",
                    0,
                    1,
                    2
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
                "text-opacity": 1,
                "text-halo-color": "hsl(0, 0%, 18%)",
                "text-halo-width": 1.5,
                "text-halo-blur": 0.5,
                "text-color": "#fff"
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
                "visibility": "none",
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
                "visibility": "none",
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
                "visibility": "none",
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
                "text-color": "#fff",
                "text-halo-color": "#260",
                "text-halo-width": 0.5,
                "text-halo-blur": 0.5
            }
        }
    ],
    "created": "2016-06-23T10:36:09.978Z",
    "id": "cips6baso001sdmm5qfbdurn8",
    "modified": "2016-06-28T05:36:33.560Z",
    "owner": "keino",
    "draft": false
};
