export const indicators = [
  {
    "expected": [
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"89.160.20.156\",\"description\":null,\"title\":null,\"content\":\"\",\"type\":\"IPv4\",\"id\":1588938}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "ip": "89.160.20.156",
            "type": "ipv4-addr"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"90421f8531f963d81cf54245b72cde80\",\"description\":\"MD5 of a5725af4391d21a232dc6d4ad33d7d915bd190bdac9b1826b73f364dc5c1aa65\",\"title\":\"Win32:Hoblig-B\",\"content\":\"\",\"type\":\"FileHash-MD5\",\"id\":9751110}",
          "type": "indicator"
        },
        "otx": {
          "description": "MD5 of a5725af4391d21a232dc6d4ad33d7d915bd190bdac9b1826b73f364dc5c1aa65",
          "title": "Win32:Hoblig-B"
        },
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "md5": "90421f8531f963d81cf54245b72cde80"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"ip.anysrc.net\",\"description\":null,\"title\":null,\"content\":\"\",\"type\":\"hostname\",\"id\":16782717}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "type": "domain-name",
            "url": {
              "domain": "ip.anysrc.net"
            }
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"89.160.20.156\",\"description\":null,\"title\":null,\"content\":\"\",\"type\":\"IPv4\",\"id\":19901748}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "ip": "89.160.20.156",
            "type": "ipv4-addr"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"d8c70ca70fd3555a0828fede6cc1f59e2c320ede80157039b6a2f09c336d5f7a\",\"description\":null,\"title\":null,\"content\":\"\",\"type\":\"FileHash-SHA256\",\"id\":31612067}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "sha256": "d8c70ca70fd3555a0828fede6cc1f59e2c320ede80157039b6a2f09c336d5f7a"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"f8e58af3ffefd4037fef246e93a55dc8\",\"description\":\"MD5 of df9b37477a83189cd4541674e64ce29bf7bf98338ed0d635276660e0c6419d09\",\"title\":null,\"content\":\"\",\"type\":\"FileHash-MD5\",\"id\":34413770}",
          "type": "indicator"
        },
        "otx": {
          "description": "MD5 of df9b37477a83189cd4541674e64ce29bf7bf98338ed0d635276660e0c6419d09"
        },
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "md5": "f8e58af3ffefd4037fef246e93a55dc8"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"1c62f004d0c9b91d3467b1b8106772e667e7e2075470c2ec7982b63573c90c54\",\"description\":null,\"title\":null,\"content\":\"\",\"type\":\"FileHash-SHA256\",\"id\":111154034}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "sha256": "1c62f004d0c9b91d3467b1b8106772e667e7e2075470c2ec7982b63573c90c54"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"8d24a14f2600482d0231396b6350cf21773335ec2f0b8919763317fdab78baae\",\"description\":null,\"title\":\"Win64:Malware-gen\",\"content\":\"\",\"type\":\"FileHash-SHA256\",\"id\":151858953}",
          "type": "indicator"
        },
        "otx": {
          "title": "Win64:Malware-gen"
        },
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "sha256": "8d24a14f2600482d0231396b6350cf21773335ec2f0b8919763317fdab78baae"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"89.160.20.156\",\"description\":null,\"title\":null,\"content\":\"\",\"type\":\"IPv4\",\"id\":311294364}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "ip": "89.160.20.156",
            "type": "ipv4-addr"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"c758ec922b173820374e552c2f015ac53cc5d9f99cc92080e608652aaa63695b\",\"description\":null,\"title\":null,\"content\":\"\",\"type\":\"FileHash-SHA256\",\"id\":406540408}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "sha256": "c758ec922b173820374e552c2f015ac53cc5d9f99cc92080e608652aaa63695b"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"0df586aa0334dcbe047d24ce859d00e537fdb5e0ca41886dab27479b6fc61ba6\",\"description\":null,\"title\":null,\"content\":\"\",\"type\":\"FileHash-SHA256\",\"id\":565556753}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "sha256": "0df586aa0334dcbe047d24ce859d00e537fdb5e0ca41886dab27479b6fc61ba6"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"aeb08b0651bc8a13dcf5e5f6c0d482f8\",\"description\":\"MD5 of 0df586aa0334dcbe047d24ce859d00e537fdb5e0ca41886dab27479b6fc61ba6\",\"title\":null,\"content\":\"\",\"type\":\"FileHash-MD5\",\"id\":565556755}",
          "type": "indicator"
        },
        "otx": {
          "description": "MD5 of 0df586aa0334dcbe047d24ce859d00e537fdb5e0ca41886dab27479b6fc61ba6"
        },
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "md5": "aeb08b0651bc8a13dcf5e5f6c0d482f8"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"6df5e1a017dff52020c7ff6ad92fdd37494e31769e1be242f6b23d1ea2d60140\",\"description\":null,\"title\":null,\"content\":\"\",\"type\":\"FileHash-SHA256\",\"id\":575672549}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "sha256": "6df5e1a017dff52020c7ff6ad92fdd37494e31769e1be242f6b23d1ea2d60140"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"c72fef3835f65cb380f6920b22c3488554d1af6d298562ccee92284f265c9619\",\"description\":null,\"title\":null,\"content\":\"\",\"type\":\"FileHash-SHA256\",\"id\":575672550}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "sha256": "c72fef3835f65cb380f6920b22c3488554d1af6d298562ccee92284f265c9619"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"e711fcd0f182b214c6ec74011a395f4c853068d59eb7c57f90c4a3e1de64434a\",\"description\":null,\"title\":null,\"content\":\"\",\"type\":\"FileHash-SHA256\",\"id\":995160791}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "sha256": "e711fcd0f182b214c6ec74011a395f4c853068d59eb7c57f90c4a3e1de64434a"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"d3ec8f4a46b21fb189fc3d58f3d87bf9897653ecdf90b7952dcc71f3b4023b4e\",\"description\":null,\"title\":null,\"content\":\"\",\"type\":\"FileHash-SHA256\",\"id\":1011989699}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "sha256": "d3ec8f4a46b21fb189fc3d58f3d87bf9897653ecdf90b7952dcc71f3b4023b4e"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"70447996722e5c04514d20b7a429d162b46546002fb0c87f512b40f16bac99bb\",\"description\":null,\"title\":null,\"content\":\"\",\"type\":\"FileHash-SHA256\",\"id\":1011989701}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "sha256": "70447996722e5c04514d20b7a429d162b46546002fb0c87f512b40f16bac99bb"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"29340643ca2e6677c19e1d3bf351d654\",\"description\":\"MD5 of 113af75f13547be184822f1268f984b79f35965a1b1f963d23b50a09741b0aec\",\"title\":\"Win64:Malware-gen\",\"content\":\"\",\"type\":\"FileHash-MD5\",\"id\":1472176322}",
          "type": "indicator"
        },
        "otx": {
          "description": "MD5 of 113af75f13547be184822f1268f984b79f35965a1b1f963d23b50a09741b0aec",
          "title": "Win64:Malware-gen"
        },
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "md5": "29340643ca2e6677c19e1d3bf351d654"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"86c314bc2dc37ba84f7364acd5108c2b\",\"description\":\"MD5 of 9b86a50b36aea5cc4cb60573a3660cf799a9ec1f69a3d4572d3dc277361a0ad2\",\"title\":\"Win64:Malware-gen\",\"content\":\"\",\"type\":\"FileHash-MD5\",\"id\":1472457325}",
          "type": "indicator"
        },
        "otx": {
          "description": "MD5 of 9b86a50b36aea5cc4cb60573a3660cf799a9ec1f69a3d4572d3dc277361a0ad2",
          "title": "Win64:Malware-gen"
        },
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "md5": "86c314bc2dc37ba84f7364acd5108c2b"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"cb0c1248d3899358a375888bb4e8f3fe\",\"description\":\"MD5 of 1455091954ecf9ccd6fe60cb8e982d9cfb4b3dc8414443ccfdfc444079829d56\",\"title\":\"Trojan:Win32/Occamy.B\",\"content\":\"\",\"type\":\"FileHash-MD5\",\"id\":1472457326}",
          "type": "indicator"
        },
        "otx": {
          "description": "MD5 of 1455091954ecf9ccd6fe60cb8e982d9cfb4b3dc8414443ccfdfc444079829d56",
          "title": "Trojan:Win32/Occamy.B"
        },
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "md5": "cb0c1248d3899358a375888bb4e8f3fe"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"d348f536e214a47655af387408b4fca5\",\"description\":\"MD5 of 3012f472969327d5f8c9dac63b8ea9c5cb0de002d16c120a6bba4685120f58b4\",\"title\":\"Win64:Malware-gen\",\"content\":\"\",\"type\":\"FileHash-MD5\",\"id\":1472457327}",
          "type": "indicator"
        },
        "otx": {
          "description": "MD5 of 3012f472969327d5f8c9dac63b8ea9c5cb0de002d16c120a6bba4685120f58b4",
          "title": "Win64:Malware-gen"
        },
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "md5": "d348f536e214a47655af387408b4fca5"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"29ff1903832827e328ad9ec05fdf268eadd6db8b613597cf65f8740c211be413\",\"description\":null,\"title\":\"vad_contains_network_strings\",\"content\":\"\",\"type\":\"FileHash-SHA256\",\"id\":1546012751}",
          "type": "indicator"
        },
        "otx": {
          "title": "vad_contains_network_strings"
        },
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "sha256": "29ff1903832827e328ad9ec05fdf268eadd6db8b613597cf65f8740c211be413"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"b105891f90b2a8730bbadf02b5adeccbba539883bf75dec2ff7a5a97625dd222\",\"description\":null,\"title\":null,\"content\":\"\",\"type\":\"FileHash-SHA256\",\"id\":1546012939}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "sha256": "b105891f90b2a8730bbadf02b5adeccbba539883bf75dec2ff7a5a97625dd222"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"e4db5405ac7ab517d43722e1ca8d653ea4a32802bc8a5410d032275eedc7b7ee\",\"description\":null,\"title\":null,\"content\":\"\",\"type\":\"FileHash-SHA256\",\"id\":1546012967}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "sha256": "e4db5405ac7ab517d43722e1ca8d653ea4a32802bc8a5410d032275eedc7b7ee"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"465e7c1e36899284da5c4425dfd687af2496f397fe60c85ea2b4d85dff5a08aa\",\"description\":null,\"title\":\"Win.Malware.TrickbotSystemInfo-6335590-0\",\"content\":\"\",\"type\":\"FileHash-SHA256\",\"id\":1564141498}",
          "type": "indicator"
        },
        "otx": {
          "title": "Win.Malware.TrickbotSystemInfo-6335590-0"
        },
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "sha256": "465e7c1e36899284da5c4425dfd687af2496f397fe60c85ea2b4d85dff5a08aa"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"5051906d6ed1b2ae9c9a9f070ef73c9be8f591d2e41d144649a0dc96e28d0400\",\"description\":null,\"title\":null,\"content\":\"\",\"type\":\"FileHash-SHA256\",\"id\":1564141523}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "sha256": "5051906d6ed1b2ae9c9a9f070ef73c9be8f591d2e41d144649a0dc96e28d0400"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"14b74cb9be8cad8eb5fa8842d00bb692\",\"description\":\"MD5 of 465e7c1e36899284da5c4425dfd687af2496f397fe60c85ea2b4d85dff5a08aa\",\"title\":\"Win.Malware.TrickbotSystemInfo-6335590-0\",\"content\":\"\",\"type\":\"FileHash-MD5\",\"id\":1564142109}",
          "type": "indicator"
        },
        "otx": {
          "description": "MD5 of 465e7c1e36899284da5c4425dfd687af2496f397fe60c85ea2b4d85dff5a08aa",
          "title": "Win.Malware.TrickbotSystemInfo-6335590-0"
        },
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "md5": "14b74cb9be8cad8eb5fa8842d00bb692"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"a5b59f7d133e354dfc73f40517aab730f322f0ef\",\"description\":\"SHA1 of 465e7c1e36899284da5c4425dfd687af2496f397fe60c85ea2b4d85dff5a08aa\",\"title\":\"Win.Malware.TrickbotSystemInfo-6335590-0\",\"content\":\"\",\"type\":\"FileHash-SHA1\",\"id\":1564142964}",
          "type": "indicator"
        },
        "otx": {
          "description": "SHA1 of 465e7c1e36899284da5c4425dfd687af2496f397fe60c85ea2b4d85dff5a08aa",
          "title": "Win.Malware.TrickbotSystemInfo-6335590-0"
        },
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "sha1": "a5b59f7d133e354dfc73f40517aab730f322f0ef"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"8d3f68b16f0710f858d8c1d2c699260e6f43161a5510abb0e7ba567bd72c965b\",\"description\":null,\"title\":null,\"content\":\"\",\"type\":\"FileHash-SHA256\",\"id\":1566067095}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "sha256": "8d3f68b16f0710f858d8c1d2c699260e6f43161a5510abb0e7ba567bd72c965b"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"ff2dcea4963e060a658f4dffbb119529\",\"description\":\"MD5 of 5cb822616d2c9435c9ddd060d6abdbc286ab57cfcf6dc64768c52976029a925b\",\"title\":\"vad_contains_network_strings\",\"content\":\"\",\"type\":\"FileHash-MD5\",\"id\":1566999970}",
          "type": "indicator"
        },
        "otx": {
          "description": "MD5 of 5cb822616d2c9435c9ddd060d6abdbc286ab57cfcf6dc64768c52976029a925b",
          "title": "vad_contains_network_strings"
        },
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "md5": "ff2dcea4963e060a658f4dffbb119529"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"0d73f1a1c4b2f8723fffc83eb3d00f31\",\"description\":\"MD5 of 29ff1903832827e328ad9ec05fdf268eadd6db8b613597cf65f8740c211be413\",\"title\":\"vad_contains_network_strings\",\"content\":\"\",\"type\":\"FileHash-MD5\",\"id\":1569290125}",
          "type": "indicator"
        },
        "otx": {
          "description": "MD5 of 29ff1903832827e328ad9ec05fdf268eadd6db8b613597cf65f8740c211be413",
          "title": "vad_contains_network_strings"
        },
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "md5": "0d73f1a1c4b2f8723fffc83eb3d00f31"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"89.160.20.156\",\"description\":null,\"title\":null,\"content\":\"\",\"type\":\"IPv4\",\"id\":1592876453}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "ip": "89.160.20.156",
            "type": "ipv4-addr"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"d35a30264c0698709ad554489004e0077e263d354ced0c54552a0b500f91ecc0\",\"description\":null,\"title\":null,\"content\":\"\",\"type\":\"FileHash-SHA256\",\"id\":1597058431}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "sha256": "d35a30264c0698709ad554489004e0077e263d354ced0c54552a0b500f91ecc0"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"5264b455f453820be629a324196131492ff03c80491e823ac06657c9387250dd\",\"description\":null,\"title\":null,\"content\":\"\",\"type\":\"FileHash-SHA256\",\"id\":1603343478}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "sha256": "5264b455f453820be629a324196131492ff03c80491e823ac06657c9387250dd"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"1455091954ecf9ccd6fe60cb8e982d9cfb4b3dc8414443ccfdfc444079829d56\",\"description\":null,\"title\":\"Trojan:Win32/Occamy.B\",\"content\":\"\",\"type\":\"FileHash-SHA256\",\"id\":1606260302}",
          "type": "indicator"
        },
        "otx": {
          "title": "Trojan:Win32/Occamy.B"
        },
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "sha256": "1455091954ecf9ccd6fe60cb8e982d9cfb4b3dc8414443ccfdfc444079829d56"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"3012f472969327d5f8c9dac63b8ea9c5cb0de002d16c120a6bba4685120f58b4\",\"description\":null,\"title\":\"Win64:Malware-gen\",\"content\":\"\",\"type\":\"FileHash-SHA256\",\"id\":1606260304}",
          "type": "indicator"
        },
        "otx": {
          "title": "Win64:Malware-gen"
        },
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "sha256": "3012f472969327d5f8c9dac63b8ea9c5cb0de002d16c120a6bba4685120f58b4"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"b8e463789a076b16a90d1aae73cea9d3880ac0ead1fd16587b8cd79e37a1a3d8\",\"description\":null,\"title\":null,\"content\":\"\",\"type\":\"FileHash-SHA256\",\"id\":1606260305}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "sha256": "b8e463789a076b16a90d1aae73cea9d3880ac0ead1fd16587b8cd79e37a1a3d8"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"113af75f13547be184822f1268f984b79f35965a1b1f963d23b50a09741b0aec\",\"description\":null,\"title\":\"Win64:Malware-gen\",\"content\":\"\",\"type\":\"FileHash-SHA256\",\"id\":1606260310}",
          "type": "indicator"
        },
        "otx": {
          "title": "Win64:Malware-gen"
        },
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "sha256": "113af75f13547be184822f1268f984b79f35965a1b1f963d23b50a09741b0aec"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"9b86a50b36aea5cc4cb60573a3660cf799a9ec1f69a3d4572d3dc277361a0ad2\",\"description\":null,\"title\":\"Win64:Malware-gen\",\"content\":\"\",\"type\":\"FileHash-SHA256\",\"id\":1606260311}",
          "type": "indicator"
        },
        "otx": {
          "title": "Win64:Malware-gen"
        },
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "sha256": "9b86a50b36aea5cc4cb60573a3660cf799a9ec1f69a3d4572d3dc277361a0ad2"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"c51024bb119211c335f95e731cfa9a744fcdb645a57d35fb379d01b7dbdd098e\",\"description\":null,\"title\":null,\"content\":\"\",\"type\":\"FileHash-SHA256\",\"id\":1606260316}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "sha256": "c51024bb119211c335f95e731cfa9a744fcdb645a57d35fb379d01b7dbdd098e"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"ad20c6fac565f901c82a21b70f9739037eb54818\",\"description\":\"SHA1 of 9b86a50b36aea5cc4cb60573a3660cf799a9ec1f69a3d4572d3dc277361a0ad2\",\"title\":\"Win64:Malware-gen\",\"content\":\"\",\"type\":\"FileHash-SHA1\",\"id\":1606260341}",
          "type": "indicator"
        },
        "otx": {
          "description": "SHA1 of 9b86a50b36aea5cc4cb60573a3660cf799a9ec1f69a3d4572d3dc277361a0ad2",
          "title": "Win64:Malware-gen"
        },
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "sha1": "ad20c6fac565f901c82a21b70f9739037eb54818"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"13f11e273f9a4a56557f03821c3bfd591cca6ebc\",\"description\":\"SHA1 of 3012f472969327d5f8c9dac63b8ea9c5cb0de002d16c120a6bba4685120f58b4\",\"title\":\"Win64:Malware-gen\",\"content\":\"\",\"type\":\"FileHash-SHA1\",\"id\":1606260344}",
          "type": "indicator"
        },
        "otx": {
          "description": "SHA1 of 3012f472969327d5f8c9dac63b8ea9c5cb0de002d16c120a6bba4685120f58b4",
          "title": "Win64:Malware-gen"
        },
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "sha1": "13f11e273f9a4a56557f03821c3bfd591cca6ebc"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"1581fe76e3c96dc33182daafd09c8cf5c17004e0\",\"description\":\"SHA1 of 113af75f13547be184822f1268f984b79f35965a1b1f963d23b50a09741b0aec\",\"title\":\"Win64:Malware-gen\",\"content\":\"\",\"type\":\"FileHash-SHA1\",\"id\":1606260353}",
          "type": "indicator"
        },
        "otx": {
          "description": "SHA1 of 113af75f13547be184822f1268f984b79f35965a1b1f963d23b50a09741b0aec",
          "title": "Win64:Malware-gen"
        },
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "sha1": "1581fe76e3c96dc33182daafd09c8cf5c17004e0"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"b72e75e9e901a44b655a5cf89cf0eadcaff46037\",\"description\":\"SHA1 of 1455091954ecf9ccd6fe60cb8e982d9cfb4b3dc8414443ccfdfc444079829d56\",\"title\":\"Trojan:Win32/Occamy.B\",\"content\":\"\",\"type\":\"FileHash-SHA1\",\"id\":1606260364}",
          "type": "indicator"
        },
        "otx": {
          "description": "SHA1 of 1455091954ecf9ccd6fe60cb8e982d9cfb4b3dc8414443ccfdfc444079829d56",
          "title": "Trojan:Win32/Occamy.B"
        },
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "sha1": "b72e75e9e901a44b655a5cf89cf0eadcaff46037"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"maper.info\",\"description\":null,\"title\":null,\"content\":\"\",\"type\":\"domain\",\"id\":1634015726}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "type": "domain-name",
            "url": {
              "domain": "maper.info"
            }
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"89.160.20.156\",\"description\":null,\"title\":null,\"content\":\"\",\"type\":\"IPv4\",\"id\":1635374317}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "ip": "89.160.20.156",
            "type": "ipv4-addr"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"89.160.20.156\",\"description\":null,\"title\":null,\"content\":\"\",\"type\":\"IPv4\",\"id\":1756014820}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "ip": "89.160.20.156",
            "type": "ipv4-addr"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"9af8a93519d22ed04ffb9ccf6861c9df1b77dc5d22e0aeaff4a582dbf8660ba6\",\"description\":null,\"title\":\"xor_0x20_xord_javascript\",\"content\":\"\",\"type\":\"FileHash-SHA256\",\"id\":2114543412}",
          "type": "indicator"
        },
        "otx": {
          "title": "xor_0x20_xord_javascript"
        },
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "sha256": "9af8a93519d22ed04ffb9ccf6861c9df1b77dc5d22e0aeaff4a582dbf8660ba6"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"be9fb556a3c7aef0329e768d7f903e7dd42a821abc663e11fb637ce33b007087\",\"description\":null,\"title\":\"xor_0x20_xord_javascript\",\"content\":\"\",\"type\":\"FileHash-SHA256\",\"id\":2114543416}",
          "type": "indicator"
        },
        "otx": {
          "title": "xor_0x20_xord_javascript"
        },
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "sha256": "be9fb556a3c7aef0329e768d7f903e7dd42a821abc663e11fb637ce33b007087"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"3bfec096c4837d1e6485fe0ae0ea6f1c0b44edc611d4f2204cc9cf73c985cbc2\",\"description\":null,\"title\":\"xor_0x20_xord_javascript\",\"content\":\"\",\"type\":\"FileHash-SHA256\",\"id\":2114543440}",
          "type": "indicator"
        },
        "otx": {
          "title": "xor_0x20_xord_javascript"
        },
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "sha256": "3bfec096c4837d1e6485fe0ae0ea6f1c0b44edc611d4f2204cc9cf73c985cbc2"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"dff2e39b2e008ea89a3d6b36dcd9b8c927fb501d60c1ad5a52ed1ffe225da2e2\",\"description\":null,\"title\":\"xor_0x20_xord_javascript\",\"content\":\"\",\"type\":\"FileHash-SHA256\",\"id\":2114543441}",
          "type": "indicator"
        },
        "otx": {
          "title": "xor_0x20_xord_javascript"
        },
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "sha256": "dff2e39b2e008ea89a3d6b36dcd9b8c927fb501d60c1ad5a52ed1ffe225da2e2"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"6b4d271a48d118843aee3dee4481fa2930732ed7075db3241a8991418f00d92b\",\"description\":null,\"title\":\"xor_0x20_xord_javascript\",\"content\":\"\",\"type\":\"FileHash-SHA256\",\"id\":2114543445}",
          "type": "indicator"
        },
        "otx": {
          "title": "xor_0x20_xord_javascript"
        },
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "sha256": "6b4d271a48d118843aee3dee4481fa2930732ed7075db3241a8991418f00d92b"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"26de4265303491bed1424d85b263481ac153c2b3513f9ee48ffb42c12312ac43\",\"description\":null,\"title\":\"xor_0x20_xord_javascript\",\"content\":\"\",\"type\":\"FileHash-SHA256\",\"id\":2114543456}",
          "type": "indicator"
        },
        "otx": {
          "title": "xor_0x20_xord_javascript"
        },
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "sha256": "26de4265303491bed1424d85b263481ac153c2b3513f9ee48ffb42c12312ac43"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"02f54da6c6f2f87ff7b713d46e058dedac1cedabd693643bb7f6dfe994b2105d\",\"description\":null,\"title\":\"xor_0x20_xord_javascript\",\"content\":\"\",\"type\":\"FileHash-SHA256\",\"id\":2114543458}",
          "type": "indicator"
        },
        "otx": {
          "title": "xor_0x20_xord_javascript"
        },
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "sha256": "02f54da6c6f2f87ff7b713d46e058dedac1cedabd693643bb7f6dfe994b2105d"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"89.160.20.156\",\"description\":null,\"title\":null,\"content\":\"\",\"type\":\"IPv4\",\"id\":2114754074}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "ip": "89.160.20.156",
            "type": "ipv4-addr"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"89.160.20.156\",\"description\":null,\"title\":null,\"content\":\"\",\"type\":\"IPv4\",\"id\":2114754077}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "ip": "89.160.20.156",
            "type": "ipv4-addr"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"89.160.20.156\",\"description\":null,\"title\":null,\"content\":\"\",\"type\":\"IPv4\",\"id\":2114754078}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "ip": "89.160.20.156",
            "type": "ipv4-addr"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"89.160.20.156\",\"description\":null,\"title\":null,\"content\":\"\",\"type\":\"IPv4\",\"id\":2114754080}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "ip": "89.160.20.156",
            "type": "ipv4-addr"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"89.160.20.156\",\"description\":null,\"title\":null,\"content\":\"\",\"type\":\"IPv4\",\"id\":2117062744}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "ip": "89.160.20.156",
            "type": "ipv4-addr"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"e999b83629355ec7ff3b6fda465ef53ce6992c9327344fbf124f7eb37808389d\",\"description\":null,\"title\":null,\"content\":\"\",\"type\":\"FileHash-SHA256\",\"id\":2117884668}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "sha256": "e999b83629355ec7ff3b6fda465ef53ce6992c9327344fbf124f7eb37808389d"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"89.160.20.156\",\"description\":null,\"title\":null,\"content\":\"\",\"type\":\"IPv4\",\"id\":2119746545}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "ip": "89.160.20.156",
            "type": "ipv4-addr"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"89.160.20.156\",\"description\":null,\"title\":null,\"content\":\"\",\"type\":\"IPv4\",\"id\":2129763785}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "ip": "89.160.20.156",
            "type": "ipv4-addr"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"89.160.20.156\",\"description\":null,\"title\":null,\"content\":\"\",\"type\":\"IPv4\",\"id\":2136050161}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "ip": "89.160.20.156",
            "type": "ipv4-addr"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"89.160.20.156\",\"description\":null,\"title\":\"Trickbot\",\"content\":\"\",\"type\":\"IPv4\",\"id\":2136079568}",
          "type": "indicator"
        },
        "otx": {
          "title": "Trickbot"
        },
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "ip": "89.160.20.156",
            "type": "ipv4-addr"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"fotmailz.com\",\"description\":null,\"title\":null,\"content\":\"\",\"type\":\"domain\",\"id\":2137741373}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "type": "domain-name",
            "url": {
              "domain": "fotmailz.com"
            }
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"pori89g5jqo3v8.com\",\"description\":null,\"title\":null,\"content\":\"\",\"type\":\"domain\",\"id\":2137741468}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "type": "domain-name",
            "url": {
              "domain": "pori89g5jqo3v8.com"
            }
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"sebco.co.ke\",\"description\":null,\"title\":null,\"content\":\"\",\"type\":\"domain\",\"id\":2178708355}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "type": "domain-name",
            "url": {
              "domain": "sebco.co.ke"
            }
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"89.160.20.156\",\"description\":null,\"title\":\"Trickbot\",\"content\":\"\",\"type\":\"IPv4\",\"id\":2180669102}",
          "type": "indicator"
        },
        "otx": {
          "title": "Trickbot"
        },
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "ip": "89.160.20.156",
            "type": "ipv4-addr"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"chishir.com\",\"description\":null,\"title\":null,\"content\":\"\",\"type\":\"domain\",\"id\":2186034800}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "type": "domain-name",
            "url": {
              "domain": "chishir.com"
            }
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"kostunivo.com\",\"description\":null,\"title\":null,\"content\":\"\",\"type\":\"domain\",\"id\":2186034803}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "type": "domain-name",
            "url": {
              "domain": "kostunivo.com"
            }
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"mangoclone.com\",\"description\":null,\"title\":null,\"content\":\"\",\"type\":\"domain\",\"id\":2186034805}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "type": "domain-name",
            "url": {
              "domain": "mangoclone.com"
            }
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"onixcellent.com\",\"description\":null,\"title\":null,\"content\":\"\",\"type\":\"domain\",\"id\":2186034807}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "type": "domain-name",
            "url": {
              "domain": "onixcellent.com"
            }
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"fc0efd612ad528795472e99cae5944b68b8e26dc\",\"description\":null,\"title\":\"Win64:Malware-gen\",\"content\":\"\",\"type\":\"FileHash-SHA1\",\"id\":2186034891}",
          "type": "indicator"
        },
        "otx": {
          "title": "Win64:Malware-gen"
        },
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "sha1": "fc0efd612ad528795472e99cae5944b68b8e26dc"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"24d4bbc982a6a561f0426a683b9617de1a96a74a\",\"description\":null,\"title\":\"Sf:ShellCode-DZ\\\\ [Trj]\",\"content\":\"\",\"type\":\"FileHash-SHA1\",\"id\":2186034903}",
          "type": "indicator"
        },
        "otx": {
          "title": "Sf:ShellCode-DZ\\ [Trj]"
        },
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "sha1": "24d4bbc982a6a561f0426a683b9617de1a96a74a"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"fa98074dc18ad7e2d357b5d168c00a91256d87d1\",\"description\":null,\"title\":\"Win64:Malware-gen\",\"content\":\"\",\"type\":\"FileHash-SHA1\",\"id\":2186034912}",
          "type": "indicator"
        },
        "otx": {
          "title": "Win64:Malware-gen"
        },
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "sha1": "fa98074dc18ad7e2d357b5d168c00a91256d87d1"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"e5dc7c8bfa285b61dda1618f0ade9c256be75d1a\",\"description\":null,\"title\":\"Win64:Malware-gen\",\"content\":\"\",\"type\":\"FileHash-SHA1\",\"id\":2186034924}",
          "type": "indicator"
        },
        "otx": {
          "title": "Win64:Malware-gen"
        },
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "sha1": "e5dc7c8bfa285b61dda1618f0ade9c256be75d1a"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"89.160.20.156\",\"description\":null,\"title\":\"Trickbot\",\"content\":\"\",\"type\":\"IPv4\",\"id\":2189036445}",
          "type": "indicator"
        },
        "otx": {
          "title": "Trickbot"
        },
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "ip": "89.160.20.156",
            "type": "ipv4-addr"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"89.160.20.156\",\"description\":null,\"title\":null,\"content\":\"\",\"type\":\"IPv4\",\"id\":2189036446}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "ip": "89.160.20.156",
            "type": "ipv4-addr"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"89.160.20.156\",\"description\":null,\"title\":null,\"content\":\"\",\"type\":\"IPv4\",\"id\":2190596263}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "ip": "89.160.20.156",
            "type": "ipv4-addr"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"indicator\":\"10ec3571596c30b9993b89f12d29d23c\",\"description\":\"MD5 of 9af8a93519d22ed04ffb9ccf6861c9df1b77dc5d22e0aeaff4a582dbf8660ba6\",\"title\":\"xor_0x20_xord_javascript\",\"content\":\"\",\"type\":\"FileHash-MD5\",\"id\":2192837907}",
          "type": "indicator"
        },
        "otx": {
          "description": "MD5 of 9af8a93519d22ed04ffb9ccf6861c9df1b77dc5d22e0aeaff4a582dbf8660ba6",
          "title": "xor_0x20_xord_javascript"
        },
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "file": {
              "hash": {
                "md5": "10ec3571596c30b9993b89f12d29d23c"
              }
            },
            "type": "file"
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"id\":73,\"indicator\":\"http://www.playboysplus.com\",\"type\":\"URL\",\"title\":null,\"description\":null,\"content\":\"\"}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "type": "url",
            "url": {
              "domain": "www.playboysplus.com",
              "full": "http://www.playboysplus.com",
              "original": "http://www.playboysplus.com",
              "path": "",
              "scheme": "http"
            }
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"id\":74,\"indicator\":\"http://join.playboysplus.com/signup/\",\"type\":\"URL\",\"title\":null,\"description\":null,\"content\":\"\"}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "type": "url",
            "url": {
              "domain": "join.playboysplus.com",
              "full": "http://join.playboysplus.com/signup/",
              "original": "http://join.playboysplus.com/signup/",
              "path": "/signup/",
              "scheme": "http"
            }
          }
        }
      },
      {
        "ecs": {
          "version": "8.2.0"
        },
        "event": {
          "category": "threat",
          "kind": "enrichment",
          "original": "{\"id\":970,\"indicator\":\"http://api.vk.com/method/wall.get?count=1\u0026owner_id=-81972386\",\"type\":\"URL\",\"title\":null,\"description\":null,\"content\":\"\"}",
          "type": "indicator"
        },
        "otx": {},
        "tags": [
          "preserve_original_event"
        ],
        "threat": {
          "indicator": {
            "type": "url",
            "url": {
              "domain": "api.vk.com",
              "extension": "get",
              "full": "http://api.vk.com/method/wall.get?count=1\u0026owner_id=-81972386",
              "original": "http://api.vk.com/method/wall.get?count=1\u0026owner_id=-81972386",
              "path": "/method/wall.get",
              "query": "count=1\u0026owner_id=-81972386",
              "scheme": "http"
            }
          }
        }
      }
    ]
  }
];