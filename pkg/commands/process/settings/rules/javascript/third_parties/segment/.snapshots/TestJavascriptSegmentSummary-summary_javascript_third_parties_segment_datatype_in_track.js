critical:
    - rule_dsrid: DSR-1
      rule_display_id: javascript_third_parties_segment
      rule_description: Do not send sensitive data to Segment.
      rule_documentation_url: https://curio.sh/reference/rules/javascript_third_parties_segment
      line_number: 8
      filename: pkg/commands/process/settings/rules/javascript/third_parties/segment/testdata/datatype_in_track.js
      category_groups:
        - PII
        - Personal Data
      parent_line_number: 5
      parent_content: |-
        client.track({
          event: "some event name",
          userId: user.id,
          userIpAddr: user.ip_address,
        })
    - rule_dsrid: DSR-1
      rule_display_id: javascript_third_parties_segment
      rule_description: Do not send sensitive data to Segment.
      rule_documentation_url: https://curio.sh/reference/rules/javascript_third_parties_segment
      line_number: 17
      filename: pkg/commands/process/settings/rules/javascript/third_parties/segment/testdata/datatype_in_track.js
      category_groups:
        - PII
        - Personal Data
      parent_line_number: 17
      parent_content: browser.track(user.email)


--
