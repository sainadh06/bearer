low:
    - rule_dsrid: DSR-1
      rule_display_id: javascript_honeybadger
      rule_description: Do not send sensitive data to Honeybadger.
      rule_documentation_url: https://curio.sh/reference/rules/javascript_honeybadger
      line_number: 3
      filename: pkg/commands/process/settings/rules/javascript/third_parties/honeybadger/testdata/unsecure.js
      parent_line_number: 5
      parent_content: Honeybadger.setContext(context)


--
