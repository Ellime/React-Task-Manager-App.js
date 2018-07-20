import React from "react";
import PropTypes from "prop-types";
import { Radio, RadioGroup } from "@cdk-uip/react-radio";
import { Headline4, Body2, Subtitle1 } from "@cdk-uip/react-typography";
import { LayoutGrid, LayoutGridCell } from "@cdk-uip/react-layout-grid";
import { Card, CardText } from "@cdk-uip/react-card";
import { FormattedMessage, FormattedDate, FormattedTime } from "react-intl";

export default class Intl extends React.Component {
  static propTypes = {
    locale: PropTypes.string,
    language: PropTypes.string,
    setLocale: PropTypes.func,
    setLanguage: PropTypes.func
  };

  render() {
    const { locale, language, setLocale, setLanguage } = this.props;
    return (
      <LayoutGrid>
        <LayoutGridCell span={12}>
          <Headline4>
            <FormattedMessage
              id="Intl.headline"
              defaultMessage="Localization"
            />
          </Headline4>
        </LayoutGridCell>

        <LayoutGridCell span={12}>
          <Card>
            <CardText>
              <LayoutGrid nested>
                <LayoutGridCell>
                  <Subtitle1 style={{ marginBottom: "1rem" }}>
                    <FormattedMessage
                      id="Intl.subheadingLang"
                      defaultMessage="Language"
                    />
                  </Subtitle1>
                  <RadioGroup
                    name="language"
                    value={language}
                    onChange={e => {
                      setLanguage(e.target.value);
                    }}
                  >
                    <Radio value="en-GB">
                      <FormattedMessage
                        id="Intl.lang.uk"
                        defaultMessage="English (UK)"
                      />
                    </Radio>
                    <Radio value="en-US">
                      <FormattedMessage
                        id="Intl.lang.us"
                        defaultMessage="English (US)"
                      />
                    </Radio>
                    <Radio value="fi-FI">
                      <FormattedMessage
                        id="Intl.lang.fi"
                        defaultMessage="Finnish"
                      />
                    </Radio>
                  </RadioGroup>
                </LayoutGridCell>

                <LayoutGridCell>
                  <Subtitle1 style={{ marginBottom: "1rem" }}>
                    <FormattedMessage
                      id="Intl.subheadingLocale"
                      defaultMessage="Locale"
                    />
                  </Subtitle1>
                  <RadioGroup
                    name="locale"
                    value={locale}
                    onChange={e => {
                      setLocale(e.target.value);
                    }}
                  >
                    <Radio value="en-GB">
                      <FormattedMessage
                        id="Intl.locale.uk"
                        defaultMessage="United Kingdom"
                      />
                    </Radio>
                    <Radio value="en-US">
                      <FormattedMessage
                        id="Intl.locale.us"
                        defaultMessage="United States of America"
                      />
                    </Radio>
                    <Radio value="fi-FI">
                      <FormattedMessage
                        id="Intl.locale.fi"
                        defaultMessage="Finland"
                      />
                    </Radio>
                  </RadioGroup>
                </LayoutGridCell>

                <LayoutGridCell span={12}>
                  <Body2>
                    <FormattedMessage
                      id="Intl.date"
                      defaultMessage="Current date:"
                    />{" "}
                    <FormattedDate value={new Date()} />
                  </Body2>
                </LayoutGridCell>

                <LayoutGridCell span={12}>
                  <Body2>
                    <FormattedMessage
                      id="Intl.time"
                      defaultMessage="Current time:"
                    />{" "}
                    <FormattedTime value={new Date()} />
                  </Body2>
                </LayoutGridCell>
              </LayoutGrid>
            </CardText>
          </Card>
        </LayoutGridCell>
      </LayoutGrid>
    );
  }
}
