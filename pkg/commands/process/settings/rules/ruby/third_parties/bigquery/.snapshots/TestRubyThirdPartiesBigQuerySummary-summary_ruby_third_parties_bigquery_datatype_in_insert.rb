critical:
    - rule_dsrid: DSR-6
      rule_display_id: ruby_third_parties_bigquery
      rule_description: Do not store sensitive data in BigQuery.
      rule_documentation_url: https://curio.sh/reference/rules/ruby_third_parties_bigquery
      line_number: 4
      filename: pkg/commands/process/settings/rules/ruby/third_parties/bigquery/testdata/datatype_in_insert.rb
      category_groups:
        - PII
      parent_line_number: 7
      parent_content: |-
        dataset.insert("my_table", rows) do |result|
          call
        end


--
