const { createApp } = Vue;

/**
 *  Check for duplicate values in an array and return an object with the count of each value.
 * @param {string[]} arr
 * @returns {Record<string, number>}
 */
function checkDuplicate(arr) {
  return arr.reduce((accumulator, value) => {
    accumulator[value] = (accumulator[value] || 0) + 1;
    return accumulator;
  }, {});
}

createApp({
  data() {
    return {
      permissions: "",
      resources: '["*"]',
      effect: "ALLOW",
      sid: "",
      code: "",
      warning: "",
    };
  },
  methods: {
    updatePermissions(event) {
      this.permissions = event.target.value;
      this.warning = "";
    },

    handleSubmit() {
      let permissions;
      try {
        permissions = JSON.parse(this.permissions);
      } catch {
        try {
          permissions = eval(this.permissions);
        } catch {
          this.warning = "Invalid JSON format for permissions.";
          return;
        }
      }

      if (!Array.isArray(permissions)) {
        this.warning = "Permissions should be an array.";
        return;
      }
      if (permissions.length === 0) {
        this.warning = "Permissions array cannot be empty.";
        return;
      }
      if (permissions.some((perm) => typeof perm !== "string")) {
        this.warning = "All permissions should be strings.";
        return;
      }
      if (permissions.some((perm) => !perm.includes(":"))) {
        this.warning = "Permissions should contain ':'.";
        return;
      }
      if (
        this.effect !== "DENY" &&
        permissions.some((perm) => perm === "iam:*")
      ) {
        this.warning =
          "Using 'iam:*' with ALLOW is not recommended. Please review your permissions.";
        return;
      }
      if (
        this.effect !== "DENY" &&
        permissions.some((perm) => perm === "*" || perm === "*:*")
      ) {
        this.warning =
          "Using '*' or '*:*' is not allowed. Please specify actions.";

        return;
      }

      const permissionAppearances = checkDuplicate(permissions);
      for (const permission in permissionAppearances) {
        if (permissionAppearances[permission] > 1) {
          this.warning = `Duplicate permission found: ${permission}.`;
          return;
        }
      }

      this.code = `
    actions = ${JSON.stringify(permissions.sort(), null, 6)}
`.replace("]", "  ]");
      this.warning = "";
    },

    copyCode() {
      navigator.clipboard.writeText(this.code).then(
        () => {
          this.warning = "Code copied to clipboard! Please refresh";
        },
        (err) => {
          this.warning = "Failed to copy code: " + err;
        }
      );
    }
  },
}).mount("#app");
