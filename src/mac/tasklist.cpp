/**
 * Copyright (c) 2014 Dmitry Tsvettsikh <https://github.com/reklatsmasters>
 *
 * MIT License <https://github.com/reklatsmasters/node-process-list/blob/master/LICENSE>
 */

#include "tasklist.h"  // NOLINT(build/include)

namespace pl {

  /**
   * main function
   */
  list_t list(const struct process_fields &requested_fields) {
    list_t proclist;
    // not supported on mac
    return proclist;
  }
}  // namespace pl
