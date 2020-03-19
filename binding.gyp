{
  "targets": [{
    "target_name": "processlist",
    "sources": [
      "src/main.cpp"
      , "src/snapshot.cpp"
    ],
    "include_dirs":["src", "<!(node -e \"require('nan')\")"],
    "conditions": [
      ["OS=='win'", {
        "defines": [
          "UNICODE",
          "_UNICODE "
        ],
        "sources": [
          "src/win/tasklist.cpp"
        ],
        "msvs_settings": {
          "VCCLCompilerTool": {
            "WarningLevel": 3,
            "ExceptionHandling": 1,
            "DisableSpecificWarnings": [4100, 4127, 4201, 4244, 4267, 4506, 4611, 4714, 4800, 4005]
          }
        }
      }],
      ['OS=="mac"', {
        "cflags!": ["-fno-exceptions"],
        "cflags_cc!": ["-fno-rtti", "-fno-exceptions"],
        "sources": [
          "src/mac/tasklist.cpp"
        ],
        'xcode_settings': {
            'GCC_ENABLE_CPP_EXCEPTIONS': 'YES'
        }
      }],
      ["OS!='mac' and OS!='win'", {
        "sources": [
          "src/unix/tasklist.cpp"
        ],
        "cflags_cc!": ["-fno-rtti", "-fno-exceptions"],
        "cflags_cc+": [
          "-fexceptions",
          "-std=c++0x",
          "-frtti"
        ]
      }]
    ]
  }]
}
