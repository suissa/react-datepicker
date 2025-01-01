/*!
  react-datepicker v7.5.0
  https://github.com/Hacker0x01/react-datepicker
  Released under the MIT License.
*/
(function (global, factory) {
  typeof exports === "object" && typeof module !== "undefined"
    ? factory(
        exports,
        require("clsx"),
        require("react"),
        require("date-fns"),
        require("date-fns/addDays"),
        require("date-fns/addHours"),
        require("date-fns/addMinutes"),
        require("date-fns/addMonths"),
        require("date-fns/addQuarters"),
        require("date-fns/addSeconds"),
        require("date-fns/addWeeks"),
        require("date-fns/addYears"),
        require("date-fns/differenceInCalendarDays"),
        require("date-fns/differenceInCalendarMonths"),
        require("date-fns/differenceInCalendarQuarters"),
        require("date-fns/differenceInCalendarYears"),
        require("date-fns/endOfDay"),
        require("date-fns/endOfMonth"),
        require("date-fns/endOfWeek"),
        require("date-fns/endOfYear"),
        require("date-fns/format"),
        require("date-fns/getDate"),
        require("date-fns/getDay"),
        require("date-fns/getHours"),
        require("date-fns/getISOWeek"),
        require("date-fns/getMinutes"),
        require("date-fns/getMonth"),
        require("date-fns/getQuarter"),
        require("date-fns/getSeconds"),
        require("date-fns/getTime"),
        require("date-fns/getYear"),
        require("date-fns/isAfter"),
        require("date-fns/isBefore"),
        require("date-fns/isDate"),
        require("date-fns/isEqual"),
        require("date-fns/isSameDay"),
        require("date-fns/isSameMonth"),
        require("date-fns/isSameQuarter"),
        require("date-fns/isSameYear"),
        require("date-fns/isValid"),
        require("date-fns/isWithinInterval"),
        require("date-fns/max"),
        require("date-fns/min"),
        require("date-fns/parse"),
        require("date-fns/parseISO"),
        require("date-fns/set"),
        require("date-fns/setHours"),
        require("date-fns/setMinutes"),
        require("date-fns/setMonth"),
        require("date-fns/setQuarter"),
        require("date-fns/setSeconds"),
        require("date-fns/setYear"),
        require("date-fns/startOfDay"),
        require("date-fns/startOfMonth"),
        require("date-fns/startOfQuarter"),
        require("date-fns/startOfWeek"),
        require("date-fns/startOfYear"),
        require("date-fns/subDays"),
        require("date-fns/subMonths"),
        require("date-fns/subQuarters"),
        require("date-fns/subWeeks"),
        require("date-fns/subYears"),
        require("date-fns/toDate"),
        require("@floating-ui/react"),
        require("react-dom"),
      )
    : typeof define === "function" && define.amd
      ? define(
          [
            "exports",
            "clsx",
            "react",
            "date-fns",
            "date-fns/addDays",
            "date-fns/addHours",
            "date-fns/addMinutes",
            "date-fns/addMonths",
            "date-fns/addQuarters",
            "date-fns/addSeconds",
            "date-fns/addWeeks",
            "date-fns/addYears",
            "date-fns/differenceInCalendarDays",
            "date-fns/differenceInCalendarMonths",
            "date-fns/differenceInCalendarQuarters",
            "date-fns/differenceInCalendarYears",
            "date-fns/endOfDay",
            "date-fns/endOfMonth",
            "date-fns/endOfWeek",
            "date-fns/endOfYear",
            "date-fns/format",
            "date-fns/getDate",
            "date-fns/getDay",
            "date-fns/getHours",
            "date-fns/getISOWeek",
            "date-fns/getMinutes",
            "date-fns/getMonth",
            "date-fns/getQuarter",
            "date-fns/getSeconds",
            "date-fns/getTime",
            "date-fns/getYear",
            "date-fns/isAfter",
            "date-fns/isBefore",
            "date-fns/isDate",
            "date-fns/isEqual",
            "date-fns/isSameDay",
            "date-fns/isSameMonth",
            "date-fns/isSameQuarter",
            "date-fns/isSameYear",
            "date-fns/isValid",
            "date-fns/isWithinInterval",
            "date-fns/max",
            "date-fns/min",
            "date-fns/parse",
            "date-fns/parseISO",
            "date-fns/set",
            "date-fns/setHours",
            "date-fns/setMinutes",
            "date-fns/setMonth",
            "date-fns/setQuarter",
            "date-fns/setSeconds",
            "date-fns/setYear",
            "date-fns/startOfDay",
            "date-fns/startOfMonth",
            "date-fns/startOfQuarter",
            "date-fns/startOfWeek",
            "date-fns/startOfYear",
            "date-fns/subDays",
            "date-fns/subMonths",
            "date-fns/subQuarters",
            "date-fns/subWeeks",
            "date-fns/subYears",
            "date-fns/toDate",
            "@floating-ui/react",
            "react-dom",
          ],
          factory,
        )
      : ((global =
          typeof globalThis !== "undefined" ? globalThis : global || self),
        factory(
          (global.DatePicker = {}),
          global.clsx,
          global.React,
          global.dateFns,
          global.addDays,
          global.addHours,
          global.addMinutes,
          global.addMonths,
          global.addQuarters,
          global.addSeconds,
          global.addWeeks,
          global.addYears,
          global.differenceInCalendarDays,
          global.differenceInCalendarMonths,
          global.differenceInCalendarQuarters,
          global.differenceInCalendarYears,
          global.endOfDay,
          global.endOfMonth,
          global.endOfWeek,
          global.endOfYear,
          global.format,
          global.getDate,
          global.getDay,
          global.getHours,
          global.getISOWeek,
          global.getMinutes,
          global.getMonth,
          global.getQuarter,
          global.getSeconds,
          global.getTime,
          global.getYear,
          global.isAfter,
          global.isBefore,
          global.isDate,
          global.isEqual$1,
          global.isSameDay$1,
          global.isSameMonth$1,
          global.isSameQuarter$1,
          global.isSameYear$1,
          global.isValid$1,
          global.isWithinInterval,
          global.max,
          global.min,
          global.parse,
          global.parseISO,
          global.set,
          global.setHours,
          global.setMinutes,
          global.setMonth,
          global.setQuarter,
          global.setSeconds,
          global.setYear,
          global.startOfDay,
          global.startOfMonth,
          global.startOfQuarter,
          global.startOfWeek,
          global.startOfYear,
          global.subDays,
          global.subMonths,
          global.subQuarters,
          global.subWeeks,
          global.subYears,
          global.toDate,
          global.react,
          global.ReactDOM,
        ));
})(
  this,
  function (
    exports,
    clsx,
    React,
    dateFns,
    addDays,
    addHours,
    addMinutes,
    addMonths,
    addQuarters,
    addSeconds,
    addWeeks,
    addYears,
    differenceInCalendarDays,
    differenceInCalendarMonths,
    differenceInCalendarQuarters,
    differenceInCalendarYears,
    endOfDay,
    endOfMonth,
    endOfWeek,
    endOfYear,
    format,
    getDate,
    getDay,
    getHours,
    getISOWeek,
    getMinutes,
    getMonth,
    getQuarter,
    getSeconds,
    getTime,
    getYear,
    isAfter,
    isBefore,
    isDate,
    isEqual$1,
    isSameDay$1,
    isSameMonth$1,
    isSameQuarter$1,
    isSameYear$1,
    isValid$1,
    isWithinInterval,
    max,
    min,
    parse,
    parseISO,
    set,
    setHours,
    setMinutes,
    setMonth,
    setQuarter,
    setSeconds,
    setYear,
    startOfDay,
    startOfMonth,
    startOfQuarter,
    startOfWeek,
    startOfYear,
    subDays,
    subMonths,
    subQuarters,
    subWeeks,
    subYears,
    toDate,
    react,
    ReactDOM,
  ) {
    "use strict";

    function _interopDefaultCompat(e) {
      return e && typeof e === "object" && "default" in e ? e : { default: e };
    }

    var React__default = /*#__PURE__*/ _interopDefaultCompat(React);
    var ReactDOM__default = /*#__PURE__*/ _interopDefaultCompat(ReactDOM);

    /******************************************************************************
    Copyright (c) Microsoft Corporation.

    Permission to use, copy, modify, and/or distribute this software for any
    purpose with or without fee is hereby granted.

    THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
    REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
    AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
    INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
    LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
    OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
    PERFORMANCE OF THIS SOFTWARE.
    ***************************************************************************** */
    /* global Reflect, Promise, SuppressedError, Symbol, Iterator */

    var _extendStatics = function extendStatics(d, b) {
      _extendStatics =
        Object.setPrototypeOf ||
        ({
          __proto__: [],
        } instanceof Array &&
          function (d, b) {
            d.__proto__ = b;
          }) ||
        function (d, b) {
          for (var p in b)
            if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p];
        };
      return _extendStatics(d, b);
    };
    function __extends(d, b) {
      if (typeof b !== "function" && b !== null)
        throw new TypeError(
          "Class extends value " + String(b) + " is not a constructor or null",
        );
      _extendStatics(d, b);
      function __() {
        this.constructor = d;
      }
      d.prototype =
        b === null
          ? Object.create(b)
          : ((__.prototype = b.prototype), new __());
    }
    var _assign = function __assign() {
      _assign =
        Object.assign ||
        function __assign(t) {
          for (var s, i = 1, n = arguments.length; i < n; i++) {
            s = arguments[i];
            for (var p in s)
              if (Object.prototype.hasOwnProperty.call(s, p)) t[p] = s[p];
          }
          return t;
        };
      return _assign.apply(this, arguments);
    };
    function __spreadArray(to, from, pack) {
      if (pack || arguments.length === 2)
        for (var i = 0, l = from.length, ar; i < l; i++) {
          if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
          }
        }
      return to.concat(ar || Array.prototype.slice.call(from));
    }
    typeof SuppressedError === "function"
      ? SuppressedError
      : function (error, suppressed, message) {
          var e = new Error(message);
          return (
            (e.name = "SuppressedError"),
            (e.error = error),
            (e.suppressed = suppressed),
            e
          );
        };

    var CalendarContainer = function (_a) {
      var _b = _a.showTimeSelectOnly,
        showTimeSelectOnly = _b === void 0 ? false : _b,
        _c = _a.showTime,
        showTime = _c === void 0 ? false : _c,
        className = _a.className,
        children = _a.children;
      var ariaLabel = showTimeSelectOnly
        ? "Choose Time"
        : "Choose Date".concat(showTime ? " and Time" : "");
      return React__default.default.createElement(
        "div",
        {
          className: className,
          role: "dialog",
          "aria-label": ariaLabel,
          "aria-modal": "true",
        },
        children,
      );
    };

    var useDetectClickOutside = function (onClickOutside, ignoreClass) {
      var ref = React.useRef(null);
      var onClickOutsideRef = React.useRef(onClickOutside);
      onClickOutsideRef.current = onClickOutside;
      var handleClickOutside = React.useCallback(
        function (event) {
          var _a;
          if (ref.current && !ref.current.contains(event.target)) {
            if (
              !(
                ignoreClass &&
                event.target instanceof HTMLElement &&
                event.target.classList.contains(ignoreClass)
              )
            ) {
              (_a = onClickOutsideRef.current) === null || _a === void 0
                ? void 0
                : _a.call(onClickOutsideRef, event);
            }
          }
        },
        [ignoreClass],
      );
      React.useEffect(
        function () {
          document.addEventListener("mousedown", handleClickOutside);
          return function () {
            document.removeEventListener("mousedown", handleClickOutside);
          };
        },
        [handleClickOutside],
      );
      return ref;
    };
    var ClickOutsideWrapper = function (_a) {
      var children = _a.children,
        onClickOutside = _a.onClickOutside,
        className = _a.className,
        containerRef = _a.containerRef,
        style = _a.style,
        ignoreClass = _a.ignoreClass;
      var detectRef = useDetectClickOutside(onClickOutside, ignoreClass);
      return React__default.default.createElement(
        "div",
        {
          className: className,
          style: style,
          ref: function (node) {
            detectRef.current = node;
            if (containerRef) {
              containerRef.current = node;
            }
          },
        },
        children,
      );
    };

    var KeyType;
    (function (KeyType) {
      KeyType["ArrowUp"] = "ArrowUp";
      KeyType["ArrowDown"] = "ArrowDown";
      KeyType["ArrowLeft"] = "ArrowLeft";
      KeyType["ArrowRight"] = "ArrowRight";
      KeyType["PageUp"] = "PageUp";
      KeyType["PageDown"] = "PageDown";
      KeyType["Home"] = "Home";
      KeyType["End"] = "End";
      KeyType["Enter"] = "Enter";
      KeyType["Space"] = " ";
      KeyType["Tab"] = "Tab";
      KeyType["Escape"] = "Escape";
      KeyType["Backspace"] = "Backspace";
      KeyType["X"] = "x";
    })(KeyType || (KeyType = {}));
    function getLocaleScope() {
      // Use this cast to avoid messing with users globalThis (like window) and the rest of keys in the globalThis object we don't care about
      var scope = typeof window !== "undefined" ? window : globalThis;
      return scope;
    }
    var DEFAULT_YEAR_ITEM_NUMBER = 12;
    // This RegExp catches symbols escaped by quotes, and also
    // sequences of symbols P, p, and the combinations like `PPPPPPPppppp`
    var longFormattingTokensRegExp = /P+p+|P+|p+|''|'(''|[^'])+('|$)|./g;
    // ** Date Constructors **
    function newDate(value) {
      if (value == null) {
        return new Date();
      }
      var d =
        typeof value === "string"
          ? parseISO.parseISO(value)
          : toDate.toDate(value);
      return isValid(d) ? d : new Date();
    }
    /**
     * Parses a date.
     *
     * @param value - The string representing the Date in a parsable form, e.g., ISO 1861
     * @param dateFormat - The date format.
     * @param locale - The locale.
     * @param strictParsing - The strict parsing flag.
     * @param minDate - The minimum date.
     * @returns - The parsed date or null.
     */
    function parseDate(value, dateFormat, locale, strictParsing, minDate) {
      var _a;
      var parsedDate = null;
      var localeObject =
        getLocaleObject(locale) || getLocaleObject(getDefaultLocale());
      var strictParsingValueMatch = true;
      if (Array.isArray(dateFormat)) {
        dateFormat.forEach(function (df) {
          var tryParseDate = parse.parse(value, df, new Date(), {
            locale: localeObject,
            useAdditionalWeekYearTokens: true,
            useAdditionalDayOfYearTokens: true,
          });
          if (strictParsing) {
            strictParsingValueMatch =
              isValid(tryParseDate, minDate) &&
              value === formatDate(tryParseDate, df, locale);
          }
          if (isValid(tryParseDate, minDate) && strictParsingValueMatch) {
            parsedDate = tryParseDate;
          }
        });
        return parsedDate;
      }
      parsedDate = parse.parse(value, dateFormat, new Date(), {
        locale: localeObject,
        useAdditionalWeekYearTokens: true,
        useAdditionalDayOfYearTokens: true,
      });
      if (strictParsing) {
        strictParsingValueMatch =
          isValid(parsedDate) &&
          value === formatDate(parsedDate, dateFormat, locale);
      } else if (!isValid(parsedDate)) {
        var format_1 = (
          (_a = dateFormat.match(longFormattingTokensRegExp)) !== null &&
          _a !== void 0
            ? _a
            : []
        )
          .map(function (substring) {
            var firstCharacter = substring[0];
            if (firstCharacter === "p" || firstCharacter === "P") {
              // The type in date-fns is `Record<string, LongFormatter>` so we can do our firstCharacter a bit loos but I don't think that this is a good idea
              var longFormatter = format.longFormatters[firstCharacter];
              return localeObject
                ? longFormatter(substring, localeObject.formatLong)
                : firstCharacter;
            }
            return substring;
          })
          .join("");
        if (value.length > 0) {
          parsedDate = parse.parse(
            value,
            format_1.slice(0, value.length),
            new Date(),
            {
              useAdditionalWeekYearTokens: true,
              useAdditionalDayOfYearTokens: true,
            },
          );
        }
        if (!isValid(parsedDate)) {
          parsedDate = new Date(value);
        }
      }
      return isValid(parsedDate) && strictParsingValueMatch ? parsedDate : null;
    }
    /**
     * Checks if a given date is valid and not before the minimum date.
     * @param date - The date to be checked.
     * @param minDate - The minimum date allowed. If not provided, defaults to "1/1/1800".
     * @returns A boolean value indicating whether the date is valid and not before the minimum date.
     */
    function isValid(date, minDate) {
      /* the fallback date is essential to not break test case
       * `should auto update calendar when the updated date text is after props.minDate`
       * and backward compatibility respectfully
       */
      return (
        isValid$1.isValid(date) &&
        !isBefore.isBefore(
          date,
          minDate !== null && minDate !== void 0
            ? minDate
            : new Date("1/1/1800"),
        )
      );
    }
    // ** Date Formatting **
    /**
     * Formats a date.
     *
     * @param date - The date.
     * @param formatStr - The format string.
     * @param locale - The locale.
     * @returns - The formatted date.
     */
    function formatDate(date, formatStr, locale) {
      if (locale === "en") {
        return format.format(date, formatStr, {
          useAdditionalWeekYearTokens: true,
          useAdditionalDayOfYearTokens: true,
        });
      }
      var localeObj = locale ? getLocaleObject(locale) : undefined;
      if (locale && !localeObj) {
        console.warn(
          'A locale object was not found for the provided string ["'.concat(
            locale,
            '"].',
          ),
        );
      }
      if (
        !localeObj &&
        !!getDefaultLocale() &&
        !!getLocaleObject(getDefaultLocale())
      ) {
        localeObj = getLocaleObject(getDefaultLocale());
      }
      return format.format(date, formatStr, {
        locale: localeObj,
        useAdditionalWeekYearTokens: true,
        useAdditionalDayOfYearTokens: true,
      });
    }
    /**
     * Safely formats a date.
     *
     * @param date - The date.
     * @param options - An object containing the dateFormat and locale.
     * @returns - The formatted date or an empty string.
     */
    function safeDateFormat(date, _a) {
      var dateFormat = _a.dateFormat,
        locale = _a.locale;
      var formatStr =
        Array.isArray(dateFormat) && dateFormat.length > 0
          ? dateFormat[0]
          : dateFormat; // Cast to string because it's impossible to get `string | string[] | undefined` here and typescript doesn't know that
      return (date && formatDate(date, formatStr, locale)) || "";
    }
    /**
     * Safely formats a date range.
     *
     * @param startDate - The start date.
     * @param endDate - The end date.
     * @param props - The props.
     * @returns - The formatted date range or an empty string.
     */
    function safeDateRangeFormat(startDate, endDate, props) {
      if (!startDate) {
        return "";
      }
      var formattedStartDate = safeDateFormat(startDate, props);
      var formattedEndDate = endDate ? safeDateFormat(endDate, props) : "";
      return "".concat(formattedStartDate, " - ").concat(formattedEndDate);
    }
    /**
     * Safely formats multiple dates.
     *
     * @param dates - The dates.
     * @param props - The props.
     * @returns - The formatted dates or an empty string.
     */
    function safeMultipleDatesFormat(dates, props) {
      if (!(dates === null || dates === void 0 ? void 0 : dates.length)) {
        return "";
      }
      var formattedFirstDate = dates[0] ? safeDateFormat(dates[0], props) : "";
      if (dates.length === 1) {
        return formattedFirstDate;
      }
      if (dates.length === 2 && dates[1]) {
        var formattedSecondDate = safeDateFormat(dates[1], props);
        return "".concat(formattedFirstDate, ", ").concat(formattedSecondDate);
      }
      var extraDatesCount = dates.length - 1;
      return "".concat(formattedFirstDate, " (+").concat(extraDatesCount, ")");
    }
    // ** Date Setters **
    /**
     * Sets the time for a given date.
     *
     * @param date - The date.
     * @param time - An object containing the hour, minute, and second.
     * @returns - The date with the time set.
     */
    function setTime(date, _a) {
      var _b = _a.hour,
        hour = _b === void 0 ? 0 : _b,
        _c = _a.minute,
        minute = _c === void 0 ? 0 : _c,
        _d = _a.second,
        second = _d === void 0 ? 0 : _d;
      return setHours.setHours(
        setMinutes.setMinutes(setSeconds.setSeconds(date, second), minute),
        hour,
      );
    }
    /**
     * Gets the week of the year for a given date.
     *
     * @param date - The date.
     * @returns - The week of the year.
     */
    function getWeek(date) {
      return getISOWeek.getISOWeek(date);
    }
    /**
     * Gets the day of the week code for a given day.
     *
     * @param day - The day.
     * @param locale - The locale.
     * @returns - The day of the week code.
     */
    function getDayOfWeekCode(day, locale) {
      return formatDate(day, "ddd", locale);
    }
    // *** Start of ***
    /**
     * Gets the start of the day for a given date.
     *
     * @param date - The date.
     * @returns - The start of the day.
     */
    function getStartOfDay(date) {
      return startOfDay.startOfDay(date);
    }
    /**
     * Gets the start of the week for a given date.
     *
     * @param date - The date.
     * @param locale - The locale.
     * @param calendarStartDay - The day the calendar starts on.
     * @returns - The start of the week.
     */
    function getStartOfWeek(date, locale, calendarStartDay) {
      var localeObj = locale
        ? getLocaleObject(locale)
        : getLocaleObject(getDefaultLocale());
      return startOfWeek.startOfWeek(date, {
        locale: localeObj,
        weekStartsOn: calendarStartDay,
      });
    }
    /**
     * Gets the start of the month for a given date.
     *
     * @param date - The date.
     * @returns - The start of the month.
     */
    function getStartOfMonth(date) {
      return startOfMonth.startOfMonth(date);
    }
    /**
     * Gets the start of the year for a given date.
     *
     * @param date - The date.
     * @returns - The start of the year.
     */
    function getStartOfYear(date) {
      return startOfYear.startOfYear(date);
    }
    /**
     * Gets the start of the quarter for a given date.
     *
     * @param date - The date.
     * @returns - The start of the quarter.
     */
    function getStartOfQuarter(date) {
      return startOfQuarter.startOfQuarter(date);
    }
    /**
     * Gets the start of today.
     *
     * @returns - The start of today.
     */
    function getStartOfToday() {
      return startOfDay.startOfDay(newDate());
    }
    // *** End of ***
    /**
     * Gets the end of the day for a given date.
     *
     * @param date - The date.
     * @returns - The end of the day.
     */
    function getEndOfDay(date) {
      return endOfDay.endOfDay(date);
    }
    /**
     * Gets the end of the week for a given date.
     *
     * @param date - The date.
     * @returns - The end of the week.
     */
    function getEndOfWeek(date) {
      return endOfWeek.endOfWeek(date);
    }
    /**
     * Gets the end of the month for a given date.
     *
     * @param date - The date.
     * @returns - The end of the month.
     */
    function getEndOfMonth(date) {
      return endOfMonth.endOfMonth(date);
    }
    /**
     * Checks if two dates are in the same year.
     *
     * @param date1 - The first date.
     * @param date2 - The second date.
     * @returns - True if the dates are in the same year, false otherwise.
     */
    function isSameYear(date1, date2) {
      if (date1 && date2) {
        return isSameYear$1.isSameYear(date1, date2);
      } else {
        return !date1 && !date2;
      }
    }
    /**
     * Checks if two dates are in the same month.
     *
     * @param date1 - The first date.
     * @param date2 - The second date.
     * @returns - True if the dates are in the same month, false otherwise.
     */
    function isSameMonth(date1, date2) {
      if (date1 && date2) {
        return isSameMonth$1.isSameMonth(date1, date2);
      } else {
        return !date1 && !date2;
      }
    }
    /**
     * Checks if two dates are in the same quarter.
     *
     * @param date1 - The first date.
     * @param date2 - The second date.
     * @returns - True if the dates are in the same quarter, false otherwise.
     */
    function isSameQuarter(date1, date2) {
      if (date1 && date2) {
        return isSameQuarter$1.isSameQuarter(date1, date2);
      } else {
        return !date1 && !date2;
      }
    }
    /**
     * Checks if two dates are on the same day.
     *
     * @param date1 - The first date.
     * @param date2 - The second date.
     * @returns - True if the dates are on the same day, false otherwise.
     */
    function isSameDay(date1, date2) {
      if (date1 && date2) {
        return isSameDay$1.isSameDay(date1, date2);
      } else {
        return !date1 && !date2;
      }
    }
    /**
     * Checks if two dates are equal.
     *
     * @param date1 - The first date.
     * @param date2 - The second date.
     * @returns - True if the dates are equal, false otherwise.
     */
    function isEqual(date1, date2) {
      if (date1 && date2) {
        return isEqual$1.isEqual(date1, date2);
      } else {
        return !date1 && !date2;
      }
    }
    /**
     * Checks if a day is within a date range.
     *
     * @param day - The day to check.
     * @param startDate - The start date of the range.
     * @param endDate - The end date of the range.
     * @returns - True if the day is within the range, false otherwise.
     */
    function isDayInRange(day, startDate, endDate) {
      var valid;
      var start = startOfDay.startOfDay(startDate);
      var end = endOfDay.endOfDay(endDate);
      try {
        valid = isWithinInterval.isWithinInterval(day, {
          start: start,
          end: end,
        });
      } catch (err) {
        valid = false;
      }
      return valid;
    }
    // ** Date Localization **
    /**
     * Registers a locale.
     *
     * @param localeName - The name of the locale.
     * @param localeData - The data of the locale.
     */
    function registerLocale(localeName, localeData) {
      var scope = getLocaleScope();
      if (!scope.__localeData__) {
        scope.__localeData__ = {};
      }
      scope.__localeData__[localeName] = localeData;
    }
    /**
     * Sets the default locale.
     *
     * @param localeName - The name of the locale.
     */
    function setDefaultLocale(localeName) {
      var scope = getLocaleScope();
      scope.__localeId__ = localeName;
    }
    /**
     * Gets the default locale.
     *
     * @returns - The default locale.
     */
    function getDefaultLocale() {
      var scope = getLocaleScope();
      return scope.__localeId__;
    }
    /**
     * Gets the locale object.
     *
     * @param localeSpec - The locale specification.
     * @returns - The locale object.
     */
    function getLocaleObject(localeSpec) {
      if (typeof localeSpec === "string") {
        // Treat it as a locale name registered by registerLocale
        var scope = getLocaleScope();
        // Null was replaced with undefined to avoid type coercion
        return scope.__localeData__
          ? scope.__localeData__[localeSpec]
          : undefined;
      } else {
        // Treat it as a raw date-fns locale object
        return localeSpec;
      }
    }
    /**
     * Formats the weekday in a given locale.
     *
     * @param date - The date to format.
     * @param formatFunc - The formatting function.
     * @param locale - The locale to use for formatting.
     * @returns - The formatted weekday.
     */
    function getFormattedWeekdayInLocale(date, formatFunc, locale) {
      return formatFunc(formatDate(date, "EEEE", locale));
    }
    /**
     * Gets the minimum weekday in a given locale.
     *
     * @param date - The date to format.
     * @param locale - The locale to use for formatting.
     * @returns - The minimum weekday.
     */
    function getWeekdayMinInLocale(date, locale) {
      return formatDate(date, "EEEEEE", locale);
    }
    /**
     * Gets the short weekday in a given locale.
     *
     * @param date - The date to format.
     * @param locale - The locale to use for formatting.
     * @returns - The short weekday.
     */
    function getWeekdayShortInLocale(date, locale) {
      return formatDate(date, "EEE", locale);
    }
    /**
     * Gets the month in a given locale.
     *
     * @param month - The month to format.
     * @param locale - The locale to use for formatting.
     * @returns - The month.
     */
    function getMonthInLocale(month, locale) {
      return formatDate(setMonth.setMonth(newDate(), month), "LLLL", locale);
    }
    /**
     * Gets the short month in a given locale.
     *
     * @param month - The month to format.
     * @param locale - The locale to use for formatting.
     * @returns - The short month.
     */
    function getMonthShortInLocale(month, locale) {
      return formatDate(setMonth.setMonth(newDate(), month), "LLL", locale);
    }
    /**
     * Gets the short quarter in a given locale.
     *
     * @param quarter - The quarter to format.
     * @param locale - The locale to use for formatting.
     * @returns - The short quarter.
     */
    function getQuarterShortInLocale(quarter, locale) {
      return formatDate(
        setQuarter.setQuarter(newDate(), quarter),
        "QQQ",
        locale,
      );
    }
    /**
     * Checks if a day is disabled.
     *
     * @param day - The day to check.
     * @param options - The options to consider when checking.
     * @returns - Returns true if the day is disabled, false otherwise.
     */
    function isDayDisabled(day, _a) {
      var _b = _a === void 0 ? {} : _a,
        minDate = _b.minDate,
        maxDate = _b.maxDate,
        excludeDates = _b.excludeDates,
        excludeDateIntervals = _b.excludeDateIntervals,
        includeDates = _b.includeDates,
        includeDateIntervals = _b.includeDateIntervals,
        filterDate = _b.filterDate;
      return (
        isOutOfBounds(day, { minDate: minDate, maxDate: maxDate }) ||
        (excludeDates &&
          excludeDates.some(function (excludeDate) {
            if (excludeDate instanceof Date) {
              return isSameDay(day, excludeDate);
            } else {
              return isSameDay(day, excludeDate.date);
            }
          })) ||
        (excludeDateIntervals &&
          excludeDateIntervals.some(function (_a) {
            var start = _a.start,
              end = _a.end;
            return isWithinInterval.isWithinInterval(day, {
              start: start,
              end: end,
            });
          })) ||
        (includeDates &&
          !includeDates.some(function (includeDate) {
            return isSameDay(day, includeDate);
          })) ||
        (includeDateIntervals &&
          !includeDateIntervals.some(function (_a) {
            var start = _a.start,
              end = _a.end;
            return isWithinInterval.isWithinInterval(day, {
              start: start,
              end: end,
            });
          })) ||
        (filterDate && !filterDate(newDate(day))) ||
        false
      );
    }
    /**
     * Checks if a day is excluded.
     *
     * @param day - The day to check.
     * @param options - The options to consider when checking.
     * @returns - Returns true if the day is excluded, false otherwise.
     */
    function isDayExcluded(day, _a) {
      var _b = _a === void 0 ? {} : _a,
        excludeDates = _b.excludeDates,
        excludeDateIntervals = _b.excludeDateIntervals;
      if (excludeDateIntervals && excludeDateIntervals.length > 0) {
        return excludeDateIntervals.some(function (_a) {
          var start = _a.start,
            end = _a.end;
          return isWithinInterval.isWithinInterval(day, {
            start: start,
            end: end,
          });
        });
      }
      return (
        (excludeDates &&
          excludeDates.some(function (excludeDate) {
            var _a;
            if (excludeDate instanceof Date) {
              return isSameDay(day, excludeDate);
            } else {
              return isSameDay(
                day,
                (_a = excludeDate.date) !== null && _a !== void 0
                  ? _a
                  : new Date(),
              );
            }
          })) ||
        false
      );
    }
    function isMonthDisabled(month, _a) {
      var _b = _a === void 0 ? {} : _a,
        minDate = _b.minDate,
        maxDate = _b.maxDate,
        excludeDates = _b.excludeDates,
        includeDates = _b.includeDates,
        filterDate = _b.filterDate;
      return (
        isOutOfBounds(month, {
          minDate: minDate ? startOfMonth.startOfMonth(minDate) : undefined,
          maxDate: maxDate ? endOfMonth.endOfMonth(maxDate) : undefined,
        }) ||
        (excludeDates === null || excludeDates === void 0
          ? void 0
          : excludeDates.some(function (excludeDate) {
              return isSameMonth(
                month,
                excludeDate instanceof Date ? excludeDate : excludeDate.date,
              );
            })) ||
        (includeDates &&
          !includeDates.some(function (includeDate) {
            return isSameMonth(month, includeDate);
          })) ||
        (filterDate && !filterDate(newDate(month))) ||
        false
      );
    }
    function isMonthInRange(startDate, endDate, m, day) {
      var startDateYear = getYear.getYear(startDate);
      var startDateMonth = getMonth.getMonth(startDate);
      var endDateYear = getYear.getYear(endDate);
      var endDateMonth = getMonth.getMonth(endDate);
      var dayYear = getYear.getYear(day);
      if (startDateYear === endDateYear && startDateYear === dayYear) {
        return startDateMonth <= m && m <= endDateMonth;
      } else if (startDateYear < endDateYear) {
        return (
          (dayYear === startDateYear && startDateMonth <= m) ||
          (dayYear === endDateYear && endDateMonth >= m) ||
          (dayYear < endDateYear && dayYear > startDateYear)
        );
      }
      return false;
    }
    /**
     * To check if a date's month and year are disabled/excluded
     * @param date Date to check
     * @returns {boolean} true if month and year are disabled/excluded, false otherwise
     */
    function isMonthYearDisabled(date, _a) {
      var _b = _a === void 0 ? {} : _a,
        minDate = _b.minDate,
        maxDate = _b.maxDate,
        excludeDates = _b.excludeDates,
        includeDates = _b.includeDates;
      return (
        isOutOfBounds(date, { minDate: minDate, maxDate: maxDate }) ||
        (excludeDates &&
          excludeDates.some(function (excludedDate) {
            return isSameMonth(
              excludedDate instanceof Date ? excludedDate : excludedDate.date,
              date,
            );
          })) ||
        (includeDates &&
          !includeDates.some(function (includedDate) {
            return isSameMonth(includedDate, date);
          })) ||
        false
      );
    }
    function isQuarterDisabled(quarter, _a) {
      var _b = _a === void 0 ? {} : _a,
        minDate = _b.minDate,
        maxDate = _b.maxDate,
        excludeDates = _b.excludeDates,
        includeDates = _b.includeDates,
        filterDate = _b.filterDate;
      return (
        isOutOfBounds(quarter, { minDate: minDate, maxDate: maxDate }) ||
        (excludeDates === null || excludeDates === void 0
          ? void 0
          : excludeDates.some(function (excludeDate) {
              return isSameQuarter(
                quarter,
                excludeDate instanceof Date ? excludeDate : excludeDate.date,
              );
            })) ||
        (includeDates &&
          !includeDates.some(function (includeDate) {
            return isSameQuarter(quarter, includeDate);
          })) ||
        (filterDate && !filterDate(newDate(quarter))) ||
        false
      );
    }
    function isYearInRange(year, start, end) {
      if (!start || !end) return false;
      if (!isValid$1.isValid(start) || !isValid$1.isValid(end)) return false;
      var startYear = getYear.getYear(start);
      var endYear = getYear.getYear(end);
      return startYear <= year && endYear >= year;
    }
    function isYearDisabled(year, _a) {
      var _b = _a === void 0 ? {} : _a,
        minDate = _b.minDate,
        maxDate = _b.maxDate,
        excludeDates = _b.excludeDates,
        includeDates = _b.includeDates,
        filterDate = _b.filterDate;
      var date = new Date(year, 0, 1);
      return (
        isOutOfBounds(date, {
          minDate: minDate ? startOfYear.startOfYear(minDate) : undefined,
          maxDate: maxDate ? endOfYear.endOfYear(maxDate) : undefined,
        }) ||
        (excludeDates === null || excludeDates === void 0
          ? void 0
          : excludeDates.some(function (excludeDate) {
              return isSameYear(
                date,
                excludeDate instanceof Date ? excludeDate : excludeDate.date,
              );
            })) ||
        (includeDates &&
          !includeDates.some(function (includeDate) {
            return isSameYear(date, includeDate);
          })) ||
        (filterDate && !filterDate(newDate(date))) ||
        false
      );
    }
    function isQuarterInRange(startDate, endDate, q, day) {
      var startDateYear = getYear.getYear(startDate);
      var startDateQuarter = getQuarter.getQuarter(startDate);
      var endDateYear = getYear.getYear(endDate);
      var endDateQuarter = getQuarter.getQuarter(endDate);
      var dayYear = getYear.getYear(day);
      if (startDateYear === endDateYear && startDateYear === dayYear) {
        return startDateQuarter <= q && q <= endDateQuarter;
      } else if (startDateYear < endDateYear) {
        return (
          (dayYear === startDateYear && startDateQuarter <= q) ||
          (dayYear === endDateYear && endDateQuarter >= q) ||
          (dayYear < endDateYear && dayYear > startDateYear)
        );
      }
      return false;
    }
    function isOutOfBounds(day, _a) {
      var _b;
      var _c = _a === void 0 ? {} : _a,
        minDate = _c.minDate,
        maxDate = _c.maxDate;
      return (_b =
        (minDate &&
          differenceInCalendarDays.differenceInCalendarDays(day, minDate) <
            0) ||
        (maxDate &&
          differenceInCalendarDays.differenceInCalendarDays(day, maxDate) >
            0)) !== null && _b !== void 0
        ? _b
        : false;
    }
    function isTimeInList(time, times) {
      return times.some(function (listTime) {
        return (
          getHours.getHours(listTime) === getHours.getHours(time) &&
          getMinutes.getMinutes(listTime) === getMinutes.getMinutes(time) &&
          getSeconds.getSeconds(listTime) === getSeconds.getSeconds(time)
        );
      });
    }
    function isTimeDisabled(time, _a) {
      var _b = _a === void 0 ? {} : _a,
        excludeTimes = _b.excludeTimes,
        includeTimes = _b.includeTimes,
        filterTime = _b.filterTime;
      return (
        (excludeTimes && isTimeInList(time, excludeTimes)) ||
        (includeTimes && !isTimeInList(time, includeTimes)) ||
        (filterTime && !filterTime(time)) ||
        false
      );
    }
    function isTimeInDisabledRange(time, _a) {
      var minTime = _a.minTime,
        maxTime = _a.maxTime;
      if (!minTime || !maxTime) {
        throw new Error("Both minTime and maxTime props required");
      }
      var baseTime = newDate();
      baseTime = setHours.setHours(baseTime, getHours.getHours(time));
      baseTime = setMinutes.setMinutes(baseTime, getMinutes.getMinutes(time));
      baseTime = setSeconds.setSeconds(baseTime, getSeconds.getSeconds(time));
      var min = newDate();
      min = setHours.setHours(min, getHours.getHours(minTime));
      min = setMinutes.setMinutes(min, getMinutes.getMinutes(minTime));
      min = setSeconds.setSeconds(min, getSeconds.getSeconds(minTime));
      var max = newDate();
      max = setHours.setHours(max, getHours.getHours(maxTime));
      max = setMinutes.setMinutes(max, getMinutes.getMinutes(maxTime));
      max = setSeconds.setSeconds(max, getSeconds.getSeconds(maxTime));
      var valid;
      try {
        valid = !isWithinInterval.isWithinInterval(baseTime, {
          start: min,
          end: max,
        });
      } catch (err) {
        valid = false;
      }
      return valid;
    }
    function monthDisabledBefore(day, _a) {
      var _b = _a === void 0 ? {} : _a,
        minDate = _b.minDate,
        includeDates = _b.includeDates;
      var previousMonth = subMonths.subMonths(day, 1);
      return (
        (minDate &&
          differenceInCalendarMonths.differenceInCalendarMonths(
            minDate,
            previousMonth,
          ) > 0) ||
        (includeDates &&
          includeDates.every(function (includeDate) {
            return (
              differenceInCalendarMonths.differenceInCalendarMonths(
                includeDate,
                previousMonth,
              ) > 0
            );
          })) ||
        false
      );
    }
    function monthDisabledAfter(day, _a) {
      var _b = _a === void 0 ? {} : _a,
        maxDate = _b.maxDate,
        includeDates = _b.includeDates;
      var nextMonth = addMonths.addMonths(day, 1);
      return (
        (maxDate &&
          differenceInCalendarMonths.differenceInCalendarMonths(
            nextMonth,
            maxDate,
          ) > 0) ||
        (includeDates &&
          includeDates.every(function (includeDate) {
            return (
              differenceInCalendarMonths.differenceInCalendarMonths(
                nextMonth,
                includeDate,
              ) > 0
            );
          })) ||
        false
      );
    }
    function quarterDisabledBefore(date, _a) {
      var _b = _a === void 0 ? {} : _a,
        minDate = _b.minDate,
        includeDates = _b.includeDates;
      var firstDateOfYear = startOfYear.startOfYear(date);
      var previousQuarter = subQuarters.subQuarters(firstDateOfYear, 1);
      return (
        (minDate &&
          differenceInCalendarQuarters.differenceInCalendarQuarters(
            minDate,
            previousQuarter,
          ) > 0) ||
        (includeDates &&
          includeDates.every(function (includeDate) {
            return (
              differenceInCalendarQuarters.differenceInCalendarQuarters(
                includeDate,
                previousQuarter,
              ) > 0
            );
          })) ||
        false
      );
    }
    function quarterDisabledAfter(date, _a) {
      var _b = _a === void 0 ? {} : _a,
        maxDate = _b.maxDate,
        includeDates = _b.includeDates;
      var lastDateOfYear = endOfYear.endOfYear(date);
      var nextQuarter = addQuarters.addQuarters(lastDateOfYear, 1);
      return (
        (maxDate &&
          differenceInCalendarQuarters.differenceInCalendarQuarters(
            nextQuarter,
            maxDate,
          ) > 0) ||
        (includeDates &&
          includeDates.every(function (includeDate) {
            return (
              differenceInCalendarQuarters.differenceInCalendarQuarters(
                nextQuarter,
                includeDate,
              ) > 0
            );
          })) ||
        false
      );
    }
    function yearDisabledBefore(day, _a) {
      var _b = _a === void 0 ? {} : _a,
        minDate = _b.minDate,
        includeDates = _b.includeDates;
      var previousYear = subYears.subYears(day, 1);
      return (
        (minDate &&
          differenceInCalendarYears.differenceInCalendarYears(
            minDate,
            previousYear,
          ) > 0) ||
        (includeDates &&
          includeDates.every(function (includeDate) {
            return (
              differenceInCalendarYears.differenceInCalendarYears(
                includeDate,
                previousYear,
              ) > 0
            );
          })) ||
        false
      );
    }
    function yearsDisabledBefore(day, _a) {
      var _b = _a === void 0 ? {} : _a,
        minDate = _b.minDate,
        _c = _b.yearItemNumber,
        yearItemNumber = _c === void 0 ? DEFAULT_YEAR_ITEM_NUMBER : _c;
      var previousYear = getStartOfYear(subYears.subYears(day, yearItemNumber));
      var endPeriod = getYearsPeriod(previousYear, yearItemNumber).endPeriod;
      var minDateYear = minDate && getYear.getYear(minDate);
      return (minDateYear && minDateYear > endPeriod) || false;
    }
    function yearDisabledAfter(day, _a) {
      var _b = _a === void 0 ? {} : _a,
        maxDate = _b.maxDate,
        includeDates = _b.includeDates;
      var nextYear = addYears.addYears(day, 1);
      return (
        (maxDate &&
          differenceInCalendarYears.differenceInCalendarYears(
            nextYear,
            maxDate,
          ) > 0) ||
        (includeDates &&
          includeDates.every(function (includeDate) {
            return (
              differenceInCalendarYears.differenceInCalendarYears(
                nextYear,
                includeDate,
              ) > 0
            );
          })) ||
        false
      );
    }
    function yearsDisabledAfter(day, _a) {
      var _b = _a === void 0 ? {} : _a,
        maxDate = _b.maxDate,
        _c = _b.yearItemNumber,
        yearItemNumber = _c === void 0 ? DEFAULT_YEAR_ITEM_NUMBER : _c;
      var nextYear = addYears.addYears(day, yearItemNumber);
      var startPeriod = getYearsPeriod(nextYear, yearItemNumber).startPeriod;
      var maxDateYear = maxDate && getYear.getYear(maxDate);
      return (maxDateYear && maxDateYear < startPeriod) || false;
    }
    function getEffectiveMinDate(_a) {
      var minDate = _a.minDate,
        includeDates = _a.includeDates;
      if (includeDates && minDate) {
        var minDates = includeDates.filter(function (includeDate) {
          return (
            differenceInCalendarDays.differenceInCalendarDays(
              includeDate,
              minDate,
            ) >= 0
          );
        });
        return min.min(minDates);
      } else if (includeDates) {
        return min.min(includeDates);
      } else {
        return minDate;
      }
    }
    function getEffectiveMaxDate(_a) {
      var maxDate = _a.maxDate,
        includeDates = _a.includeDates;
      if (includeDates && maxDate) {
        var maxDates = includeDates.filter(function (includeDate) {
          return (
            differenceInCalendarDays.differenceInCalendarDays(
              includeDate,
              maxDate,
            ) <= 0
          );
        });
        return max.max(maxDates);
      } else if (includeDates) {
        return max.max(includeDates);
      } else {
        return maxDate;
      }
    }
    /**
     * Get a map of highlighted dates with their corresponding classes.
     * @param highlightDates The dates to highlight.
     * @param defaultClassName The default class to use for highlighting.
     * @returns A map with dates as keys and arrays of class names as values.
     */
    function getHighLightDaysMap(highlightDates, defaultClassName) {
      var _a;
      if (highlightDates === void 0) {
        highlightDates = [];
      }
      if (defaultClassName === void 0) {
        defaultClassName = "react-datepicker__day--highlighted";
      }
      var dateClasses = new Map();
      for (var i = 0, len = highlightDates.length; i < len; i++) {
        var obj = highlightDates[i];
        if (isDate.isDate(obj)) {
          var key = formatDate(obj, "MM.dd.yyyy");
          var classNamesArr = dateClasses.get(key) || [];
          if (!classNamesArr.includes(defaultClassName)) {
            classNamesArr.push(defaultClassName);
            dateClasses.set(key, classNamesArr);
          }
        } else if (typeof obj === "object") {
          var keys = Object.keys(obj);
          var className = (_a = keys[0]) !== null && _a !== void 0 ? _a : "";
          var arrOfDates = obj[className];
          if (typeof className === "string" && Array.isArray(arrOfDates)) {
            for (var k = 0, len_1 = arrOfDates.length; k < len_1; k++) {
              var dateK = arrOfDates[k];
              if (dateK) {
                var key = formatDate(dateK, "MM.dd.yyyy");
                var classNamesArr = dateClasses.get(key) || [];
                if (!classNamesArr.includes(className)) {
                  classNamesArr.push(className);
                  dateClasses.set(key, classNamesArr);
                }
              }
            }
          }
        }
      }
      return dateClasses;
    }
    /**
     * Compare the two arrays
     * @param array1 The first array to compare.
     * @param array2 The second array to compare.
     * @returns true, if the passed arrays are equal, false otherwise.
     */
    function arraysAreEqual(array1, array2) {
      if (array1.length !== array2.length) {
        return false;
      }
      return array1.every(function (value, index) {
        return value === array2[index];
      });
    }
    /**
     * Assign the custom class to each date
     * @param holidayDates array of object containing date and name of the holiday
     * @param defaultClassName className to be added.
     * @returns Map containing date as key and array of className and holiday name as value
     */
    function getHolidaysMap(holidayDates, defaultClassName) {
      if (holidayDates === void 0) {
        holidayDates = [];
      }
      if (defaultClassName === void 0) {
        defaultClassName = "react-datepicker__day--holidays";
      }
      var dateClasses = new Map();
      holidayDates.forEach(function (holiday) {
        var dateObj = holiday.date,
          holidayName = holiday.holidayName;
        if (!isDate.isDate(dateObj)) {
          return;
        }
        var key = formatDate(dateObj, "MM.dd.yyyy");
        var classNamesObj = dateClasses.get(key) || {
          className: "",
          holidayNames: [],
        };
        if (
          "className" in classNamesObj &&
          classNamesObj["className"] === defaultClassName &&
          arraysAreEqual(classNamesObj["holidayNames"], [holidayName])
        ) {
          return;
        }
        classNamesObj["className"] = defaultClassName;
        var holidayNameArr = classNamesObj["holidayNames"];
        classNamesObj["holidayNames"] = holidayNameArr
          ? __spreadArray(
              __spreadArray([], holidayNameArr, true),
              [holidayName],
              false,
            )
          : [holidayName];
        dateClasses.set(key, classNamesObj);
      });
      return dateClasses;
    }
    /**
     * Determines the times to inject after a given start of day, current time, and multiplier.
     * @param startOfDay The start of the day.
     * @param currentTime The current time.
     * @param currentMultiplier The current multiplier.
     * @param intervals The intervals.
     * @param injectedTimes The times to potentially inject.
     * @returns An array of times to inject.
     */
    function timesToInjectAfter(
      startOfDay,
      currentTime,
      currentMultiplier,
      intervals,
      injectedTimes,
    ) {
      var l = injectedTimes.length;
      var times = [];
      for (var i = 0; i < l; i++) {
        var injectedTime = startOfDay;
        var injectedTimeValue = injectedTimes[i];
        if (injectedTimeValue) {
          injectedTime = addHours.addHours(
            injectedTime,
            getHours.getHours(injectedTimeValue),
          );
          injectedTime = addMinutes.addMinutes(
            injectedTime,
            getMinutes.getMinutes(injectedTimeValue),
          );
          injectedTime = addSeconds.addSeconds(
            injectedTime,
            getSeconds.getSeconds(injectedTimeValue),
          );
        }
        var nextTime = addMinutes.addMinutes(
          startOfDay,
          (currentMultiplier + 1) * intervals,
        );
        if (
          isAfter.isAfter(injectedTime, currentTime) &&
          isBefore.isBefore(injectedTime, nextTime) &&
          injectedTimeValue != undefined
        ) {
          times.push(injectedTimeValue);
        }
      }
      return times;
    }
    /**
     * Adds a leading zero to a number if it's less than 10.
     * @param i The number to add a leading zero to.
     * @returns The number as a string, with a leading zero if it was less than 10.
     */
    function addZero(i) {
      return i < 10 ? "0".concat(i) : "".concat(i);
    }
    /**
     * Gets the start and end years for a period.
     * @param date The date to get the period for.
     * @param yearItemNumber The number of years in the period. Defaults to DEFAULT_YEAR_ITEM_NUMBER.
     * @returns An object with the start and end years for the period.
     */
    function getYearsPeriod(date, yearItemNumber) {
      if (yearItemNumber === void 0) {
        yearItemNumber = DEFAULT_YEAR_ITEM_NUMBER;
      }
      var endPeriod =
        Math.ceil(getYear.getYear(date) / yearItemNumber) * yearItemNumber;
      var startPeriod = endPeriod - (yearItemNumber - 1);
      return { startPeriod: startPeriod, endPeriod: endPeriod };
    }
    /**
     * Gets the number of hours in a day.
     * @param d The date to get the number of hours for.
     * @returns The number of hours in the day.
     */
    function getHoursInDay(d) {
      var startOfDay = new Date(d.getFullYear(), d.getMonth(), d.getDate());
      var startOfTheNextDay = new Date(
        d.getFullYear(),
        d.getMonth(),
        d.getDate(),
        24,
      );
      return Math.round((+startOfTheNextDay - +startOfDay) / 3600000);
    }
    /**
     * Returns the start of the minute for the given date
     *
     * NOTE: this function is a DST and timezone-safe analog of `date-fns/startOfMinute`
     * do not make changes unless you know what you're doing
     *
     * See comments on https://github.com/Hacker0x01/react-datepicker/pull/4244
     * for more details
     *
     * @param d date
     * @returns start of the minute
     */
    function startOfMinute(d) {
      var seconds = d.getSeconds();
      var milliseconds = d.getMilliseconds();
      return toDate.toDate(d.getTime() - seconds * 1000 - milliseconds);
    }
    /**
     * Returns whether the given dates are in the same minute
     *
     * This function is a DST and timezone-safe analog of `date-fns/isSameMinute`
     *
     * @param d1
     * @param d2
     * @returns
     */
    function isSameMinute(d1, d2) {
      return startOfMinute(d1).getTime() === startOfMinute(d2).getTime();
    }
    /**
     * Returns a new datetime object representing the input date with midnight time
     * @param date The date to get the midnight time for
     * @returns A new datetime object representing the input date with midnight time
     */
    function getMidnightDate(date) {
      if (!isDate.isDate(date)) {
        throw new Error("Invalid date");
      }
      var dateWithoutTime = new Date(date);
      dateWithoutTime.setHours(0, 0, 0, 0);
      return dateWithoutTime;
    }
    /**
     * Is the first date before the second one?
     * @param date The date that should be before the other one to return true
     * @param dateToCompare The date to compare with
     * @returns The first date is before the second date
     *
     * Note:
     *  This function considers the mid-night of the given dates for comparison.
     *  It evaluates whether date is before dateToCompare based on their mid-night timestamps.
     */
    function isDateBefore(date, dateToCompare) {
      if (!isDate.isDate(date) || !isDate.isDate(dateToCompare)) {
        throw new Error("Invalid date received");
      }
      var midnightDate = getMidnightDate(date);
      var midnightDateToCompare = getMidnightDate(dateToCompare);
      return isBefore.isBefore(midnightDate, midnightDateToCompare);
    }
    /**
     * Checks if the space key was pressed down.
     *
     * @param event - The keyboard event.
     * @returns - Returns true if the space key was pressed down, false otherwise.
     */
    function isSpaceKeyDown(event) {
      return event.key === KeyType.Space;
    }

    /**
     * `InputTime` is a React component that manages time input.
     *
     * @component
     * @example
     * <InputTime timeString="12:00" />
     *
     * @param props - The properties that define the `InputTime` component.
     * @param props.onChange - Function that is called when the date changes.
     * @param props.date - The initial date value.
     * @param props.timeString - The initial time string value.
     * @param props.timeInputLabel - The label for the time input.
     * @param props.customTimeInput - An optional custom time input element.
     *
     * @returns The `InputTime` component.
     */
    var InputTime = /** @class */ (function (_super) {
      __extends(InputTime, _super);
      function InputTime(props) {
        var _this = _super.call(this, props) || this;
        _this.inputRef = React__default.default.createRef();
        _this.onTimeChange = function (time) {
          var _a, _b;
          _this.setState({ time: time });
          var propDate = _this.props.date;
          var isPropDateValid = propDate instanceof Date && !isNaN(+propDate);
          var date = isPropDateValid ? propDate : new Date();
          if (time === null || time === void 0 ? void 0 : time.includes(":")) {
            var _c = time.split(":"),
              hours = _c[0],
              minutes = _c[1];
            date.setHours(Number(hours));
            date.setMinutes(Number(minutes));
          }
          (_b = (_a = _this.props).onChange) === null || _b === void 0
            ? void 0
            : _b.call(_a, date);
        };
        _this.renderTimeInput = function () {
          var time = _this.state.time;
          var _a = _this.props,
            date = _a.date,
            timeString = _a.timeString,
            customTimeInput = _a.customTimeInput;
          if (customTimeInput) {
            return React.cloneElement(customTimeInput, {
              date: date,
              value: time,
              onChange: _this.onTimeChange,
            });
          }
          return React__default.default.createElement("input", {
            type: "time",
            className: "react-datepicker-time__input",
            placeholder: "Time",
            name: "time-input",
            ref: _this.inputRef,
            onClick: function () {
              var _a;
              (_a = _this.inputRef.current) === null || _a === void 0
                ? void 0
                : _a.focus();
            },
            required: true,
            value: time,
            onChange: function (event) {
              _this.onTimeChange(event.target.value || timeString);
            },
          });
        };
        _this.state = {
          time: _this.props.timeString,
        };
        return _this;
      }
      InputTime.getDerivedStateFromProps = function (props, state) {
        if (props.timeString !== state.time) {
          return {
            time: props.timeString,
          };
        }
        // Return null to indicate no change to state.
        return null;
      };
      InputTime.prototype.render = function () {
        return React__default.default.createElement(
          "div",
          { className: "react-datepicker__input-time-container" },
          React__default.default.createElement(
            "div",
            { className: "react-datepicker-time__caption" },
            this.props.timeInputLabel,
          ),
          React__default.default.createElement(
            "div",
            { className: "react-datepicker-time__input-container" },
            React__default.default.createElement(
              "div",
              { className: "react-datepicker-time__input" },
              this.renderTimeInput(),
            ),
          ),
        );
      };
      return InputTime;
    })(React.Component);

    /**
     * `Day` is a React component that represents a single day in a date picker.
     * It handles the rendering and interaction of a day.
     *
     * @prop ariaLabelPrefixWhenEnabled - Aria label prefix when the day is enabled.
     * @prop ariaLabelPrefixWhenDisabled - Aria label prefix when the day is disabled.
     * @prop disabledKeyboardNavigation - Whether keyboard navigation is disabled.
     * @prop day - The day to be displayed.
     * @prop dayClassName - Function to customize the CSS class of the day.
     * @prop endDate - The end date in a range.
     * @prop highlightDates - Map of dates to be highlighted.
     * @prop holidays - Map of holiday dates.
     * @prop inline - Whether the date picker is inline.
     * @prop shouldFocusDayInline - Whether the day should be focused when date picker is inline.
     * @prop month - The month the day belongs to.
     * @prop onClick - Click event handler.
     * @prop onMouseEnter - Mouse enter event handler.
     * @prop handleOnKeyDown - Key down event handler.
     * @prop usePointerEvent - Whether to use pointer events.
     * @prop preSelection - The date that is currently selected.
     * @prop selected - The selected date.
     * @prop selectingDate - The date currently being selected.
     * @prop selectsEnd - Whether the day can be the end date in a range.
     * @prop selectsStart - Whether the day can be the start date in a range.
     * @prop selectsRange - Whether the day can be in a range.
     * @prop showWeekPicker - Whether to show week picker.
     * @prop showWeekNumber - Whether to show week numbers.
     * @prop selectsDisabledDaysInRange - Whether to select disabled days in a range.
     * @prop selectsMultiple - Whether to allow multiple date selection.
     * @prop selectedDates - Array of selected dates.
     * @prop startDate - The start date in a range.
     * @prop renderDayContents - Function to customize the rendering of the day's contents.
     * @prop containerRef - Ref for the container.
     * @prop excludeDates - Array of dates to be excluded.
     * @prop calendarStartDay - The start day of the week.
     * @prop locale - The locale object.
     * @prop monthShowsDuplicateDaysEnd - Whether to show duplicate days at the end of the month.
     * @prop monthShowsDuplicateDaysStart - Whether to show duplicate days at the start of the month.
     * @prop includeDates - Array of dates to be included.
     * @prop includeDateIntervals - Array of date intervals to be included.
     * @prop minDate - The minimum date that can be selected.
     * @prop maxDate - The maximum date that can be selected.
     *
     * @example
     * ```tsx
     * import React from 'react';
     * import Day from './day';
     *
     * function MyComponent() {
     *   const handleDayClick = (event) => {
     *     console.log('Day clicked', event);
     *   };
     *
     *   const handleDayMouseEnter = (event) => {
     *     console.log('Mouse entered day', event);
     *   };
     *
     *   const renderDayContents = (date) => {
     *     return <div>{date.getDate()}</div>;
     *   };
     *
     *   return (
     *     <Day
     *       day={new Date()}
     *       onClick={handleDayClick}
     *       onMouseEnter={handleDayMouseEnter}
     *       renderDayContents={renderDayContents}
     *     />
     *   );
     * }
     *
     * export default MyComponent;
     * ```
     */
    var Day = /** @class */ (function (_super) {
      __extends(Day, _super);
      function Day() {
        var _this = (_super !== null && _super.apply(this, arguments)) || this;
        _this.dayEl = React.createRef();
        _this.handleClick = function (event) {
          if (!_this.isDisabled() && _this.props.onClick) {
            _this.props.onClick(event);
          }
        };
        _this.handleMouseEnter = function (event) {
          if (!_this.isDisabled() && _this.props.onMouseEnter) {
            _this.props.onMouseEnter(event);
          }
        };
        _this.handleOnKeyDown = function (event) {
          var _a, _b;
          var eventKey = event.key;
          if (eventKey === KeyType.Space) {
            event.preventDefault();
            event.key = KeyType.Enter;
          }
          (_b = (_a = _this.props).handleOnKeyDown) === null || _b === void 0
            ? void 0
            : _b.call(_a, event);
        };
        _this.isSameDay = function (other) {
          return isSameDay(_this.props.day, other);
        };
        _this.isKeyboardSelected = function () {
          var _a;
          if (_this.props.disabledKeyboardNavigation) {
            return false;
          }
          var isSelectedDate = _this.props.selectsMultiple
            ? (_a = _this.props.selectedDates) === null || _a === void 0
              ? void 0
              : _a.some(function (date) {
                  return _this.isSameDayOrWeek(date);
                })
            : _this.isSameDayOrWeek(_this.props.selected);
          var isDisabled =
            _this.props.preSelection &&
            _this.isDisabled(_this.props.preSelection);
          return (
            !isSelectedDate &&
            _this.isSameDayOrWeek(_this.props.preSelection) &&
            !isDisabled
          );
        };
        _this.isDisabled = function (day) {
          if (day === void 0) {
            day = _this.props.day;
          }
          // Almost all props previously were passed as this.props w/o proper typing with prop-types
          // after the migration to TS i made it explicit
          return isDayDisabled(day, {
            minDate: _this.props.minDate,
            maxDate: _this.props.maxDate,
            excludeDates: _this.props.excludeDates,
            excludeDateIntervals: _this.props.excludeDateIntervals,
            includeDateIntervals: _this.props.includeDateIntervals,
            includeDates: _this.props.includeDates,
            filterDate: _this.props.filterDate,
          });
        };
        _this.isExcluded = function () {
          // Almost all props previously were passed as this.props w/o proper typing with prop-types
          // after the migration to TS i made it explicit
          return isDayExcluded(_this.props.day, {
            excludeDates: _this.props.excludeDates,
            excludeDateIntervals: _this.props.excludeDateIntervals,
          });
        };
        _this.isStartOfWeek = function () {
          return isSameDay(
            _this.props.day,
            getStartOfWeek(
              _this.props.day,
              _this.props.locale,
              _this.props.calendarStartDay,
            ),
          );
        };
        _this.isSameWeek = function (other) {
          return (
            _this.props.showWeekPicker &&
            isSameDay(
              other,
              getStartOfWeek(
                _this.props.day,
                _this.props.locale,
                _this.props.calendarStartDay,
              ),
            )
          );
        };
        _this.isSameDayOrWeek = function (other) {
          return _this.isSameDay(other) || _this.isSameWeek(other);
        };
        _this.getHighLightedClass = function () {
          var _a = _this.props,
            day = _a.day,
            highlightDates = _a.highlightDates;
          if (!highlightDates) {
            return false;
          }
          // Looking for className in the Map of {'day string, 'className'}
          var dayStr = formatDate(day, "MM.dd.yyyy");
          return highlightDates.get(dayStr);
        };
        // Function to return the array containing className associated to the date
        _this.getHolidaysClass = function () {
          var _a;
          var _b = _this.props,
            day = _b.day,
            holidays = _b.holidays;
          if (!holidays) {
            // For type consistency no other reasons
            return [undefined];
          }
          var dayStr = formatDate(day, "MM.dd.yyyy");
          // Looking for className in the Map of {day string: {className, holidayName}}
          if (holidays.has(dayStr)) {
            return [
              (_a = holidays.get(dayStr)) === null || _a === void 0
                ? void 0
                : _a.className,
            ];
          }
          // For type consistency no other reasons
          return [undefined];
        };
        _this.isInRange = function () {
          var _a = _this.props,
            day = _a.day,
            startDate = _a.startDate,
            endDate = _a.endDate;
          if (!startDate || !endDate) {
            return false;
          }
          return isDayInRange(day, startDate, endDate);
        };
        _this.isInSelectingRange = function () {
          var _a;
          var _b = _this.props,
            day = _b.day,
            selectsStart = _b.selectsStart,
            selectsEnd = _b.selectsEnd,
            selectsRange = _b.selectsRange,
            selectsDisabledDaysInRange = _b.selectsDisabledDaysInRange,
            startDate = _b.startDate,
            endDate = _b.endDate;
          var selectingDate =
            (_a = _this.props.selectingDate) !== null && _a !== void 0
              ? _a
              : _this.props.preSelection;
          if (
            !(selectsStart || selectsEnd || selectsRange) ||
            !selectingDate ||
            (!selectsDisabledDaysInRange && _this.isDisabled())
          ) {
            return false;
          }
          if (
            selectsStart &&
            endDate &&
            (isBefore.isBefore(selectingDate, endDate) ||
              isEqual(selectingDate, endDate))
          ) {
            return isDayInRange(day, selectingDate, endDate);
          }
          if (
            selectsEnd &&
            startDate &&
            (isAfter.isAfter(selectingDate, startDate) ||
              isEqual(selectingDate, startDate))
          ) {
            return isDayInRange(day, startDate, selectingDate);
          }
          if (
            selectsRange &&
            startDate &&
            !endDate &&
            (isAfter.isAfter(selectingDate, startDate) ||
              isEqual(selectingDate, startDate))
          ) {
            return isDayInRange(day, startDate, selectingDate);
          }
          return false;
        };
        _this.isSelectingRangeStart = function () {
          var _a;
          if (!_this.isInSelectingRange()) {
            return false;
          }
          var _b = _this.props,
            day = _b.day,
            startDate = _b.startDate,
            selectsStart = _b.selectsStart;
          var selectingDate =
            (_a = _this.props.selectingDate) !== null && _a !== void 0
              ? _a
              : _this.props.preSelection;
          if (selectsStart) {
            return isSameDay(day, selectingDate);
          } else {
            return isSameDay(day, startDate);
          }
        };
        _this.isSelectingRangeEnd = function () {
          var _a;
          if (!_this.isInSelectingRange()) {
            return false;
          }
          var _b = _this.props,
            day = _b.day,
            endDate = _b.endDate,
            selectsEnd = _b.selectsEnd,
            selectsRange = _b.selectsRange;
          var selectingDate =
            (_a = _this.props.selectingDate) !== null && _a !== void 0
              ? _a
              : _this.props.preSelection;
          if (selectsEnd || selectsRange) {
            return isSameDay(day, selectingDate);
          } else {
            return isSameDay(day, endDate);
          }
        };
        _this.isRangeStart = function () {
          var _a = _this.props,
            day = _a.day,
            startDate = _a.startDate,
            endDate = _a.endDate;
          if (!startDate || !endDate) {
            return false;
          }
          return isSameDay(startDate, day);
        };
        _this.isRangeEnd = function () {
          var _a = _this.props,
            day = _a.day,
            startDate = _a.startDate,
            endDate = _a.endDate;
          if (!startDate || !endDate) {
            return false;
          }
          return isSameDay(endDate, day);
        };
        _this.isWeekend = function () {
          var weekday = getDay.getDay(_this.props.day);
          return weekday === 0 || weekday === 6;
        };
        _this.isAfterMonth = function () {
          return (
            _this.props.month !== undefined &&
            (_this.props.month + 1) % 12 === getMonth.getMonth(_this.props.day)
          );
        };
        _this.isBeforeMonth = function () {
          return (
            _this.props.month !== undefined &&
            (getMonth.getMonth(_this.props.day) + 1) % 12 === _this.props.month
          );
        };
        _this.isCurrentDay = function () {
          return _this.isSameDay(newDate());
        };
        _this.isSelected = function () {
          var _a;
          if (_this.props.selectsMultiple) {
            return (_a = _this.props.selectedDates) === null || _a === void 0
              ? void 0
              : _a.some(function (date) {
                  return _this.isSameDayOrWeek(date);
                });
          }
          return _this.isSameDayOrWeek(_this.props.selected);
        };
        _this.getClassNames = function (date) {
          var dayClassName = _this.props.dayClassName
            ? _this.props.dayClassName(date)
            : undefined;
          return clsx.clsx(
            "react-datepicker__day",
            dayClassName,
            "react-datepicker__day--" + getDayOfWeekCode(_this.props.day),
            {
              "react-datepicker__day--disabled": _this.isDisabled(),
              "react-datepicker__day--excluded": _this.isExcluded(),
              "react-datepicker__day--selected": _this.isSelected(),
              "react-datepicker__day--keyboard-selected":
                _this.isKeyboardSelected(),
              "react-datepicker__day--range-start": _this.isRangeStart(),
              "react-datepicker__day--range-end": _this.isRangeEnd(),
              "react-datepicker__day--in-range": _this.isInRange(),
              "react-datepicker__day--in-selecting-range":
                _this.isInSelectingRange(),
              "react-datepicker__day--selecting-range-start":
                _this.isSelectingRangeStart(),
              "react-datepicker__day--selecting-range-end":
                _this.isSelectingRangeEnd(),
              "react-datepicker__day--today": _this.isCurrentDay(),
              "react-datepicker__day--weekend": _this.isWeekend(),
              "react-datepicker__day--outside-month":
                _this.isAfterMonth() || _this.isBeforeMonth(),
            },
            _this.getHighLightedClass(),
            _this.getHolidaysClass(),
          );
        };
        _this.getAriaLabel = function () {
          var _a = _this.props,
            day = _a.day,
            _b = _a.ariaLabelPrefixWhenEnabled,
            ariaLabelPrefixWhenEnabled = _b === void 0 ? "Choose" : _b,
            _c = _a.ariaLabelPrefixWhenDisabled,
            ariaLabelPrefixWhenDisabled = _c === void 0 ? "Not available" : _c;
          var prefix =
            _this.isDisabled() || _this.isExcluded()
              ? ariaLabelPrefixWhenDisabled
              : ariaLabelPrefixWhenEnabled;
          return ""
            .concat(prefix, " ")
            .concat(formatDate(day, "PPPP", _this.props.locale));
        };
        // A function to return the holiday's name as title's content
        _this.getTitle = function () {
          var _a = _this.props,
            day = _a.day,
            _b = _a.holidays,
            holidays = _b === void 0 ? new Map() : _b,
            excludeDates = _a.excludeDates;
          var compareDt = formatDate(day, "MM.dd.yyyy");
          var titles = [];
          if (holidays.has(compareDt)) {
            titles.push.apply(titles, holidays.get(compareDt).holidayNames);
          }
          if (_this.isExcluded()) {
            titles.push(
              excludeDates === null || excludeDates === void 0
                ? void 0
                : excludeDates
                    .filter(function (excludeDate) {
                      if (excludeDate instanceof Date) {
                        return isSameDay(excludeDate, day);
                      }
                      return isSameDay(
                        excludeDate === null || excludeDate === void 0
                          ? void 0
                          : excludeDate.date,
                        day,
                      );
                    })
                    .map(function (excludeDate) {
                      if (excludeDate instanceof Date) {
                        return undefined;
                      }
                      return excludeDate === null || excludeDate === void 0
                        ? void 0
                        : excludeDate.message;
                    }),
            );
          }
          // I'm not sure that this is a right output, but all tests are green
          return titles.join(", ");
        };
        _this.getTabIndex = function () {
          var selectedDay = _this.props.selected;
          var preSelectionDay = _this.props.preSelection;
          var tabIndex =
            !(
              _this.props.showWeekPicker &&
              (_this.props.showWeekNumber || !_this.isStartOfWeek())
            ) &&
            (_this.isKeyboardSelected() ||
              (_this.isSameDay(selectedDay) &&
                isSameDay(preSelectionDay, selectedDay)))
              ? 0
              : -1;
          return tabIndex;
        };
        // various cases when we need to apply focus to the preselected day
        // focus the day on mount/update so that keyboard navigation works while cycling through months with up or down keys (not for prev and next month buttons)
        // prevent focus for these activeElement cases so we don't pull focus from the input as the calendar opens
        _this.handleFocusDay = function () {
          var _a;
          // only do this while the input isn't focused
          // otherwise, typing/backspacing the date manually may steal focus away from the input
          _this.shouldFocusDay() &&
            ((_a = _this.dayEl.current) === null || _a === void 0
              ? void 0
              : _a.focus({ preventScroll: true }));
        };
        _this.renderDayContents = function () {
          if (_this.props.monthShowsDuplicateDaysEnd && _this.isAfterMonth())
            return null;
          if (_this.props.monthShowsDuplicateDaysStart && _this.isBeforeMonth())
            return null;
          return _this.props.renderDayContents
            ? _this.props.renderDayContents(
                getDate.getDate(_this.props.day),
                _this.props.day,
              )
            : getDate.getDate(_this.props.day);
        };
        _this.render = function () {
          return (
            // TODO: Use <option> instead of the "option" role to ensure accessibility across all devices.
            React__default.default.createElement(
              "div",
              {
                ref: _this.dayEl,
                className: _this.getClassNames(_this.props.day),
                onKeyDown: _this.handleOnKeyDown,
                onClick: _this.handleClick,
                onMouseEnter: !_this.props.usePointerEvent
                  ? _this.handleMouseEnter
                  : undefined,
                onPointerEnter: _this.props.usePointerEvent
                  ? _this.handleMouseEnter
                  : undefined,
                tabIndex: _this.getTabIndex(),
                "aria-label": _this.getAriaLabel(),
                role: "option",
                title: _this.getTitle(),
                "aria-disabled": _this.isDisabled(),
                "aria-current": _this.isCurrentDay() ? "date" : undefined,
                "aria-selected": _this.isSelected() || _this.isInRange(),
              },
              _this.renderDayContents(),
              _this.getTitle() !== "" &&
                React__default.default.createElement(
                  "span",
                  { className: "overlay" },
                  _this.getTitle(),
                ),
            )
          );
        };
        return _this;
      }
      Day.prototype.componentDidMount = function () {
        this.handleFocusDay();
      };
      Day.prototype.componentDidUpdate = function () {
        this.handleFocusDay();
      };
      Day.prototype.shouldFocusDay = function () {
        var shouldFocusDay = false;
        if (
          this.getTabIndex() === 0 &&
          this.isSameDay(this.props.preSelection)
        ) {
          // there is currently no activeElement and not inline
          if (
            !document.activeElement ||
            document.activeElement === document.body
          ) {
            shouldFocusDay = true;
          }
          // inline version:
          // do not focus on initial render to prevent autoFocus issue
          // focus after month has changed via keyboard
          if (this.props.inline && !this.props.shouldFocusDayInline) {
            shouldFocusDay = false;
          }
          if (this.isDayActiveElement()) {
            shouldFocusDay = true;
          }
          if (this.isDuplicateDay()) {
            shouldFocusDay = false;
          }
        }
        return shouldFocusDay;
      };
      // the activeElement is in the container, and it is another instance of Day
      Day.prototype.isDayActiveElement = function () {
        var _a, _b, _c;
        return (
          ((_b =
            (_a = this.props.containerRef) === null || _a === void 0
              ? void 0
              : _a.current) === null || _b === void 0
            ? void 0
            : _b.contains(document.activeElement)) &&
          ((_c = document.activeElement) === null || _c === void 0
            ? void 0
            : _c.classList.contains("react-datepicker__day"))
        );
      };
      Day.prototype.isDuplicateDay = function () {
        return (
          //day is one of the non rendered duplicate days
          (this.props.monthShowsDuplicateDaysEnd && this.isAfterMonth()) ||
          (this.props.monthShowsDuplicateDaysStart && this.isBeforeMonth())
        );
      };
      return Day;
    })(React.Component);

    var WeekNumber = /** @class */ (function (_super) {
      __extends(WeekNumber, _super);
      function WeekNumber() {
        var _this = (_super !== null && _super.apply(this, arguments)) || this;
        _this.weekNumberEl = React.createRef();
        _this.handleClick = function (event) {
          if (_this.props.onClick) {
            _this.props.onClick(event);
          }
        };
        _this.handleOnKeyDown = function (event) {
          var _a, _b;
          var eventKey = event.key;
          if (eventKey === KeyType.Space) {
            event.preventDefault();
            event.key = KeyType.Enter;
          }
          (_b = (_a = _this.props).handleOnKeyDown) === null || _b === void 0
            ? void 0
            : _b.call(_a, event);
        };
        _this.isKeyboardSelected = function () {
          return (
            !_this.props.disabledKeyboardNavigation &&
            !isSameDay(_this.props.date, _this.props.selected) &&
            isSameDay(_this.props.date, _this.props.preSelection)
          );
        };
        _this.getTabIndex = function () {
          return _this.props.showWeekPicker &&
            _this.props.showWeekNumber &&
            (_this.isKeyboardSelected() ||
              (isSameDay(_this.props.date, _this.props.selected) &&
                isSameDay(_this.props.preSelection, _this.props.selected)))
            ? 0
            : -1;
        };
        // various cases when we need to apply focus to the preselected week-number
        // focus the week-number on mount/update so that keyboard navigation works while cycling through months with up or down keys (not for prev and next month buttons)
        // prevent focus for these activeElement cases so we don't pull focus from the input as the calendar opens
        _this.handleFocusWeekNumber = function (prevProps) {
          var shouldFocusWeekNumber = false;
          // only do this while the input isn't focused
          // otherwise, typing/backspacing the date manually may steal focus away from the input
          if (
            _this.getTabIndex() === 0 &&
            !(prevProps === null || prevProps === void 0
              ? void 0
              : prevProps.isInputFocused) &&
            isSameDay(_this.props.date, _this.props.preSelection)
          ) {
            // there is currently no activeElement and not inline
            if (
              !document.activeElement ||
              document.activeElement === document.body
            ) {
              shouldFocusWeekNumber = true;
            }
            // inline version:
            // do not focus on initial render to prevent autoFocus issue
            // focus after month has changed via keyboard
            if (_this.props.inline && !_this.props.shouldFocusDayInline) {
              shouldFocusWeekNumber = false;
            }
            // the activeElement is in the container, and it is another instance of WeekNumber
            if (
              _this.props.containerRef &&
              _this.props.containerRef.current &&
              _this.props.containerRef.current.contains(
                document.activeElement,
              ) &&
              document.activeElement &&
              document.activeElement.classList.contains(
                "react-datepicker__week-number",
              )
            ) {
              shouldFocusWeekNumber = true;
            }
          }
          shouldFocusWeekNumber &&
            _this.weekNumberEl.current &&
            _this.weekNumberEl.current.focus({ preventScroll: true });
        };
        return _this;
      }
      Object.defineProperty(WeekNumber, "defaultProps", {
        get: function () {
          return {
            ariaLabelPrefix: "week ",
          };
        },
        enumerable: false,
        configurable: true,
      });
      WeekNumber.prototype.componentDidMount = function () {
        this.handleFocusWeekNumber();
      };
      WeekNumber.prototype.componentDidUpdate = function (prevProps) {
        this.handleFocusWeekNumber(prevProps);
      };
      WeekNumber.prototype.render = function () {
        var _a = this.props,
          weekNumber = _a.weekNumber,
          _b = _a.ariaLabelPrefix,
          ariaLabelPrefix =
            _b === void 0 ? WeekNumber.defaultProps.ariaLabelPrefix : _b,
          onClick = _a.onClick;
        var weekNumberClasses = {
          "react-datepicker__week-number": true,
          "react-datepicker__week-number--clickable": !!onClick,
          "react-datepicker__week-number--selected":
            !!onClick && isSameDay(this.props.date, this.props.selected),
        };
        return React__default.default.createElement(
          "div",
          {
            ref: this.weekNumberEl,
            className: clsx.clsx(weekNumberClasses),
            "aria-label": ""
              .concat(ariaLabelPrefix, " ")
              .concat(this.props.weekNumber),
            onClick: this.handleClick,
            onKeyDown: this.handleOnKeyDown,
            tabIndex: this.getTabIndex(),
          },
          weekNumber,
        );
      };
      return WeekNumber;
    })(React.Component);

    var Week = /** @class */ (function (_super) {
      __extends(Week, _super);
      function Week() {
        var _this = (_super !== null && _super.apply(this, arguments)) || this;
        _this.isDisabled = function (day) {
          return isDayDisabled(day, {
            minDate: _this.props.minDate,
            maxDate: _this.props.maxDate,
            excludeDates: _this.props.excludeDates,
            excludeDateIntervals: _this.props.excludeDateIntervals,
            includeDateIntervals: _this.props.includeDateIntervals,
            includeDates: _this.props.includeDates,
            filterDate: _this.props.filterDate,
          });
        };
        _this.handleDayClick = function (day, event) {
          if (_this.props.onDayClick) {
            _this.props.onDayClick(day, event);
          }
        };
        _this.handleDayMouseEnter = function (day) {
          if (_this.props.onDayMouseEnter) {
            _this.props.onDayMouseEnter(day);
          }
        };
        _this.handleWeekClick = function (day, weekNumber, event) {
          var _a, _b, _c;
          var enabledWeekDay = new Date(day);
          for (var i = 0; i < 7; i++) {
            var processingDay = new Date(day);
            processingDay.setDate(processingDay.getDate() + i);
            var isEnabled = !_this.isDisabled(processingDay);
            if (isEnabled) {
              enabledWeekDay = processingDay;
              break;
            }
          }
          if (typeof _this.props.onWeekSelect === "function") {
            _this.props.onWeekSelect(enabledWeekDay, weekNumber, event);
          }
          if (_this.props.showWeekPicker) {
            _this.handleDayClick(enabledWeekDay, event);
          }
          if (
            (_a = _this.props.shouldCloseOnSelect) !== null && _a !== void 0
              ? _a
              : Week.defaultProps.shouldCloseOnSelect
          ) {
            (_c = (_b = _this.props).setOpen) === null || _c === void 0
              ? void 0
              : _c.call(_b, false);
          }
        };
        _this.formatWeekNumber = function (date) {
          if (_this.props.formatWeekNumber) {
            return _this.props.formatWeekNumber(date);
          }
          return getWeek(date);
        };
        _this.renderDays = function () {
          var startOfWeek = _this.startOfWeek();
          var days = [];
          var weekNumber = _this.formatWeekNumber(startOfWeek);
          if (_this.props.showWeekNumber) {
            var onClickAction =
              _this.props.onWeekSelect || _this.props.showWeekPicker
                ? _this.handleWeekClick.bind(_this, startOfWeek, weekNumber)
                : undefined;
            days.push(
              React__default.default.createElement(
                WeekNumber,
                _assign({ key: "W" }, Week.defaultProps, _this.props, {
                  weekNumber: weekNumber,
                  date: startOfWeek,
                  onClick: onClickAction,
                }),
              ),
            );
          }
          return days.concat(
            [0, 1, 2, 3, 4, 5, 6].map(function (offset) {
              var day = addDays.addDays(startOfWeek, offset);
              return React__default.default.createElement(
                Day,
                _assign({}, Week.defaultProps, _this.props, {
                  ariaLabelPrefixWhenEnabled:
                    _this.props.chooseDayAriaLabelPrefix,
                  ariaLabelPrefixWhenDisabled:
                    _this.props.disabledDayAriaLabelPrefix,
                  key: day.valueOf(),
                  day: day,
                  onClick: _this.handleDayClick.bind(_this, day),
                  onMouseEnter: _this.handleDayMouseEnter.bind(_this, day),
                }),
              );
            }),
          );
        };
        _this.startOfWeek = function () {
          return getStartOfWeek(
            _this.props.day,
            _this.props.locale,
            _this.props.calendarStartDay,
          );
        };
        _this.isKeyboardSelected = function () {
          return (
            !_this.props.disabledKeyboardNavigation &&
            !isSameDay(_this.startOfWeek(), _this.props.selected) &&
            isSameDay(_this.startOfWeek(), _this.props.preSelection)
          );
        };
        return _this;
      }
      Object.defineProperty(Week, "defaultProps", {
        get: function () {
          return {
            shouldCloseOnSelect: true,
          };
        },
        enumerable: false,
        configurable: true,
      });
      Week.prototype.render = function () {
        var weekNumberClasses = {
          "react-datepicker__week": true,
          "react-datepicker__week--selected": isSameDay(
            this.startOfWeek(),
            this.props.selected,
          ),
          "react-datepicker__week--keyboard-selected":
            this.isKeyboardSelected(),
        };
        return React__default.default.createElement(
          "div",
          { className: clsx.clsx(weekNumberClasses) },
          this.renderDays(),
        );
      };
      return Week;
    })(React.Component);

    var _a;
    var FIXED_HEIGHT_STANDARD_WEEK_COUNT = 6;
    var MONTH_COLUMNS_LAYOUT = {
      TWO_COLUMNS: "two_columns",
      THREE_COLUMNS: "three_columns",
      FOUR_COLUMNS: "four_columns",
    };
    var MONTH_COLUMNS =
      ((_a = {}),
      (_a[MONTH_COLUMNS_LAYOUT.TWO_COLUMNS] = {
        grid: [
          [0, 1],
          [2, 3],
          [4, 5],
          [6, 7],
          [8, 9],
          [10, 11],
        ],
        verticalNavigationOffset: 2,
      }),
      (_a[MONTH_COLUMNS_LAYOUT.THREE_COLUMNS] = {
        grid: [
          [0, 1, 2],
          [3, 4, 5],
          [6, 7, 8],
          [9, 10, 11],
        ],
        verticalNavigationOffset: 3,
      }),
      (_a[MONTH_COLUMNS_LAYOUT.FOUR_COLUMNS] = {
        grid: [
          [0, 1, 2, 3],
          [4, 5, 6, 7],
          [8, 9, 10, 11],
        ],
        verticalNavigationOffset: 4,
      }),
      _a);
    var MONTH_NAVIGATION_HORIZONTAL_OFFSET = 1;
    function getMonthColumnsLayout(
      showFourColumnMonthYearPicker,
      showTwoColumnMonthYearPicker,
    ) {
      if (showFourColumnMonthYearPicker) {
        return MONTH_COLUMNS_LAYOUT.FOUR_COLUMNS;
      }
      if (showTwoColumnMonthYearPicker) {
        return MONTH_COLUMNS_LAYOUT.TWO_COLUMNS;
      }
      return MONTH_COLUMNS_LAYOUT.THREE_COLUMNS;
    }
    /**
     * `Month` is a React component that represents a month in a calendar.
     * It accepts a `MonthProps` object as props which provides various configurations and event handlers.
     *
     * @prop dayClassName - Function to determine the class name for a day.
     * @prop monthClassName - Function to determine the class name for a month.
     * @prop filterDate - Function to filter dates.
     * @prop formatWeekNumber - Function to format the week number.
     * @prop onDayClick - Function to handle day click events.
     * @prop onDayMouseEnter - Function to handle mouse enter events on a day.
     * @prop onMouseLeave - Function to handle mouse leave events.
     * @prop onWeekSelect - Function to handle week selection.
     * @prop setPreSelection - Function to set pre-selection.
     * @prop setOpen - Function to set open state.
     * @prop renderDayContents - Function to render day contents.
     * @prop renderMonthContent - Function to render month content.
     * @prop renderQuarterContent - Function to render quarter content.
     * @prop handleOnKeyDown - Function to handle key down events.
     * @prop handleOnMonthKeyDown - Function to handle key down events on a month.
     * @prop ariaLabelPrefix - Aria label prefix.
     * @prop chooseDayAriaLabelPrefix - Aria label prefix for choosing a day.
     * @prop disabledDayAriaLabelPrefix - Aria label prefix for disabled day.
     * @prop disabledKeyboardNavigation - Flag to disable keyboard navigation.
     * @prop day - The day.
     * @prop endDate - The end date.
     * @prop orderInDisplay - The order in display.
     * @prop excludeDates - Dates to exclude.
     * @prop excludeDateIntervals - Date intervals to exclude.
     * @prop fixedHeight - Flag to set fixed height.
     * @prop highlightDates - Dates to highlight.
     * @prop holidays - Holidays.
     * @prop includeDates - Dates to include.
     * @prop includeDateIntervals - Date intervals to include.
     * @prop inline - Flag to set inline.
     * @prop shouldFocusDayInline - Flag to set focus on day inline.
     * @prop locale - The locale.
     * @prop maxDate - The maximum date.
     * @prop minDate - The minimum date.
     * @prop usePointerEvent - Flag to use pointer event.
     * @prop peekNextMonth - Flag to peek next month.
     * @prop preSelection - The pre-selection.
     * @prop selected - The selected date.
     * @prop selectingDate - The selecting date.
     * @prop calendarStartDay - The calendar start day.
     * @prop selectsEnd - Flag to select end.
     * @prop selectsStart - Flag to select start.
     * @prop selectsRange - Flag to select range.
     * @prop selectsDisabledDaysInRange - Flag to select disabled days in range.
     * @prop selectsMultiple - Flag to select multiple.
     * @prop selectedDates - The selected dates.
     * @prop showWeekNumbers - Flag to show week numbers.
     * @prop startDate - The start date.
     * @prop shouldCloseOnSelect - Flag to close on select.
     * @prop showMonthYearPicker - Flag to show month year picker.
     * @prop showFullMonthYearPicker - Flag to show full month year picker.
     * @prop showTwoColumnMonthYearPicker - Flag to show two column month year picker.
     * @prop showFourColumnMonthYearPicker - Flag to show four column month year picker.
     * @prop showQuarterYearPicker - Flag to show quarter year picker.
     * @prop showWeekPicker - Flag to show week picker.
     * @prop isInputFocused - Flag to set input focus.
     * @prop weekAriaLabelPrefix - Aria label prefix for week.
     * @prop containerRef - The container reference.
     * @prop monthShowsDuplicateDaysEnd - Flag to show duplicate days at the end of the month.
     * @prop monthShowsDuplicateDaysStart - Flag to show duplicate days at the start of the month.
     *
     * @example
     * ```tsx
     * function App() {
     *  const handleDayClick = (date) => {
     *     console.log('Day clicked: ', date);
     *   };
     *
     *   const handleDayMouseEnter = (date) => {
     *     console.log('Mouse entered on day: ', date);
     *   };
     *
     *   return (
     *     <div>
     *       <Month
     *         day={new Date()}
     *         endDate={new Date()}
     *         onDayClick={handleDayClick}
     *         onDayMouseEnter={handleDayMouseEnter}
     *         disabledKeyboardNavigation={false}
     *         showWeekNumbers={true}
     *         showMonthYearPicker={false}
     *       />
     *     </div>
     *   );
     * }
     * ```
     */
    var Month = /** @class */ (function (_super) {
      __extends(Month, _super);
      function Month() {
        var _this = (_super !== null && _super.apply(this, arguments)) || this;
        _this.MONTH_REFS = __spreadArray([], Array(12), true).map(function () {
          return React.createRef();
        });
        _this.QUARTER_REFS = __spreadArray([], Array(4), true).map(function () {
          return React.createRef();
        });
        _this.isDisabled = function (day) {
          // Almost all props previously were passed as this.props w/o proper typing with prop-types
          // after the migration to TS i made it explicit
          return isDayDisabled(day, {
            minDate: _this.props.minDate,
            maxDate: _this.props.maxDate,
            excludeDates: _this.props.excludeDates,
            excludeDateIntervals: _this.props.excludeDateIntervals,
            includeDateIntervals: _this.props.includeDateIntervals,
            includeDates: _this.props.includeDates,
            filterDate: _this.props.filterDate,
          });
        };
        _this.isExcluded = function (day) {
          // Almost all props previously were passed as this.props w/o proper typing with prop-types
          // after the migration to TS i made it explicit
          return isDayExcluded(day, {
            excludeDates: _this.props.excludeDates,
            excludeDateIntervals: _this.props.excludeDateIntervals,
          });
        };
        _this.handleDayClick = function (day, event) {
          var _a, _b;
          (_b = (_a = _this.props).onDayClick) === null || _b === void 0
            ? void 0
            : _b.call(_a, day, event, _this.props.orderInDisplay);
        };
        _this.handleDayMouseEnter = function (day) {
          var _a, _b;
          (_b = (_a = _this.props).onDayMouseEnter) === null || _b === void 0
            ? void 0
            : _b.call(_a, day);
        };
        _this.handleMouseLeave = function () {
          var _a, _b;
          (_b = (_a = _this.props).onMouseLeave) === null || _b === void 0
            ? void 0
            : _b.call(_a);
        };
        _this.isRangeStartMonth = function (m) {
          var _a = _this.props,
            day = _a.day,
            startDate = _a.startDate,
            endDate = _a.endDate;
          if (!startDate || !endDate) {
            return false;
          }
          return isSameMonth(setMonth.setMonth(day, m), startDate);
        };
        _this.isRangeStartQuarter = function (q) {
          var _a = _this.props,
            day = _a.day,
            startDate = _a.startDate,
            endDate = _a.endDate;
          if (!startDate || !endDate) {
            return false;
          }
          return isSameQuarter(setQuarter.setQuarter(day, q), startDate);
        };
        _this.isRangeEndMonth = function (m) {
          var _a = _this.props,
            day = _a.day,
            startDate = _a.startDate,
            endDate = _a.endDate;
          if (!startDate || !endDate) {
            return false;
          }
          return isSameMonth(setMonth.setMonth(day, m), endDate);
        };
        _this.isRangeEndQuarter = function (q) {
          var _a = _this.props,
            day = _a.day,
            startDate = _a.startDate,
            endDate = _a.endDate;
          if (!startDate || !endDate) {
            return false;
          }
          return isSameQuarter(setQuarter.setQuarter(day, q), endDate);
        };
        _this.isInSelectingRangeMonth = function (m) {
          var _a;
          var _b = _this.props,
            day = _b.day,
            selectsStart = _b.selectsStart,
            selectsEnd = _b.selectsEnd,
            selectsRange = _b.selectsRange,
            startDate = _b.startDate,
            endDate = _b.endDate;
          var selectingDate =
            (_a = _this.props.selectingDate) !== null && _a !== void 0
              ? _a
              : _this.props.preSelection;
          if (!(selectsStart || selectsEnd || selectsRange) || !selectingDate) {
            return false;
          }
          if (selectsStart && endDate) {
            return isMonthInRange(selectingDate, endDate, m, day);
          }
          if (selectsEnd && startDate) {
            return isMonthInRange(startDate, selectingDate, m, day);
          }
          if (selectsRange && startDate && !endDate) {
            return isMonthInRange(startDate, selectingDate, m, day);
          }
          return false;
        };
        _this.isSelectingMonthRangeStart = function (m) {
          var _a;
          if (!_this.isInSelectingRangeMonth(m)) {
            return false;
          }
          var _b = _this.props,
            day = _b.day,
            startDate = _b.startDate,
            selectsStart = _b.selectsStart;
          var _month = setMonth.setMonth(day, m);
          var selectingDate =
            (_a = _this.props.selectingDate) !== null && _a !== void 0
              ? _a
              : _this.props.preSelection;
          if (selectsStart) {
            return isSameMonth(_month, selectingDate);
          } else {
            return isSameMonth(_month, startDate);
          }
        };
        _this.isSelectingMonthRangeEnd = function (m) {
          var _a;
          if (!_this.isInSelectingRangeMonth(m)) {
            return false;
          }
          var _b = _this.props,
            day = _b.day,
            endDate = _b.endDate,
            selectsEnd = _b.selectsEnd,
            selectsRange = _b.selectsRange;
          var _month = setMonth.setMonth(day, m);
          var selectingDate =
            (_a = _this.props.selectingDate) !== null && _a !== void 0
              ? _a
              : _this.props.preSelection;
          if (selectsEnd || selectsRange) {
            return isSameMonth(_month, selectingDate);
          } else {
            return isSameMonth(_month, endDate);
          }
        };
        _this.isInSelectingRangeQuarter = function (q) {
          var _a;
          var _b = _this.props,
            day = _b.day,
            selectsStart = _b.selectsStart,
            selectsEnd = _b.selectsEnd,
            selectsRange = _b.selectsRange,
            startDate = _b.startDate,
            endDate = _b.endDate;
          var selectingDate =
            (_a = _this.props.selectingDate) !== null && _a !== void 0
              ? _a
              : _this.props.preSelection;
          if (!(selectsStart || selectsEnd || selectsRange) || !selectingDate) {
            return false;
          }
          if (selectsStart && endDate) {
            return isQuarterInRange(selectingDate, endDate, q, day);
          }
          if (selectsEnd && startDate) {
            return isQuarterInRange(startDate, selectingDate, q, day);
          }
          if (selectsRange && startDate && !endDate) {
            return isQuarterInRange(startDate, selectingDate, q, day);
          }
          return false;
        };
        _this.isWeekInMonth = function (startOfWeek) {
          var day = _this.props.day;
          var endOfWeek = addDays.addDays(startOfWeek, 6);
          return isSameMonth(startOfWeek, day) || isSameMonth(endOfWeek, day);
        };
        _this.isCurrentMonth = function (day, m) {
          return (
            getYear.getYear(day) === getYear.getYear(newDate()) &&
            m === getMonth.getMonth(newDate())
          );
        };
        _this.isCurrentQuarter = function (day, q) {
          return (
            getYear.getYear(day) === getYear.getYear(newDate()) &&
            q === getQuarter.getQuarter(newDate())
          );
        };
        _this.isSelectedMonth = function (day, m, selected) {
          return (
            getMonth.getMonth(selected) === m &&
            getYear.getYear(day) === getYear.getYear(selected)
          );
        };
        _this.isSelectMonthInList = function (day, m, selectedDates) {
          return selectedDates.some(function (selectedDate) {
            return _this.isSelectedMonth(day, m, selectedDate);
          });
        };
        _this.isSelectedQuarter = function (day, q, selected) {
          return (
            getQuarter.getQuarter(day) === q &&
            getYear.getYear(day) === getYear.getYear(selected)
          );
        };
        _this.renderWeeks = function () {
          var weeks = [];
          var isFixedHeight = _this.props.fixedHeight;
          var i = 0;
          var breakAfterNextPush = false;
          var currentWeekStart = getStartOfWeek(
            getStartOfMonth(_this.props.day),
            _this.props.locale,
            _this.props.calendarStartDay,
          );
          var isPreSelected = function (preSelection) {
            return _this.props.showWeekPicker
              ? getStartOfWeek(
                  preSelection,
                  _this.props.locale,
                  _this.props.calendarStartDay,
                )
              : _this.props.preSelection;
          };
          var isSelected = function (selected) {
            return _this.props.showWeekPicker
              ? getStartOfWeek(
                  selected,
                  _this.props.locale,
                  _this.props.calendarStartDay,
                )
              : _this.props.selected;
          };
          var selected = _this.props.selected
            ? isSelected(_this.props.selected)
            : undefined;
          var preSelection = _this.props.preSelection
            ? isPreSelected(_this.props.preSelection)
            : undefined;
          // eslint-disable-next-line no-constant-condition
          while (true) {
            weeks.push(
              React__default.default.createElement(
                Week,
                _assign({}, _this.props, {
                  ariaLabelPrefix: _this.props.weekAriaLabelPrefix,
                  key: i,
                  day: currentWeekStart,
                  month: getMonth.getMonth(_this.props.day),
                  onDayClick: _this.handleDayClick,
                  onDayMouseEnter: _this.handleDayMouseEnter,
                  selected: selected,
                  preSelection: preSelection,
                  showWeekNumber: _this.props.showWeekNumbers,
                }),
              ),
            );
            if (breakAfterNextPush) break;
            i++;
            currentWeekStart = addWeeks.addWeeks(currentWeekStart, 1);
            // If one of these conditions is true, we will either break on this week
            // or break on the next week
            var isFixedAndFinalWeek =
              isFixedHeight && i >= FIXED_HEIGHT_STANDARD_WEEK_COUNT;
            var isNonFixedAndOutOfMonth =
              !isFixedHeight && !_this.isWeekInMonth(currentWeekStart);
            if (isFixedAndFinalWeek || isNonFixedAndOutOfMonth) {
              if (_this.props.peekNextMonth) {
                breakAfterNextPush = true;
              } else {
                break;
              }
            }
          }
          return weeks;
        };
        _this.onMonthClick = function (event, m) {
          var _a = _this.isMonthDisabledForLabelDate(m),
            isDisabled = _a.isDisabled,
            labelDate = _a.labelDate;
          if (isDisabled) {
            return;
          }
          _this.handleDayClick(getStartOfMonth(labelDate), event);
        };
        _this.onMonthMouseEnter = function (m) {
          var _a = _this.isMonthDisabledForLabelDate(m),
            isDisabled = _a.isDisabled,
            labelDate = _a.labelDate;
          if (isDisabled) {
            return;
          }
          _this.handleDayMouseEnter(getStartOfMonth(labelDate));
        };
        _this.handleMonthNavigation = function (newMonth, newDate) {
          var _a, _b, _c, _d;
          (_b = (_a = _this.props).setPreSelection) === null || _b === void 0
            ? void 0
            : _b.call(_a, newDate);
          (_d =
            (_c = _this.MONTH_REFS[newMonth]) === null || _c === void 0
              ? void 0
              : _c.current) === null || _d === void 0
            ? void 0
            : _d.focus();
        };
        _this.handleKeyboardNavigation = function (event, eventKey, month) {
          var _a;
          var _b = _this.props,
            selected = _b.selected,
            preSelection = _b.preSelection,
            setPreSelection = _b.setPreSelection,
            minDate = _b.minDate,
            maxDate = _b.maxDate,
            showFourColumnMonthYearPicker = _b.showFourColumnMonthYearPicker,
            showTwoColumnMonthYearPicker = _b.showTwoColumnMonthYearPicker;
          if (!preSelection) return;
          var monthColumnsLayout = getMonthColumnsLayout(
            showFourColumnMonthYearPicker,
            showTwoColumnMonthYearPicker,
          );
          var verticalOffset = _this.getVerticalOffset(monthColumnsLayout);
          var monthsGrid =
            (_a = MONTH_COLUMNS[monthColumnsLayout]) === null || _a === void 0
              ? void 0
              : _a.grid;
          var calculateNewDateAndMonth = function (eventKey, date, month) {
            var _a, _b;
            var newCalculatedDate = date;
            var newCalculatedMonth = month;
            switch (eventKey) {
              case KeyType.ArrowRight:
                newCalculatedDate = addMonths.addMonths(
                  date,
                  MONTH_NAVIGATION_HORIZONTAL_OFFSET,
                );
                newCalculatedMonth =
                  month === 11 ? 0 : month + MONTH_NAVIGATION_HORIZONTAL_OFFSET;
                break;
              case KeyType.ArrowLeft:
                newCalculatedDate = subMonths.subMonths(
                  date,
                  MONTH_NAVIGATION_HORIZONTAL_OFFSET,
                );
                newCalculatedMonth =
                  month === 0 ? 11 : month - MONTH_NAVIGATION_HORIZONTAL_OFFSET;
                break;
              case KeyType.ArrowUp:
                newCalculatedDate = subMonths.subMonths(date, verticalOffset);
                newCalculatedMonth = (
                  (_a =
                    monthsGrid === null || monthsGrid === void 0
                      ? void 0
                      : monthsGrid[0]) === null || _a === void 0
                    ? void 0
                    : _a.includes(month)
                )
                  ? month + 12 - verticalOffset
                  : month - verticalOffset;
                break;
              case KeyType.ArrowDown:
                newCalculatedDate = addMonths.addMonths(date, verticalOffset);
                newCalculatedMonth = (
                  (_b =
                    monthsGrid === null || monthsGrid === void 0
                      ? void 0
                      : monthsGrid[monthsGrid.length - 1]) === null ||
                  _b === void 0
                    ? void 0
                    : _b.includes(month)
                )
                  ? month - 12 + verticalOffset
                  : month + verticalOffset;
                break;
            }
            return {
              newCalculatedDate: newCalculatedDate,
              newCalculatedMonth: newCalculatedMonth,
            };
          };
          var getNewDateAndMonth = function (eventKey, selectedDate, month) {
            var MAX_ITERATIONS = 40;
            var eventKeyCopy = eventKey;
            var validDateFound = false;
            var iterations = 0;
            var _a = calculateNewDateAndMonth(
                eventKeyCopy,
                selectedDate,
                month,
              ),
              newCalculatedDate = _a.newCalculatedDate,
              newCalculatedMonth = _a.newCalculatedMonth;
            while (!validDateFound) {
              if (iterations >= MAX_ITERATIONS) {
                newCalculatedDate = selectedDate;
                newCalculatedMonth = month;
                break;
              }
              // if minDate exists and the new month is before the minimum month, it will try to find the next available month after
              if (minDate && newCalculatedDate < minDate) {
                eventKeyCopy = KeyType.ArrowRight;
                var obj = calculateNewDateAndMonth(
                  eventKeyCopy,
                  newCalculatedDate,
                  newCalculatedMonth,
                );
                newCalculatedDate = obj.newCalculatedDate;
                newCalculatedMonth = obj.newCalculatedMonth;
              }
              // if maxDate exists and the new month is after the maximum month, it will try to find the next available month before
              if (maxDate && newCalculatedDate > maxDate) {
                eventKeyCopy = KeyType.ArrowLeft;
                var obj = calculateNewDateAndMonth(
                  eventKeyCopy,
                  newCalculatedDate,
                  newCalculatedMonth,
                );
                newCalculatedDate = obj.newCalculatedDate;
                newCalculatedMonth = obj.newCalculatedMonth;
              }
              if (isMonthYearDisabled(newCalculatedDate, _this.props)) {
                var obj = calculateNewDateAndMonth(
                  eventKeyCopy,
                  newCalculatedDate,
                  newCalculatedMonth,
                );
                newCalculatedDate = obj.newCalculatedDate;
                newCalculatedMonth = obj.newCalculatedMonth;
              } else {
                validDateFound = true;
              }
              iterations++;
            }
            return {
              newCalculatedDate: newCalculatedDate,
              newCalculatedMonth: newCalculatedMonth,
            };
          };
          if (eventKey === KeyType.Enter) {
            if (!_this.isMonthDisabled(month)) {
              _this.onMonthClick(event, month);
              setPreSelection === null || setPreSelection === void 0
                ? void 0
                : setPreSelection(selected);
            }
            return;
          }
          var _c = getNewDateAndMonth(eventKey, preSelection, month),
            newCalculatedDate = _c.newCalculatedDate,
            newCalculatedMonth = _c.newCalculatedMonth;
          switch (eventKey) {
            case KeyType.ArrowRight:
            case KeyType.ArrowLeft:
            case KeyType.ArrowUp:
            case KeyType.ArrowDown:
              _this.handleMonthNavigation(
                newCalculatedMonth,
                newCalculatedDate,
              );
              break;
          }
        };
        _this.getVerticalOffset = function (monthColumnsLayout) {
          var _a, _b;
          return (_b =
            (_a = MONTH_COLUMNS[monthColumnsLayout]) === null || _a === void 0
              ? void 0
              : _a.verticalNavigationOffset) !== null && _b !== void 0
            ? _b
            : 0;
        };
        _this.onMonthKeyDown = function (event, month) {
          var _a = _this.props,
            disabledKeyboardNavigation = _a.disabledKeyboardNavigation,
            handleOnMonthKeyDown = _a.handleOnMonthKeyDown;
          var eventKey = event.key;
          if (eventKey !== KeyType.Tab) {
            // preventDefault on tab event blocks focus change
            event.preventDefault();
          }
          if (!disabledKeyboardNavigation) {
            _this.handleKeyboardNavigation(event, eventKey, month);
          }
          handleOnMonthKeyDown && handleOnMonthKeyDown(event);
        };
        _this.onQuarterClick = function (event, q) {
          var labelDate = setQuarter.setQuarter(_this.props.day, q);
          if (isQuarterDisabled(labelDate, _this.props)) {
            return;
          }
          _this.handleDayClick(getStartOfQuarter(labelDate), event);
        };
        _this.onQuarterMouseEnter = function (q) {
          var labelDate = setQuarter.setQuarter(_this.props.day, q);
          if (isQuarterDisabled(labelDate, _this.props)) {
            return;
          }
          _this.handleDayMouseEnter(getStartOfQuarter(labelDate));
        };
        _this.handleQuarterNavigation = function (newQuarter, newDate) {
          var _a, _b, _c, _d;
          if (_this.isDisabled(newDate) || _this.isExcluded(newDate)) {
            return;
          }
          (_b = (_a = _this.props).setPreSelection) === null || _b === void 0
            ? void 0
            : _b.call(_a, newDate);
          (_d =
            (_c = _this.QUARTER_REFS[newQuarter - 1]) === null || _c === void 0
              ? void 0
              : _c.current) === null || _d === void 0
            ? void 0
            : _d.focus();
        };
        _this.onQuarterKeyDown = function (event, quarter) {
          var _a, _b;
          var eventKey = event.key;
          if (!_this.props.disabledKeyboardNavigation) {
            switch (eventKey) {
              case KeyType.Enter:
                _this.onQuarterClick(event, quarter);
                (_b = (_a = _this.props).setPreSelection) === null ||
                _b === void 0
                  ? void 0
                  : _b.call(_a, _this.props.selected);
                break;
              case KeyType.ArrowRight:
                if (!_this.props.preSelection) {
                  break;
                }
                _this.handleQuarterNavigation(
                  quarter === 4 ? 1 : quarter + 1,
                  addQuarters.addQuarters(_this.props.preSelection, 1),
                );
                break;
              case KeyType.ArrowLeft:
                if (!_this.props.preSelection) {
                  break;
                }
                _this.handleQuarterNavigation(
                  quarter === 1 ? 4 : quarter - 1,
                  subQuarters.subQuarters(_this.props.preSelection, 1),
                );
                break;
            }
          }
        };
        _this.isMonthDisabledForLabelDate = function (month) {
          var _a;
          var _b = _this.props,
            day = _b.day,
            minDate = _b.minDate,
            maxDate = _b.maxDate,
            excludeDates = _b.excludeDates,
            includeDates = _b.includeDates;
          var labelDate = setMonth.setMonth(day, month);
          return {
            isDisabled:
              (_a =
                (minDate || maxDate || excludeDates || includeDates) &&
                isMonthDisabled(labelDate, _this.props)) !== null &&
              _a !== void 0
                ? _a
                : false,
            labelDate: labelDate,
          };
        };
        _this.isMonthDisabled = function (month) {
          var isDisabled = _this.isMonthDisabledForLabelDate(month).isDisabled;
          return isDisabled;
        };
        _this.getMonthClassNames = function (m) {
          var _a = _this.props,
            day = _a.day,
            startDate = _a.startDate,
            endDate = _a.endDate,
            preSelection = _a.preSelection,
            monthClassName = _a.monthClassName;
          var _monthClassName = monthClassName
            ? monthClassName(setMonth.setMonth(day, m))
            : undefined;
          var selection = _this.getSelection();
          return clsx.clsx(
            "react-datepicker__month-text",
            "react-datepicker__month-".concat(m),
            _monthClassName,
            {
              "react-datepicker__month-text--disabled":
                _this.isMonthDisabled(m),
              "react-datepicker__month-text--selected": selection
                ? _this.isSelectMonthInList(day, m, selection)
                : undefined,
              "react-datepicker__month-text--keyboard-selected":
                !_this.props.disabledKeyboardNavigation &&
                preSelection &&
                _this.isSelectedMonth(day, m, preSelection) &&
                !_this.isMonthDisabled(m),
              "react-datepicker__month-text--in-selecting-range":
                _this.isInSelectingRangeMonth(m),
              "react-datepicker__month-text--in-range":
                startDate && endDate
                  ? isMonthInRange(startDate, endDate, m, day)
                  : undefined,
              "react-datepicker__month-text--range-start":
                _this.isRangeStartMonth(m),
              "react-datepicker__month-text--range-end":
                _this.isRangeEndMonth(m),
              "react-datepicker__month-text--selecting-range-start":
                _this.isSelectingMonthRangeStart(m),
              "react-datepicker__month-text--selecting-range-end":
                _this.isSelectingMonthRangeEnd(m),
              "react-datepicker__month-text--today": _this.isCurrentMonth(
                day,
                m,
              ),
            },
          );
        };
        _this.getTabIndex = function (m) {
          if (_this.props.preSelection == null) {
            return "-1";
          }
          var preSelectedMonth = getMonth.getMonth(_this.props.preSelection);
          var isPreSelectedMonthDisabled =
            _this.isMonthDisabledForLabelDate(preSelectedMonth).isDisabled;
          var tabIndex =
            m === preSelectedMonth &&
            !(
              isPreSelectedMonthDisabled ||
              _this.props.disabledKeyboardNavigation
            )
              ? "0"
              : "-1";
          return tabIndex;
        };
        _this.getQuarterTabIndex = function (q) {
          if (_this.props.preSelection == null) {
            return "-1";
          }
          var preSelectedQuarter = getQuarter.getQuarter(
            _this.props.preSelection,
          );
          var isCurrentQuarterDisabled = isQuarterDisabled(
            _this.props.day,
            _this.props,
          );
          var tabIndex =
            q === preSelectedQuarter &&
            !(
              isCurrentQuarterDisabled || _this.props.disabledKeyboardNavigation
            )
              ? "0"
              : "-1";
          return tabIndex;
        };
        _this.getAriaLabel = function (month) {
          var _a = _this.props,
            _b = _a.chooseDayAriaLabelPrefix,
            chooseDayAriaLabelPrefix = _b === void 0 ? "Choose" : _b,
            _c = _a.disabledDayAriaLabelPrefix,
            disabledDayAriaLabelPrefix = _c === void 0 ? "Not available" : _c,
            day = _a.day,
            locale = _a.locale;
          var labelDate = setMonth.setMonth(day, month);
          var prefix =
            _this.isDisabled(labelDate) || _this.isExcluded(labelDate)
              ? disabledDayAriaLabelPrefix
              : chooseDayAriaLabelPrefix;
          return ""
            .concat(prefix, " ")
            .concat(formatDate(labelDate, "MMMM yyyy", locale));
        };
        _this.getQuarterClassNames = function (q) {
          var _a = _this.props,
            day = _a.day,
            startDate = _a.startDate,
            endDate = _a.endDate,
            selected = _a.selected,
            minDate = _a.minDate,
            maxDate = _a.maxDate,
            excludeDates = _a.excludeDates,
            includeDates = _a.includeDates,
            filterDate = _a.filterDate,
            preSelection = _a.preSelection,
            disabledKeyboardNavigation = _a.disabledKeyboardNavigation;
          var isDisabled =
            (minDate ||
              maxDate ||
              excludeDates ||
              includeDates ||
              filterDate) &&
            isQuarterDisabled(setQuarter.setQuarter(day, q), _this.props);
          return clsx.clsx(
            "react-datepicker__quarter-text",
            "react-datepicker__quarter-".concat(q),
            {
              "react-datepicker__quarter-text--disabled": isDisabled,
              "react-datepicker__quarter-text--selected": selected
                ? _this.isSelectedQuarter(day, q, selected)
                : undefined,
              "react-datepicker__quarter-text--keyboard-selected":
                !disabledKeyboardNavigation &&
                preSelection &&
                _this.isSelectedQuarter(day, q, preSelection) &&
                !isDisabled,
              "react-datepicker__quarter-text--in-selecting-range":
                _this.isInSelectingRangeQuarter(q),
              "react-datepicker__quarter-text--in-range":
                startDate && endDate
                  ? isQuarterInRange(startDate, endDate, q, day)
                  : undefined,
              "react-datepicker__quarter-text--range-start":
                _this.isRangeStartQuarter(q),
              "react-datepicker__quarter-text--range-end":
                _this.isRangeEndQuarter(q),
            },
          );
        };
        _this.getMonthContent = function (m) {
          var _a = _this.props,
            showFullMonthYearPicker = _a.showFullMonthYearPicker,
            renderMonthContent = _a.renderMonthContent,
            locale = _a.locale,
            day = _a.day;
          var shortMonthText = getMonthShortInLocale(m, locale);
          var fullMonthText = getMonthInLocale(m, locale);
          if (renderMonthContent) {
            return renderMonthContent(m, shortMonthText, fullMonthText, day);
          }
          return showFullMonthYearPicker ? fullMonthText : shortMonthText;
        };
        _this.getQuarterContent = function (q) {
          var _a;
          var _b = _this.props,
            renderQuarterContent = _b.renderQuarterContent,
            locale = _b.locale;
          var shortQuarter = getQuarterShortInLocale(q, locale);
          return (_a =
            renderQuarterContent === null || renderQuarterContent === void 0
              ? void 0
              : renderQuarterContent(q, shortQuarter)) !== null && _a !== void 0
            ? _a
            : shortQuarter;
        };
        _this.renderMonths = function () {
          var _a;
          var _b = _this.props,
            showTwoColumnMonthYearPicker = _b.showTwoColumnMonthYearPicker,
            showFourColumnMonthYearPicker = _b.showFourColumnMonthYearPicker,
            day = _b.day,
            selected = _b.selected;
          var monthColumns =
            (_a =
              MONTH_COLUMNS[
                getMonthColumnsLayout(
                  showFourColumnMonthYearPicker,
                  showTwoColumnMonthYearPicker,
                )
              ]) === null || _a === void 0
              ? void 0
              : _a.grid;
          return monthColumns === null || monthColumns === void 0
            ? void 0
            : monthColumns.map(function (month, i) {
                return React__default.default.createElement(
                  "div",
                  { className: "react-datepicker__month-wrapper", key: i },
                  month.map(function (m, j) {
                    return React__default.default.createElement(
                      "div",
                      {
                        ref: _this.MONTH_REFS[m],
                        key: j,
                        onClick: function (event) {
                          _this.onMonthClick(event, m);
                        },
                        onKeyDown: function (event) {
                          if (isSpaceKeyDown(event)) {
                            event.preventDefault();
                            event.key = KeyType.Enter;
                          }
                          _this.onMonthKeyDown(event, m);
                        },
                        onMouseEnter: !_this.props.usePointerEvent
                          ? function () {
                              return _this.onMonthMouseEnter(m);
                            }
                          : undefined,
                        onPointerEnter: _this.props.usePointerEvent
                          ? function () {
                              return _this.onMonthMouseEnter(m);
                            }
                          : undefined,
                        tabIndex: Number(_this.getTabIndex(m)),
                        className: _this.getMonthClassNames(m),
                        "aria-disabled": _this.isMonthDisabled(m),
                        role: "option",
                        "aria-label": _this.getAriaLabel(m),
                        "aria-current": _this.isCurrentMonth(day, m)
                          ? "date"
                          : undefined,
                        "aria-selected": selected
                          ? _this.isSelectedMonth(day, m, selected)
                          : undefined,
                      },
                      _this.getMonthContent(m),
                    );
                  }),
                );
              });
        };
        _this.renderQuarters = function () {
          var _a = _this.props,
            day = _a.day,
            selected = _a.selected;
          var quarters = [1, 2, 3, 4];
          return React__default.default.createElement(
            "div",
            { className: "react-datepicker__quarter-wrapper" },
            quarters.map(function (q, j) {
              return React__default.default.createElement(
                "div",
                {
                  key: j,
                  ref: _this.QUARTER_REFS[j],
                  role: "option",
                  onClick: function (event) {
                    _this.onQuarterClick(event, q);
                  },
                  onKeyDown: function (event) {
                    _this.onQuarterKeyDown(event, q);
                  },
                  onMouseEnter: !_this.props.usePointerEvent
                    ? function () {
                        return _this.onQuarterMouseEnter(q);
                      }
                    : undefined,
                  onPointerEnter: _this.props.usePointerEvent
                    ? function () {
                        return _this.onQuarterMouseEnter(q);
                      }
                    : undefined,
                  className: _this.getQuarterClassNames(q),
                  "aria-selected": selected
                    ? _this.isSelectedQuarter(day, q, selected)
                    : undefined,
                  tabIndex: Number(_this.getQuarterTabIndex(q)),
                  "aria-current": _this.isCurrentQuarter(day, q)
                    ? "date"
                    : undefined,
                },
                _this.getQuarterContent(q),
              );
            }),
          );
        };
        _this.getClassNames = function () {
          var _a = _this.props,
            selectingDate = _a.selectingDate,
            selectsStart = _a.selectsStart,
            selectsEnd = _a.selectsEnd,
            showMonthYearPicker = _a.showMonthYearPicker,
            showQuarterYearPicker = _a.showQuarterYearPicker,
            showWeekPicker = _a.showWeekPicker;
          return clsx.clsx(
            "react-datepicker__month",
            {
              "react-datepicker__month--selecting-range":
                selectingDate && (selectsStart || selectsEnd),
            },
            { "react-datepicker__monthPicker": showMonthYearPicker },
            { "react-datepicker__quarterPicker": showQuarterYearPicker },
            { "react-datepicker__weekPicker": showWeekPicker },
          );
        };
        return _this;
      }
      Month.prototype.getSelection = function () {
        var _a = this.props,
          selected = _a.selected,
          selectedDates = _a.selectedDates,
          selectsMultiple = _a.selectsMultiple;
        if (selectsMultiple) {
          return selectedDates;
        }
        if (selected) {
          return [selected];
        }
        return undefined;
      };
      Month.prototype.render = function () {
        var _a = this.props,
          showMonthYearPicker = _a.showMonthYearPicker,
          showQuarterYearPicker = _a.showQuarterYearPicker,
          day = _a.day,
          _b = _a.ariaLabelPrefix,
          ariaLabelPrefix = _b === void 0 ? "Month " : _b;
        var formattedAriaLabelPrefix = ariaLabelPrefix
          ? ariaLabelPrefix.trim() + " "
          : "";
        return React__default.default.createElement(
          "div",
          {
            className: this.getClassNames(),
            onMouseLeave: !this.props.usePointerEvent
              ? this.handleMouseLeave
              : undefined,
            onPointerLeave: this.props.usePointerEvent
              ? this.handleMouseLeave
              : undefined,
            "aria-label": ""
              .concat(formattedAriaLabelPrefix)
              .concat(formatDate(day, "MMMM, yyyy", this.props.locale)),
            role: "listbox",
          },
          showMonthYearPicker
            ? this.renderMonths()
            : showQuarterYearPicker
              ? this.renderQuarters()
              : this.renderWeeks(),
        );
      };
      return Month;
    })(React.Component);

    var MonthDropdownOptions = /** @class */ (function (_super) {
      __extends(MonthDropdownOptions, _super);
      function MonthDropdownOptions() {
        var _this = (_super !== null && _super.apply(this, arguments)) || this;
        _this.isSelectedMonth = function (i) {
          return _this.props.month === i;
        };
        _this.renderOptions = function () {
          return _this.props.monthNames.map(function (month, i) {
            return React__default.default.createElement(
              "div",
              {
                className: _this.isSelectedMonth(i)
                  ? "react-datepicker__month-option react-datepicker__month-option--selected_month"
                  : "react-datepicker__month-option",
                key: month,
                onClick: _this.onChange.bind(_this, i),
                "aria-selected": _this.isSelectedMonth(i) ? "true" : undefined,
              },
              _this.isSelectedMonth(i)
                ? React__default.default.createElement(
                    "span",
                    { className: "react-datepicker__month-option--selected" },
                    "\u2713",
                  )
                : "",
              month,
            );
          });
        };
        _this.onChange = function (month) {
          return _this.props.onChange(month);
        };
        _this.handleClickOutside = function () {
          return _this.props.onCancel();
        };
        return _this;
      }
      MonthDropdownOptions.prototype.render = function () {
        return React__default.default.createElement(
          ClickOutsideWrapper,
          {
            className: "react-datepicker__month-dropdown",
            onClickOutside: this.handleClickOutside,
          },
          this.renderOptions(),
        );
      };
      return MonthDropdownOptions;
    })(React.Component);

    var MonthDropdown = /** @class */ (function (_super) {
      __extends(MonthDropdown, _super);
      function MonthDropdown() {
        var _this = (_super !== null && _super.apply(this, arguments)) || this;
        _this.state = {
          dropdownVisible: false,
        };
        _this.renderSelectOptions = function (monthNames) {
          return monthNames.map(function (m, i) {
            return React__default.default.createElement(
              "option",
              { key: m, value: i },
              m,
            );
          });
        };
        _this.renderSelectMode = function (monthNames) {
          return React__default.default.createElement(
            "select",
            {
              value: _this.props.month,
              className: "react-datepicker__month-select",
              onChange: function (e) {
                return _this.onChange(parseInt(e.target.value));
              },
            },
            _this.renderSelectOptions(monthNames),
          );
        };
        _this.renderReadView = function (visible, monthNames) {
          return React__default.default.createElement(
            "div",
            {
              key: "read",
              style: { visibility: visible ? "visible" : "hidden" },
              className: "react-datepicker__month-read-view",
              onClick: _this.toggleDropdown,
            },
            React__default.default.createElement("span", {
              className: "react-datepicker__month-read-view--down-arrow",
            }),
            React__default.default.createElement(
              "span",
              {
                className: "react-datepicker__month-read-view--selected-month",
              },
              monthNames[_this.props.month],
            ),
          );
        };
        _this.renderDropdown = function (monthNames) {
          return React__default.default.createElement(
            MonthDropdownOptions,
            _assign({ key: "dropdown" }, _this.props, {
              monthNames: monthNames,
              onChange: _this.onChange,
              onCancel: _this.toggleDropdown,
            }),
          );
        };
        _this.renderScrollMode = function (monthNames) {
          var dropdownVisible = _this.state.dropdownVisible;
          var result = [_this.renderReadView(!dropdownVisible, monthNames)];
          if (dropdownVisible) {
            result.unshift(_this.renderDropdown(monthNames));
          }
          return result;
        };
        _this.onChange = function (month) {
          _this.toggleDropdown();
          if (month !== _this.props.month) {
            _this.props.onChange(month);
          }
        };
        _this.toggleDropdown = function () {
          return _this.setState({
            dropdownVisible: !_this.state.dropdownVisible,
          });
        };
        return _this;
      }
      MonthDropdown.prototype.render = function () {
        var _this = this;
        var monthNames = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11].map(
          this.props.useShortMonthInDropdown
            ? function (m) {
                return getMonthShortInLocale(m, _this.props.locale);
              }
            : function (m) {
                return getMonthInLocale(m, _this.props.locale);
              },
        );
        var renderedDropdown;
        switch (this.props.dropdownMode) {
          case "scroll":
            renderedDropdown = this.renderScrollMode(monthNames);
            break;
          case "select":
            renderedDropdown = this.renderSelectMode(monthNames);
            break;
        }
        return React__default.default.createElement(
          "div",
          {
            className:
              "react-datepicker__month-dropdown-container react-datepicker__month-dropdown-container--".concat(
                this.props.dropdownMode,
              ),
          },
          renderedDropdown,
        );
      };
      return MonthDropdown;
    })(React.Component);

    function generateMonthYears(minDate, maxDate) {
      var list = [];
      var currDate = getStartOfMonth(minDate);
      var lastDate = getStartOfMonth(maxDate);
      while (!isAfter.isAfter(currDate, lastDate)) {
        list.push(newDate(currDate));
        currDate = addMonths.addMonths(currDate, 1);
      }
      return list;
    }
    var MonthYearDropdownOptions = /** @class */ (function (_super) {
      __extends(MonthYearDropdownOptions, _super);
      function MonthYearDropdownOptions(props) {
        var _this = _super.call(this, props) || this;
        _this.renderOptions = function () {
          return _this.state.monthYearsList.map(function (monthYear) {
            var monthYearPoint = getTime.getTime(monthYear);
            var isSameMonthYear =
              isSameYear(_this.props.date, monthYear) &&
              isSameMonth(_this.props.date, monthYear);
            return React__default.default.createElement(
              "div",
              {
                className: isSameMonthYear
                  ? "react-datepicker__month-year-option--selected_month-year"
                  : "react-datepicker__month-year-option",
                key: monthYearPoint,
                onClick: _this.onChange.bind(_this, monthYearPoint),
                "aria-selected": isSameMonthYear ? "true" : undefined,
              },
              isSameMonthYear
                ? React__default.default.createElement(
                    "span",
                    {
                      className:
                        "react-datepicker__month-year-option--selected",
                    },
                    "\u2713",
                  )
                : "",
              formatDate(monthYear, _this.props.dateFormat, _this.props.locale),
            );
          });
        };
        _this.onChange = function (monthYear) {
          return _this.props.onChange(monthYear);
        };
        _this.handleClickOutside = function () {
          _this.props.onCancel();
        };
        _this.state = {
          monthYearsList: generateMonthYears(
            _this.props.minDate,
            _this.props.maxDate,
          ),
        };
        return _this;
      }
      MonthYearDropdownOptions.prototype.render = function () {
        var dropdownClass = clsx.clsx({
          "react-datepicker__month-year-dropdown": true,
          "react-datepicker__month-year-dropdown--scrollable":
            this.props.scrollableMonthYearDropdown,
        });
        return React__default.default.createElement(
          ClickOutsideWrapper,
          { className: dropdownClass, onClickOutside: this.handleClickOutside },
          this.renderOptions(),
        );
      };
      return MonthYearDropdownOptions;
    })(React.Component);

    var MonthYearDropdown = /** @class */ (function (_super) {
      __extends(MonthYearDropdown, _super);
      function MonthYearDropdown() {
        var _this = (_super !== null && _super.apply(this, arguments)) || this;
        _this.state = {
          dropdownVisible: false,
        };
        _this.renderSelectOptions = function () {
          var currDate = getStartOfMonth(_this.props.minDate);
          var lastDate = getStartOfMonth(_this.props.maxDate);
          var options = [];
          while (!isAfter.isAfter(currDate, lastDate)) {
            var timePoint = getTime.getTime(currDate);
            options.push(
              React__default.default.createElement(
                "option",
                { key: timePoint, value: timePoint },
                formatDate(
                  currDate,
                  _this.props.dateFormat,
                  _this.props.locale,
                ),
              ),
            );
            currDate = addMonths.addMonths(currDate, 1);
          }
          return options;
        };
        _this.onSelectChange = function (event) {
          _this.onChange(parseInt(event.target.value));
        };
        _this.renderSelectMode = function () {
          return React__default.default.createElement(
            "select",
            {
              value: getTime.getTime(getStartOfMonth(_this.props.date)),
              className: "react-datepicker__month-year-select",
              onChange: _this.onSelectChange,
            },
            _this.renderSelectOptions(),
          );
        };
        _this.renderReadView = function (visible) {
          var yearMonth = formatDate(
            _this.props.date,
            _this.props.dateFormat,
            _this.props.locale,
          );
          return React__default.default.createElement(
            "div",
            {
              key: "read",
              style: { visibility: visible ? "visible" : "hidden" },
              className: "react-datepicker__month-year-read-view",
              onClick: _this.toggleDropdown,
            },
            React__default.default.createElement("span", {
              className: "react-datepicker__month-year-read-view--down-arrow",
            }),
            React__default.default.createElement(
              "span",
              {
                className:
                  "react-datepicker__month-year-read-view--selected-month-year",
              },
              yearMonth,
            ),
          );
        };
        _this.renderDropdown = function () {
          return React__default.default.createElement(
            MonthYearDropdownOptions,
            _assign({ key: "dropdown" }, _this.props, {
              onChange: _this.onChange,
              onCancel: _this.toggleDropdown,
            }),
          );
        };
        _this.renderScrollMode = function () {
          var dropdownVisible = _this.state.dropdownVisible;
          var result = [_this.renderReadView(!dropdownVisible)];
          if (dropdownVisible) {
            result.unshift(_this.renderDropdown());
          }
          return result;
        };
        _this.onChange = function (monthYearPoint) {
          _this.toggleDropdown();
          var changedDate = newDate(monthYearPoint);
          if (
            isSameYear(_this.props.date, changedDate) &&
            isSameMonth(_this.props.date, changedDate)
          ) {
            return;
          }
          _this.props.onChange(changedDate);
        };
        _this.toggleDropdown = function () {
          return _this.setState({
            dropdownVisible: !_this.state.dropdownVisible,
          });
        };
        return _this;
      }
      MonthYearDropdown.prototype.render = function () {
        var renderedDropdown;
        switch (this.props.dropdownMode) {
          case "scroll":
            renderedDropdown = this.renderScrollMode();
            break;
          case "select":
            renderedDropdown = this.renderSelectMode();
            break;
        }
        return React__default.default.createElement(
          "div",
          {
            className:
              "react-datepicker__month-year-dropdown-container react-datepicker__month-year-dropdown-container--".concat(
                this.props.dropdownMode,
              ),
          },
          renderedDropdown,
        );
      };
      return MonthYearDropdown;
    })(React.Component);

    var Time = /** @class */ (function (_super) {
      __extends(Time, _super);
      function Time() {
        var _this = (_super !== null && _super.apply(this, arguments)) || this;
        _this.state = {
          height: null,
        };
        _this.scrollToTheSelectedTime = function () {
          requestAnimationFrame(function () {
            var _a, _b, _c;
            if (!_this.list) return;
            _this.list.scrollTop =
              (_c =
                _this.centerLi &&
                Time.calcCenterPosition(
                  _this.props.monthRef
                    ? _this.props.monthRef.clientHeight -
                        ((_b =
                          (_a = _this.header) === null || _a === void 0
                            ? void 0
                            : _a.clientHeight) !== null && _b !== void 0
                          ? _b
                          : 0)
                    : _this.list.clientHeight,
                  _this.centerLi,
                )) !== null && _c !== void 0
                ? _c
                : 0;
          });
        };
        _this.handleClick = function (time) {
          var _a, _b;
          if (
            ((_this.props.minTime || _this.props.maxTime) &&
              isTimeInDisabledRange(time, _this.props)) ||
            ((_this.props.excludeTimes ||
              _this.props.includeTimes ||
              _this.props.filterTime) &&
              isTimeDisabled(time, _this.props))
          ) {
            return;
          }
          (_b = (_a = _this.props).onChange) === null || _b === void 0
            ? void 0
            : _b.call(_a, time);
        };
        _this.isSelectedTime = function (time) {
          return (
            _this.props.selected && isSameMinute(_this.props.selected, time)
          );
        };
        _this.isDisabledTime = function (time) {
          return (
            ((_this.props.minTime || _this.props.maxTime) &&
              isTimeInDisabledRange(time, _this.props)) ||
            ((_this.props.excludeTimes ||
              _this.props.includeTimes ||
              _this.props.filterTime) &&
              isTimeDisabled(time, _this.props))
          );
        };
        _this.liClasses = function (time) {
          var _a;
          var classes = [
            "react-datepicker__time-list-item",
            _this.props.timeClassName
              ? _this.props.timeClassName(time)
              : undefined,
          ];
          if (_this.isSelectedTime(time)) {
            classes.push("react-datepicker__time-list-item--selected");
          }
          if (_this.isDisabledTime(time)) {
            classes.push("react-datepicker__time-list-item--disabled");
          }
          //convert this.props.intervals and the relevant time to seconds and check if it it's a clean multiple of the interval
          if (
            _this.props.injectTimes &&
            (getHours.getHours(time) * 3600 +
              getMinutes.getMinutes(time) * 60 +
              getSeconds.getSeconds(time)) %
              (((_a = _this.props.intervals) !== null && _a !== void 0
                ? _a
                : Time.defaultProps.intervals) *
                60) !==
              0
          ) {
            classes.push("react-datepicker__time-list-item--injected");
          }
          return classes.join(" ");
        };
        _this.handleOnKeyDown = function (event, time) {
          var _a, _b;
          if (event.key === KeyType.Space) {
            event.preventDefault();
            event.key = KeyType.Enter;
          }
          if (
            (event.key === KeyType.ArrowUp ||
              event.key === KeyType.ArrowLeft) &&
            event.target instanceof HTMLElement &&
            event.target.previousSibling
          ) {
            event.preventDefault();
            event.target.previousSibling instanceof HTMLElement &&
              event.target.previousSibling.focus();
          }
          if (
            (event.key === KeyType.ArrowDown ||
              event.key === KeyType.ArrowRight) &&
            event.target instanceof HTMLElement &&
            event.target.nextSibling
          ) {
            event.preventDefault();
            event.target.nextSibling instanceof HTMLElement &&
              event.target.nextSibling.focus();
          }
          if (event.key === KeyType.Enter) {
            _this.handleClick(time);
          }
          (_b = (_a = _this.props).handleOnKeyDown) === null || _b === void 0
            ? void 0
            : _b.call(_a, event);
        };
        _this.renderTimes = function () {
          var _a;
          var times = [];
          var format =
            typeof _this.props.format === "string" ? _this.props.format : "p";
          var intervals =
            (_a = _this.props.intervals) !== null && _a !== void 0
              ? _a
              : Time.defaultProps.intervals;
          var activeDate =
            _this.props.selected || _this.props.openToDate || newDate();
          var base = getStartOfDay(activeDate);
          var sortedInjectTimes =
            _this.props.injectTimes &&
            _this.props.injectTimes.sort(function (a, b) {
              return a.getTime() - b.getTime();
            });
          var minutesInDay = 60 * getHoursInDay(activeDate);
          var multiplier = minutesInDay / intervals;
          for (var i = 0; i < multiplier; i++) {
            var currentTime = addMinutes.addMinutes(base, i * intervals);
            times.push(currentTime);
            if (sortedInjectTimes) {
              var timesToInject = timesToInjectAfter(
                base,
                currentTime,
                i,
                intervals,
                sortedInjectTimes,
              );
              times = times.concat(timesToInject);
            }
          }
          // Determine which time to focus and scroll into view when component mounts
          var timeToFocus = times.reduce(function (prev, time) {
            if (time.getTime() <= activeDate.getTime()) {
              return time;
            }
            return prev;
          }, times[0]);
          return times.map(function (time) {
            return React__default.default.createElement(
              "li",
              {
                key: time.valueOf(),
                onClick: _this.handleClick.bind(_this, time),
                className: _this.liClasses(time),
                ref: function (li) {
                  if (time === timeToFocus) {
                    _this.centerLi = li;
                  }
                },
                onKeyDown: function (event) {
                  _this.handleOnKeyDown(event, time);
                },
                tabIndex: time === timeToFocus ? 0 : -1,
                role: "option",
                "aria-selected": _this.isSelectedTime(time)
                  ? "true"
                  : undefined,
                "aria-disabled": _this.isDisabledTime(time)
                  ? "true"
                  : undefined,
              },
              formatDate(time, format, _this.props.locale),
            );
          });
        };
        _this.renderTimeCaption = function () {
          if (_this.props.showTimeCaption === false) {
            return React__default.default.createElement(
              React__default.default.Fragment,
              null,
            );
          }
          return React__default.default.createElement(
            "div",
            {
              className:
                "react-datepicker__header react-datepicker__header--time ".concat(
                  _this.props.showTimeSelectOnly
                    ? "react-datepicker__header--time--only"
                    : "",
                ),
              ref: function (header) {
                _this.header = header;
              },
            },
            React__default.default.createElement(
              "div",
              { className: "react-datepicker-time__header" },
              _this.props.timeCaption,
            ),
          );
        };
        return _this;
      }
      Object.defineProperty(Time, "defaultProps", {
        get: function () {
          return {
            intervals: 30,
            todayButton: null,
            timeCaption: "Time",
            showTimeCaption: true,
          };
        },
        enumerable: false,
        configurable: true,
      });
      Time.prototype.componentDidMount = function () {
        // code to ensure selected time will always be in focus within time window when it first appears
        this.scrollToTheSelectedTime();
        if (this.props.monthRef && this.header) {
          this.setState({
            height: this.props.monthRef.clientHeight - this.header.clientHeight,
          });
        }
      };
      Time.prototype.render = function () {
        var _this = this;
        var _a;
        var height = this.state.height;
        return React__default.default.createElement(
          "div",
          {
            className: "react-datepicker__time-container ".concat(
              (
                (_a = this.props.todayButton) !== null && _a !== void 0
                  ? _a
                  : Time.defaultProps.todayButton
              )
                ? "react-datepicker__time-container--with-today-button"
                : "",
            ),
          },
          this.renderTimeCaption(),
          React__default.default.createElement(
            "div",
            { className: "react-datepicker__time" },
            React__default.default.createElement(
              "div",
              { className: "react-datepicker__time-box" },
              React__default.default.createElement(
                "ul",
                {
                  className: "react-datepicker__time-list",
                  ref: function (list) {
                    _this.list = list;
                  },
                  style: height ? { height: height } : {},
                  role: "listbox",
                  "aria-label": this.props.timeCaption,
                },
                this.renderTimes(),
              ),
            ),
          ),
        );
      };
      Time.calcCenterPosition = function (listHeight, centerLiRef) {
        return (
          centerLiRef.offsetTop -
          (listHeight / 2 - centerLiRef.clientHeight / 2)
        );
      };
      return Time;
    })(React.Component);

    var VERTICAL_NAVIGATION_OFFSET = 3;
    /**
     * `Year` is a component that represents a year in a date picker.
     *
     * @class
     * @param {YearProps} props - The properties that define the `Year` component.
     * @property {VoidFunction} [props.clearSelectingDate] - Function to clear the selected date.
     * @property {Date} [props.date] - The currently selected date.
     * @property {boolean} [props.disabledKeyboardNavigation] - If true, keyboard navigation is disabled.
     * @property {Date} [props.endDate] - The end date in a range selection.
     * @property {(date: Date) => void} props.onDayClick - Function to handle day click events.
     * @property {Date} props.preSelection - The date that is currently in focus.
     * @property {(date: Date) => void} props.setPreSelection - Function to set the pre-selected date.
     * @property {{ [key: string]: any }} props.selected - The selected date(s).
     * @property {boolean} props.inline - If true, the date picker is displayed inline.
     * @property {Date} props.maxDate - The maximum selectable date.
     * @property {Date} props.minDate - The minimum selectable date.
     * @property {boolean} props.usePointerEvent - If true, pointer events are used instead of mouse events.
     * @property {(date: Date) => void} props.onYearMouseEnter - Function to handle mouse enter events on a year.
     * @property {(date: Date) => void} props.onYearMouseLeave - Function to handle mouse leave events on a year.
     */
    var Year = /** @class */ (function (_super) {
      __extends(Year, _super);
      function Year(props) {
        var _this = _super.call(this, props) || this;
        _this.YEAR_REFS = __spreadArray(
          [],
          Array(_this.props.yearItemNumber),
          true,
        ).map(function () {
          return React.createRef();
        });
        _this.isDisabled = function (date) {
          return isDayDisabled(date, {
            minDate: _this.props.minDate,
            maxDate: _this.props.maxDate,
            excludeDates: _this.props.excludeDates,
            includeDates: _this.props.includeDates,
            filterDate: _this.props.filterDate,
          });
        };
        _this.isExcluded = function (date) {
          return isDayExcluded(date, {
            excludeDates: _this.props.excludeDates,
          });
        };
        _this.selectingDate = function () {
          var _a;
          return (_a = _this.props.selectingDate) !== null && _a !== void 0
            ? _a
            : _this.props.preSelection;
        };
        _this.updateFocusOnPaginate = function (refIndex) {
          var waitForReRender = function () {
            var _a, _b;
            (_b =
              (_a = _this.YEAR_REFS[refIndex]) === null || _a === void 0
                ? void 0
                : _a.current) === null || _b === void 0
              ? void 0
              : _b.focus();
          };
          window.requestAnimationFrame(waitForReRender);
        };
        _this.handleYearClick = function (day, event) {
          if (_this.props.onDayClick) {
            _this.props.onDayClick(day, event);
          }
        };
        _this.handleYearNavigation = function (newYear, newDate) {
          var _a, _b, _c, _d;
          var _e = _this.props,
            date = _e.date,
            yearItemNumber = _e.yearItemNumber;
          if (date === undefined || yearItemNumber === undefined) {
            return;
          }
          var startPeriod = getYearsPeriod(date, yearItemNumber).startPeriod;
          if (_this.isDisabled(newDate) || _this.isExcluded(newDate)) {
            return;
          }
          (_b = (_a = _this.props).setPreSelection) === null || _b === void 0
            ? void 0
            : _b.call(_a, newDate);
          if (newYear - startPeriod < 0) {
            _this.updateFocusOnPaginate(
              yearItemNumber - (startPeriod - newYear),
            );
          } else if (newYear - startPeriod >= yearItemNumber) {
            _this.updateFocusOnPaginate(
              Math.abs(yearItemNumber - (newYear - startPeriod)),
            );
          } else
            (_d =
              (_c = _this.YEAR_REFS[newYear - startPeriod]) === null ||
              _c === void 0
                ? void 0
                : _c.current) === null || _d === void 0
              ? void 0
              : _d.focus();
        };
        _this.isSameDay = function (y, other) {
          return isSameDay(y, other);
        };
        _this.isCurrentYear = function (y) {
          return y === getYear.getYear(newDate());
        };
        _this.isRangeStart = function (y) {
          return (
            _this.props.startDate &&
            _this.props.endDate &&
            isSameYear(setYear.setYear(newDate(), y), _this.props.startDate)
          );
        };
        _this.isRangeEnd = function (y) {
          return (
            _this.props.startDate &&
            _this.props.endDate &&
            isSameYear(setYear.setYear(newDate(), y), _this.props.endDate)
          );
        };
        _this.isInRange = function (y) {
          return isYearInRange(y, _this.props.startDate, _this.props.endDate);
        };
        _this.isInSelectingRange = function (y) {
          var _a = _this.props,
            selectsStart = _a.selectsStart,
            selectsEnd = _a.selectsEnd,
            selectsRange = _a.selectsRange,
            startDate = _a.startDate,
            endDate = _a.endDate;
          if (
            !(selectsStart || selectsEnd || selectsRange) ||
            !_this.selectingDate()
          ) {
            return false;
          }
          if (selectsStart && endDate) {
            return isYearInRange(y, _this.selectingDate(), endDate);
          }
          if (selectsEnd && startDate) {
            return isYearInRange(y, startDate, _this.selectingDate());
          }
          if (selectsRange && startDate && !endDate) {
            return isYearInRange(y, startDate, _this.selectingDate());
          }
          return false;
        };
        _this.isSelectingRangeStart = function (y) {
          var _a;
          if (!_this.isInSelectingRange(y)) {
            return false;
          }
          var _b = _this.props,
            startDate = _b.startDate,
            selectsStart = _b.selectsStart;
          var _year = setYear.setYear(newDate(), y);
          if (selectsStart) {
            return isSameYear(
              _year,
              (_a = _this.selectingDate()) !== null && _a !== void 0
                ? _a
                : null,
            );
          }
          return isSameYear(
            _year,
            startDate !== null && startDate !== void 0 ? startDate : null,
          );
        };
        _this.isSelectingRangeEnd = function (y) {
          var _a;
          if (!_this.isInSelectingRange(y)) {
            return false;
          }
          var _b = _this.props,
            endDate = _b.endDate,
            selectsEnd = _b.selectsEnd,
            selectsRange = _b.selectsRange;
          var _year = setYear.setYear(newDate(), y);
          if (selectsEnd || selectsRange) {
            return isSameYear(
              _year,
              (_a = _this.selectingDate()) !== null && _a !== void 0
                ? _a
                : null,
            );
          }
          return isSameYear(
            _year,
            endDate !== null && endDate !== void 0 ? endDate : null,
          );
        };
        _this.isKeyboardSelected = function (y) {
          if (
            _this.props.date === undefined ||
            _this.props.selected == null ||
            _this.props.preSelection == null
          ) {
            return;
          }
          var _a = _this.props,
            minDate = _a.minDate,
            maxDate = _a.maxDate,
            excludeDates = _a.excludeDates,
            includeDates = _a.includeDates,
            filterDate = _a.filterDate;
          var date = getStartOfYear(setYear.setYear(_this.props.date, y));
          var isDisabled =
            (minDate ||
              maxDate ||
              excludeDates ||
              includeDates ||
              filterDate) &&
            isYearDisabled(y, _this.props);
          return (
            !_this.props.disabledKeyboardNavigation &&
            !_this.props.inline &&
            !isSameDay(date, getStartOfYear(_this.props.selected)) &&
            isSameDay(date, getStartOfYear(_this.props.preSelection)) &&
            !isDisabled
          );
        };
        _this.onYearClick = function (event, y) {
          var date = _this.props.date;
          if (date === undefined) {
            return;
          }
          _this.handleYearClick(
            getStartOfYear(setYear.setYear(date, y)),
            event,
          );
        };
        _this.onYearKeyDown = function (event, y) {
          var _a, _b;
          var key = event.key;
          var _c = _this.props,
            date = _c.date,
            yearItemNumber = _c.yearItemNumber,
            handleOnKeyDown = _c.handleOnKeyDown;
          if (key !== KeyType.Tab) {
            // preventDefault on tab event blocks focus change
            event.preventDefault();
          }
          if (!_this.props.disabledKeyboardNavigation) {
            switch (key) {
              case KeyType.Enter:
                if (_this.props.selected == null) {
                  break;
                }
                _this.onYearClick(event, y);
                (_b = (_a = _this.props).setPreSelection) === null ||
                _b === void 0
                  ? void 0
                  : _b.call(_a, _this.props.selected);
                break;
              case KeyType.ArrowRight:
                if (_this.props.preSelection == null) {
                  break;
                }
                _this.handleYearNavigation(
                  y + 1,
                  addYears.addYears(_this.props.preSelection, 1),
                );
                break;
              case KeyType.ArrowLeft:
                if (_this.props.preSelection == null) {
                  break;
                }
                _this.handleYearNavigation(
                  y - 1,
                  subYears.subYears(_this.props.preSelection, 1),
                );
                break;
              case KeyType.ArrowUp: {
                if (
                  date === undefined ||
                  yearItemNumber === undefined ||
                  _this.props.preSelection == null
                ) {
                  break;
                }
                var startPeriod = getYearsPeriod(
                  date,
                  yearItemNumber,
                ).startPeriod;
                var offset = VERTICAL_NAVIGATION_OFFSET;
                var newYear = y - offset;
                if (newYear < startPeriod) {
                  var leftOverOffset = yearItemNumber % offset;
                  if (y >= startPeriod && y < startPeriod + leftOverOffset) {
                    offset = leftOverOffset;
                  } else {
                    offset += leftOverOffset;
                  }
                  newYear = y - offset;
                }
                _this.handleYearNavigation(
                  newYear,
                  subYears.subYears(_this.props.preSelection, offset),
                );
                break;
              }
              case KeyType.ArrowDown: {
                if (
                  date === undefined ||
                  yearItemNumber === undefined ||
                  _this.props.preSelection == null
                ) {
                  break;
                }
                var endPeriod = getYearsPeriod(date, yearItemNumber).endPeriod;
                var offset = VERTICAL_NAVIGATION_OFFSET;
                var newYear = y + offset;
                if (newYear > endPeriod) {
                  var leftOverOffset = yearItemNumber % offset;
                  if (y <= endPeriod && y > endPeriod - leftOverOffset) {
                    offset = leftOverOffset;
                  } else {
                    offset += leftOverOffset;
                  }
                  newYear = y + offset;
                }
                _this.handleYearNavigation(
                  newYear,
                  addYears.addYears(_this.props.preSelection, offset),
                );
                break;
              }
            }
          }
          handleOnKeyDown && handleOnKeyDown(event);
        };
        _this.getYearClassNames = function (y) {
          var _a = _this.props,
            date = _a.date,
            minDate = _a.minDate,
            maxDate = _a.maxDate,
            selected = _a.selected,
            excludeDates = _a.excludeDates,
            includeDates = _a.includeDates,
            filterDate = _a.filterDate,
            yearClassName = _a.yearClassName;
          return clsx.clsx(
            "react-datepicker__year-text",
            "react-datepicker__year-".concat(y),
            date
              ? yearClassName === null || yearClassName === void 0
                ? void 0
                : yearClassName(setYear.setYear(date, y))
              : undefined,
            {
              "react-datepicker__year-text--selected": selected
                ? y === getYear.getYear(selected)
                : undefined,
              "react-datepicker__year-text--disabled":
                (minDate ||
                  maxDate ||
                  excludeDates ||
                  includeDates ||
                  filterDate) &&
                isYearDisabled(y, _this.props),
              "react-datepicker__year-text--keyboard-selected":
                _this.isKeyboardSelected(y),
              "react-datepicker__year-text--range-start": _this.isRangeStart(y),
              "react-datepicker__year-text--range-end": _this.isRangeEnd(y),
              "react-datepicker__year-text--in-range": _this.isInRange(y),
              "react-datepicker__year-text--in-selecting-range":
                _this.isInSelectingRange(y),
              "react-datepicker__year-text--selecting-range-start":
                _this.isSelectingRangeStart(y),
              "react-datepicker__year-text--selecting-range-end":
                _this.isSelectingRangeEnd(y),
              "react-datepicker__year-text--today": _this.isCurrentYear(y),
            },
          );
        };
        _this.getYearTabIndex = function (y) {
          if (
            _this.props.disabledKeyboardNavigation ||
            _this.props.preSelection == null
          ) {
            return "-1";
          }
          var preSelected = getYear.getYear(_this.props.preSelection);
          var isPreSelectedYearDisabled = isYearDisabled(y, _this.props);
          return y === preSelected && !isPreSelectedYearDisabled ? "0" : "-1";
        };
        _this.getYearContent = function (y) {
          return _this.props.renderYearContent
            ? _this.props.renderYearContent(y)
            : y;
        };
        return _this;
      }
      Year.prototype.render = function () {
        var _this = this;
        var yearsList = [];
        var _a = this.props,
          date = _a.date,
          yearItemNumber = _a.yearItemNumber,
          onYearMouseEnter = _a.onYearMouseEnter,
          onYearMouseLeave = _a.onYearMouseLeave;
        if (date === undefined) {
          return null;
        }
        var _b = getYearsPeriod(date, yearItemNumber),
          startPeriod = _b.startPeriod,
          endPeriod = _b.endPeriod;
        var _loop_1 = function (y) {
          yearsList.push(
            React__default.default.createElement(
              "div",
              {
                ref: this_1.YEAR_REFS[y - startPeriod],
                onClick: function (event) {
                  _this.onYearClick(event, y);
                },
                onKeyDown: function (event) {
                  if (isSpaceKeyDown(event)) {
                    event.preventDefault();
                    event.key = KeyType.Enter;
                  }
                  _this.onYearKeyDown(event, y);
                },
                tabIndex: Number(this_1.getYearTabIndex(y)),
                className: this_1.getYearClassNames(y),
                onMouseEnter: !this_1.props.usePointerEvent
                  ? function (event) {
                      return onYearMouseEnter(event, y);
                    }
                  : undefined,
                onPointerEnter: this_1.props.usePointerEvent
                  ? function (event) {
                      return onYearMouseEnter(event, y);
                    }
                  : undefined,
                onMouseLeave: !this_1.props.usePointerEvent
                  ? function (event) {
                      return onYearMouseLeave(event, y);
                    }
                  : undefined,
                onPointerLeave: this_1.props.usePointerEvent
                  ? function (event) {
                      return onYearMouseLeave(event, y);
                    }
                  : undefined,
                key: y,
                "aria-current": this_1.isCurrentYear(y) ? "date" : undefined,
              },
              this_1.getYearContent(y),
            ),
          );
        };
        var this_1 = this;
        for (var y = startPeriod; y <= endPeriod; y++) {
          _loop_1(y);
        }
        return React__default.default.createElement(
          "div",
          { className: "react-datepicker__year" },
          React__default.default.createElement(
            "div",
            {
              className: "react-datepicker__year-wrapper",
              onMouseLeave: !this.props.usePointerEvent
                ? this.props.clearSelectingDate
                : undefined,
              onPointerLeave: this.props.usePointerEvent
                ? this.props.clearSelectingDate
                : undefined,
            },
            yearsList,
          ),
        );
      };
      return Year;
    })(React.Component);

    function generateYears(year, noOfYear, minDate, maxDate) {
      var list = [];
      for (var i = 0; i < 2 * noOfYear + 1; i++) {
        var newYear = year + noOfYear - i;
        var isInRange = true;
        if (minDate) {
          isInRange = getYear.getYear(minDate) <= newYear;
        }
        if (maxDate && isInRange) {
          isInRange = getYear.getYear(maxDate) >= newYear;
        }
        if (isInRange) {
          list.push(newYear);
        }
      }
      return list;
    }
    var YearDropdownOptions = /** @class */ (function (_super) {
      __extends(YearDropdownOptions, _super);
      function YearDropdownOptions(props) {
        var _this = _super.call(this, props) || this;
        _this.renderOptions = function () {
          var selectedYear = _this.props.year;
          var options = _this.state.yearsList.map(function (year) {
            return React__default.default.createElement(
              "div",
              {
                className:
                  selectedYear === year
                    ? "react-datepicker__year-option react-datepicker__year-option--selected_year"
                    : "react-datepicker__year-option",
                key: year,
                onClick: _this.onChange.bind(_this, year),
                "aria-selected": selectedYear === year ? "true" : undefined,
              },
              selectedYear === year
                ? React__default.default.createElement(
                    "span",
                    { className: "react-datepicker__year-option--selected" },
                    "\u2713",
                  )
                : "",
              year,
            );
          });
          var minYear = _this.props.minDate
            ? getYear.getYear(_this.props.minDate)
            : null;
          var maxYear = _this.props.maxDate
            ? getYear.getYear(_this.props.maxDate)
            : null;
          if (
            !maxYear ||
            !_this.state.yearsList.find(function (year) {
              return year === maxYear;
            })
          ) {
            options.unshift(
              React__default.default.createElement(
                "div",
                {
                  className: "react-datepicker__year-option",
                  key: "upcoming",
                  onClick: _this.incrementYears,
                },
                React__default.default.createElement("a", {
                  className:
                    "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-upcoming",
                }),
              ),
            );
          }
          if (
            !minYear ||
            !_this.state.yearsList.find(function (year) {
              return year === minYear;
            })
          ) {
            options.push(
              React__default.default.createElement(
                "div",
                {
                  className: "react-datepicker__year-option",
                  key: "previous",
                  onClick: _this.decrementYears,
                },
                React__default.default.createElement("a", {
                  className:
                    "react-datepicker__navigation react-datepicker__navigation--years react-datepicker__navigation--years-previous",
                }),
              ),
            );
          }
          return options;
        };
        _this.onChange = function (year) {
          _this.props.onChange(year);
        };
        _this.handleClickOutside = function () {
          _this.props.onCancel();
        };
        _this.shiftYears = function (amount) {
          var years = _this.state.yearsList.map(function (year) {
            return year + amount;
          });
          _this.setState({
            yearsList: years,
          });
        };
        _this.incrementYears = function () {
          return _this.shiftYears(1);
        };
        _this.decrementYears = function () {
          return _this.shiftYears(-1);
        };
        var yearDropdownItemNumber = props.yearDropdownItemNumber,
          scrollableYearDropdown = props.scrollableYearDropdown;
        var noOfYear =
          yearDropdownItemNumber || (scrollableYearDropdown ? 10 : 5);
        _this.state = {
          yearsList: generateYears(
            _this.props.year,
            noOfYear,
            _this.props.minDate,
            _this.props.maxDate,
          ),
        };
        _this.dropdownRef = React.createRef();
        return _this;
      }
      YearDropdownOptions.prototype.componentDidMount = function () {
        var dropdownCurrent = this.dropdownRef.current;
        if (dropdownCurrent) {
          // Get array from HTMLCollection
          var dropdownCurrentChildren = dropdownCurrent.children
            ? Array.from(dropdownCurrent.children)
            : null;
          var selectedYearOptionEl = dropdownCurrentChildren
            ? dropdownCurrentChildren.find(function (childEl) {
                return childEl.ariaSelected;
              })
            : null;
          dropdownCurrent.scrollTop =
            selectedYearOptionEl && selectedYearOptionEl instanceof HTMLElement
              ? selectedYearOptionEl.offsetTop +
                (selectedYearOptionEl.clientHeight -
                  dropdownCurrent.clientHeight) /
                  2
              : (dropdownCurrent.scrollHeight - dropdownCurrent.clientHeight) /
                2;
        }
      };
      YearDropdownOptions.prototype.render = function () {
        var dropdownClass = clsx.clsx({
          "react-datepicker__year-dropdown": true,
          "react-datepicker__year-dropdown--scrollable":
            this.props.scrollableYearDropdown,
        });
        return React__default.default.createElement(
          ClickOutsideWrapper,
          {
            className: dropdownClass,
            containerRef: this.dropdownRef,
            onClickOutside: this.handleClickOutside,
          },
          this.renderOptions(),
        );
      };
      return YearDropdownOptions;
    })(React.Component);

    var YearDropdown = /** @class */ (function (_super) {
      __extends(YearDropdown, _super);
      function YearDropdown() {
        var _this = (_super !== null && _super.apply(this, arguments)) || this;
        _this.state = {
          dropdownVisible: false,
        };
        _this.renderSelectOptions = function () {
          var minYear = _this.props.minDate
            ? getYear.getYear(_this.props.minDate)
            : 1900;
          var maxYear = _this.props.maxDate
            ? getYear.getYear(_this.props.maxDate)
            : 2100;
          var options = [];
          for (var i = minYear; i <= maxYear; i++) {
            options.push(
              React__default.default.createElement(
                "option",
                { key: i, value: i },
                i,
              ),
            );
          }
          return options;
        };
        _this.onSelectChange = function (event) {
          _this.onChange(parseInt(event.target.value));
        };
        _this.renderSelectMode = function () {
          return React__default.default.createElement(
            "select",
            {
              value: _this.props.year,
              className: "react-datepicker__year-select",
              onChange: _this.onSelectChange,
            },
            _this.renderSelectOptions(),
          );
        };
        _this.renderReadView = function (visible) {
          return React__default.default.createElement(
            "div",
            {
              key: "read",
              style: { visibility: visible ? "visible" : "hidden" },
              className: "react-datepicker__year-read-view",
              onClick: function (event) {
                return _this.toggleDropdown(event);
              },
            },
            React__default.default.createElement("span", {
              className: "react-datepicker__year-read-view--down-arrow",
            }),
            React__default.default.createElement(
              "span",
              { className: "react-datepicker__year-read-view--selected-year" },
              _this.props.year,
            ),
          );
        };
        _this.renderDropdown = function () {
          return React__default.default.createElement(
            YearDropdownOptions,
            _assign({ key: "dropdown" }, _this.props, {
              onChange: _this.onChange,
              onCancel: _this.toggleDropdown,
            }),
          );
        };
        _this.renderScrollMode = function () {
          var dropdownVisible = _this.state.dropdownVisible;
          var result = [_this.renderReadView(!dropdownVisible)];
          if (dropdownVisible) {
            result.unshift(_this.renderDropdown());
          }
          return result;
        };
        _this.onChange = function (year) {
          _this.toggleDropdown();
          if (year === _this.props.year) return;
          _this.props.onChange(year);
        };
        _this.toggleDropdown = function (event) {
          _this.setState(
            {
              dropdownVisible: !_this.state.dropdownVisible,
            },
            function () {
              if (_this.props.adjustDateOnChange) {
                _this.handleYearChange(_this.props.date, event);
              }
            },
          );
        };
        _this.handleYearChange = function (date, event) {
          var _a;
          (_a = _this.onSelect) === null || _a === void 0
            ? void 0
            : _a.call(_this, date, event);
          _this.setOpen();
        };
        _this.onSelect = function (date, event) {
          var _a, _b;
          (_b = (_a = _this.props).onSelect) === null || _b === void 0
            ? void 0
            : _b.call(_a, date, event);
        };
        _this.setOpen = function () {
          var _a, _b;
          (_b = (_a = _this.props).setOpen) === null || _b === void 0
            ? void 0
            : _b.call(_a, true);
        };
        return _this;
      }
      YearDropdown.prototype.render = function () {
        var renderedDropdown;
        switch (this.props.dropdownMode) {
          case "scroll":
            renderedDropdown = this.renderScrollMode();
            break;
          case "select":
            renderedDropdown = this.renderSelectMode();
            break;
        }
        return React__default.default.createElement(
          "div",
          {
            className:
              "react-datepicker__year-dropdown-container react-datepicker__year-dropdown-container--".concat(
                this.props.dropdownMode,
              ),
          },
          renderedDropdown,
        );
      };
      return YearDropdown;
    })(React.Component);

    var DROPDOWN_FOCUS_CLASSNAMES = [
      "react-datepicker__year-select",
      "react-datepicker__month-select",
      "react-datepicker__month-year-select",
    ];
    var isDropdownSelect = function (element) {
      var classNames = (element.className || "").split(/\s+/);
      return DROPDOWN_FOCUS_CLASSNAMES.some(function (testClassname) {
        return classNames.indexOf(testClassname) >= 0;
      });
    };
    var Calendar = /** @class */ (function (_super) {
      __extends(Calendar, _super);
      function Calendar(props) {
        var _this = _super.call(this, props) || this;
        _this.monthContainer = undefined;
        _this.handleClickOutside = function (event) {
          _this.props.onClickOutside(event);
        };
        _this.setClickOutsideRef = function () {
          return _this.containerRef.current;
        };
        _this.handleDropdownFocus = function (event) {
          var _a, _b;
          if (isDropdownSelect(event.target)) {
            (_b = (_a = _this.props).onDropdownFocus) === null || _b === void 0
              ? void 0
              : _b.call(_a, event);
          }
        };
        _this.getDateInView = function () {
          var _a = _this.props,
            preSelection = _a.preSelection,
            selected = _a.selected,
            openToDate = _a.openToDate;
          var minDate = getEffectiveMinDate(_this.props);
          var maxDate = getEffectiveMaxDate(_this.props);
          var current = newDate();
          var initialDate = openToDate || selected || preSelection;
          if (initialDate) {
            return initialDate;
          } else {
            if (minDate && isBefore.isBefore(current, minDate)) {
              return minDate;
            } else if (maxDate && isAfter.isAfter(current, maxDate)) {
              return maxDate;
            }
          }
          return current;
        };
        _this.increaseMonth = function () {
          _this.setState(
            function (_a) {
              var date = _a.date;
              return {
                date: addMonths.addMonths(date, 1),
              };
            },
            function () {
              return _this.handleMonthChange(_this.state.date);
            },
          );
        };
        _this.decreaseMonth = function () {
          _this.setState(
            function (_a) {
              var date = _a.date;
              return {
                date: subMonths.subMonths(date, 1),
              };
            },
            function () {
              return _this.handleMonthChange(_this.state.date);
            },
          );
        };
        _this.handleDayClick = function (day, event, monthSelectedIn) {
          _this.props.onSelect(day, event, monthSelectedIn);
          _this.props.setPreSelection && _this.props.setPreSelection(day);
        };
        _this.handleDayMouseEnter = function (day) {
          _this.setState({ selectingDate: day });
          _this.props.onDayMouseEnter && _this.props.onDayMouseEnter(day);
        };
        _this.handleMonthMouseLeave = function () {
          _this.setState({ selectingDate: undefined });
          _this.props.onMonthMouseLeave && _this.props.onMonthMouseLeave();
        };
        _this.handleYearMouseEnter = function (event, year) {
          _this.setState({ selectingDate: setYear.setYear(newDate(), year) });
          !!_this.props.onYearMouseEnter &&
            _this.props.onYearMouseEnter(event, year);
        };
        _this.handleYearMouseLeave = function (event, year) {
          !!_this.props.onYearMouseLeave &&
            _this.props.onYearMouseLeave(event, year);
        };
        _this.handleYearChange = function (date) {
          var _a, _b, _c, _d;
          (_b = (_a = _this.props).onYearChange) === null || _b === void 0
            ? void 0
            : _b.call(_a, date);
          _this.setState({ isRenderAriaLiveMessage: true });
          if (_this.props.adjustDateOnChange) {
            _this.props.onSelect(date);
            (_d = (_c = _this.props).setOpen) === null || _d === void 0
              ? void 0
              : _d.call(_c, true);
          }
          _this.props.setPreSelection && _this.props.setPreSelection(date);
        };
        _this.getEnabledPreSelectionDateForMonth = function (date) {
          if (!isDayDisabled(date, _this.props)) {
            return date;
          }
          var startOfMonth = getStartOfMonth(date);
          var endOfMonth = getEndOfMonth(date);
          var totalDays = dateFns.differenceInDays(endOfMonth, startOfMonth);
          var preSelectedDate = null;
          for (var dayIdx = 0; dayIdx <= totalDays; dayIdx++) {
            var processingDate = addDays.addDays(startOfMonth, dayIdx);
            if (!isDayDisabled(processingDate, _this.props)) {
              preSelectedDate = processingDate;
              break;
            }
          }
          return preSelectedDate;
        };
        _this.handleMonthChange = function (date) {
          var _a, _b, _c;
          var enabledPreSelectionDate =
            (_a = _this.getEnabledPreSelectionDateForMonth(date)) !== null &&
            _a !== void 0
              ? _a
              : date;
          _this.handleCustomMonthChange(enabledPreSelectionDate);
          if (_this.props.adjustDateOnChange) {
            _this.props.onSelect(enabledPreSelectionDate);
            (_c = (_b = _this.props).setOpen) === null || _c === void 0
              ? void 0
              : _c.call(_b, true);
          }
          _this.props.setPreSelection &&
            _this.props.setPreSelection(enabledPreSelectionDate);
        };
        _this.handleCustomMonthChange = function (date) {
          var _a, _b;
          (_b = (_a = _this.props).onMonthChange) === null || _b === void 0
            ? void 0
            : _b.call(_a, date);
          _this.setState({ isRenderAriaLiveMessage: true });
        };
        _this.handleMonthYearChange = function (date) {
          _this.handleYearChange(date);
          _this.handleMonthChange(date);
        };
        _this.changeYear = function (year) {
          _this.setState(
            function (_a) {
              var date = _a.date;
              return {
                date: setYear.setYear(date, Number(year)),
              };
            },
            function () {
              return _this.handleYearChange(_this.state.date);
            },
          );
        };
        _this.changeMonth = function (month) {
          _this.setState(
            function (_a) {
              var date = _a.date;
              return {
                date: setMonth.setMonth(date, Number(month)),
              };
            },
            function () {
              return _this.handleMonthChange(_this.state.date);
            },
          );
        };
        _this.changeMonthYear = function (monthYear) {
          _this.setState(
            function (_a) {
              var date = _a.date;
              return {
                date: setYear.setYear(
                  setMonth.setMonth(date, getMonth.getMonth(monthYear)),
                  getYear.getYear(monthYear),
                ),
              };
            },
            function () {
              return _this.handleMonthYearChange(_this.state.date);
            },
          );
        };
        _this.header = function (date) {
          if (date === void 0) {
            date = _this.state.date;
          }
          var startOfWeek = getStartOfWeek(
            date,
            _this.props.locale,
            _this.props.calendarStartDay,
          );
          var dayNames = [];
          if (_this.props.showWeekNumbers) {
            dayNames.push(
              React__default.default.createElement(
                "div",
                { key: "W", className: "react-datepicker__day-name" },
                _this.props.weekLabel || "#",
              ),
            );
          }
          return dayNames.concat(
            [0, 1, 2, 3, 4, 5, 6].map(function (offset) {
              var day = addDays.addDays(startOfWeek, offset);
              var weekDayName = _this.formatWeekday(day, _this.props.locale);
              var weekDayClassName = _this.props.weekDayClassName
                ? _this.props.weekDayClassName(day)
                : undefined;
              return React__default.default.createElement(
                "div",
                {
                  key: offset,
                  "aria-label": formatDate(day, "EEEE", _this.props.locale),
                  className: clsx.clsx(
                    "react-datepicker__day-name",
                    weekDayClassName,
                  ),
                },
                weekDayName,
              );
            }),
          );
        };
        _this.formatWeekday = function (day, locale) {
          if (_this.props.formatWeekDay) {
            return getFormattedWeekdayInLocale(
              day,
              _this.props.formatWeekDay,
              locale,
            );
          }
          return _this.props.useWeekdaysShort
            ? getWeekdayShortInLocale(day, locale)
            : getWeekdayMinInLocale(day, locale);
        };
        _this.decreaseYear = function () {
          _this.setState(
            function (_a) {
              var _b;
              var date = _a.date;
              return {
                date: subYears.subYears(
                  date,
                  _this.props.showYearPicker
                    ? (_b = _this.props.yearItemNumber) !== null &&
                      _b !== void 0
                      ? _b
                      : Calendar.defaultProps.yearItemNumber
                    : 1,
                ),
              };
            },
            function () {
              return _this.handleYearChange(_this.state.date);
            },
          );
        };
        _this.clearSelectingDate = function () {
          _this.setState({ selectingDate: undefined });
        };
        _this.renderPreviousButton = function () {
          var _a, _b, _c;
          if (_this.props.renderCustomHeader) {
            return;
          }
          var monthsShown =
            (_a = _this.props.monthsShown) !== null && _a !== void 0
              ? _a
              : Calendar.defaultProps.monthsShown;
          var monthsToSubtract = _this.props.showPreviousMonths
            ? monthsShown - 1
            : 0;
          var monthSelectedIn =
            (_b = _this.props.monthSelectedIn) !== null && _b !== void 0
              ? _b
              : monthsToSubtract;
          var fromMonthDate = subMonths.subMonths(
            _this.state.date,
            monthSelectedIn,
          );
          var allPrevDaysDisabled;
          switch (true) {
            case _this.props.showMonthYearPicker:
              allPrevDaysDisabled = yearDisabledBefore(
                _this.state.date,
                _this.props,
              );
              break;
            case _this.props.showYearPicker:
              allPrevDaysDisabled = yearsDisabledBefore(
                _this.state.date,
                _this.props,
              );
              break;
            case _this.props.showQuarterYearPicker:
              allPrevDaysDisabled = quarterDisabledBefore(
                _this.state.date,
                _this.props,
              );
              break;
            default:
              allPrevDaysDisabled = monthDisabledBefore(
                fromMonthDate,
                _this.props,
              );
              break;
          }
          if (
            (!((_c = _this.props.forceShowMonthNavigation) !== null &&
            _c !== void 0
              ? _c
              : Calendar.defaultProps.forceShowMonthNavigation) &&
              !_this.props.showDisabledMonthNavigation &&
              allPrevDaysDisabled) ||
            _this.props.showTimeSelectOnly
          ) {
            return;
          }
          var iconClasses = [
            "react-datepicker__navigation-icon",
            "react-datepicker__navigation-icon--previous",
          ];
          var classes = [
            "react-datepicker__navigation",
            "react-datepicker__navigation--previous",
          ];
          var clickHandler = _this.decreaseMonth;
          if (
            _this.props.showMonthYearPicker ||
            _this.props.showQuarterYearPicker ||
            _this.props.showYearPicker
          ) {
            clickHandler = _this.decreaseYear;
          }
          if (allPrevDaysDisabled && _this.props.showDisabledMonthNavigation) {
            classes.push("react-datepicker__navigation--previous--disabled");
            clickHandler = undefined;
          }
          var isForYear =
            _this.props.showMonthYearPicker ||
            _this.props.showQuarterYearPicker ||
            _this.props.showYearPicker;
          var _d = _this.props,
            _e = _d.previousMonthButtonLabel,
            previousMonthButtonLabel =
              _e === void 0
                ? Calendar.defaultProps.previousMonthButtonLabel
                : _e,
            _f = _d.previousYearButtonLabel,
            previousYearButtonLabel =
              _f === void 0
                ? Calendar.defaultProps.previousYearButtonLabel
                : _f;
          var _g = _this.props,
            _h = _g.previousMonthAriaLabel,
            previousMonthAriaLabel =
              _h === void 0
                ? typeof previousMonthButtonLabel === "string"
                  ? previousMonthButtonLabel
                  : "Previous Month"
                : _h,
            _j = _g.previousYearAriaLabel,
            previousYearAriaLabel =
              _j === void 0
                ? typeof previousYearButtonLabel === "string"
                  ? previousYearButtonLabel
                  : "Previous Year"
                : _j;
          return React__default.default.createElement(
            "button",
            {
              type: "button",
              className: classes.join(" "),
              onClick: clickHandler,
              onKeyDown: _this.props.handleOnKeyDown,
              "aria-label": isForYear
                ? previousYearAriaLabel
                : previousMonthAriaLabel,
            },
            React__default.default.createElement(
              "span",
              { className: iconClasses.join(" ") },
              isForYear ? previousYearButtonLabel : previousMonthButtonLabel,
            ),
          );
        };
        _this.increaseYear = function () {
          _this.setState(
            function (_a) {
              var _b;
              var date = _a.date;
              return {
                date: addYears.addYears(
                  date,
                  _this.props.showYearPicker
                    ? (_b = _this.props.yearItemNumber) !== null &&
                      _b !== void 0
                      ? _b
                      : Calendar.defaultProps.yearItemNumber
                    : 1,
                ),
              };
            },
            function () {
              return _this.handleYearChange(_this.state.date);
            },
          );
        };
        _this.renderNextButton = function () {
          var _a;
          if (_this.props.renderCustomHeader) {
            return;
          }
          var allNextDaysDisabled;
          switch (true) {
            case _this.props.showMonthYearPicker:
              allNextDaysDisabled = yearDisabledAfter(
                _this.state.date,
                _this.props,
              );
              break;
            case _this.props.showYearPicker:
              allNextDaysDisabled = yearsDisabledAfter(
                _this.state.date,
                _this.props,
              );
              break;
            case _this.props.showQuarterYearPicker:
              allNextDaysDisabled = quarterDisabledAfter(
                _this.state.date,
                _this.props,
              );
              break;
            default:
              allNextDaysDisabled = monthDisabledAfter(
                _this.state.date,
                _this.props,
              );
              break;
          }
          if (
            (!((_a = _this.props.forceShowMonthNavigation) !== null &&
            _a !== void 0
              ? _a
              : Calendar.defaultProps.forceShowMonthNavigation) &&
              !_this.props.showDisabledMonthNavigation &&
              allNextDaysDisabled) ||
            _this.props.showTimeSelectOnly
          ) {
            return;
          }
          var classes = [
            "react-datepicker__navigation",
            "react-datepicker__navigation--next",
          ];
          var iconClasses = [
            "react-datepicker__navigation-icon",
            "react-datepicker__navigation-icon--next",
          ];
          if (_this.props.showTimeSelect) {
            classes.push("react-datepicker__navigation--next--with-time");
          }
          if (_this.props.todayButton) {
            classes.push(
              "react-datepicker__navigation--next--with-today-button",
            );
          }
          var clickHandler = _this.increaseMonth;
          if (
            _this.props.showMonthYearPicker ||
            _this.props.showQuarterYearPicker ||
            _this.props.showYearPicker
          ) {
            clickHandler = _this.increaseYear;
          }
          if (allNextDaysDisabled && _this.props.showDisabledMonthNavigation) {
            classes.push("react-datepicker__navigation--next--disabled");
            clickHandler = undefined;
          }
          var isForYear =
            _this.props.showMonthYearPicker ||
            _this.props.showQuarterYearPicker ||
            _this.props.showYearPicker;
          var _b = _this.props,
            _c = _b.nextMonthButtonLabel,
            nextMonthButtonLabel =
              _c === void 0 ? Calendar.defaultProps.nextMonthButtonLabel : _c,
            _d = _b.nextYearButtonLabel,
            nextYearButtonLabel =
              _d === void 0 ? Calendar.defaultProps.nextYearButtonLabel : _d;
          var _e = _this.props,
            _f = _e.nextMonthAriaLabel,
            nextMonthAriaLabel =
              _f === void 0
                ? typeof nextMonthButtonLabel === "string"
                  ? nextMonthButtonLabel
                  : "Next Month"
                : _f,
            _g = _e.nextYearAriaLabel,
            nextYearAriaLabel =
              _g === void 0
                ? typeof nextYearButtonLabel === "string"
                  ? nextYearButtonLabel
                  : "Next Year"
                : _g;
          return React__default.default.createElement(
            "button",
            {
              type: "button",
              className: classes.join(" "),
              onClick: clickHandler,
              onKeyDown: _this.props.handleOnKeyDown,
              "aria-label": isForYear ? nextYearAriaLabel : nextMonthAriaLabel,
            },
            React__default.default.createElement(
              "span",
              { className: iconClasses.join(" ") },
              isForYear ? nextYearButtonLabel : nextMonthButtonLabel,
            ),
          );
        };
        _this.renderCurrentMonth = function (date) {
          if (date === void 0) {
            date = _this.state.date;
          }
          var classes = ["react-datepicker__current-month"];
          if (_this.props.showYearDropdown) {
            classes.push("react-datepicker__current-month--hasYearDropdown");
          }
          if (_this.props.showMonthDropdown) {
            classes.push("react-datepicker__current-month--hasMonthDropdown");
          }
          if (_this.props.showMonthYearDropdown) {
            classes.push(
              "react-datepicker__current-month--hasMonthYearDropdown",
            );
          }
          return React__default.default.createElement(
            "h2",
            { className: classes.join(" ") },
            formatDate(date, _this.props.dateFormat, _this.props.locale),
          );
        };
        _this.renderYearDropdown = function (overrideHide) {
          if (overrideHide === void 0) {
            overrideHide = false;
          }
          if (!_this.props.showYearDropdown || overrideHide) {
            return;
          }
          return React__default.default.createElement(
            YearDropdown,
            _assign({}, Calendar.defaultProps, _this.props, {
              date: _this.state.date,
              onChange: _this.changeYear,
              year: getYear.getYear(_this.state.date),
            }),
          );
        };
        _this.renderMonthDropdown = function (overrideHide) {
          if (overrideHide === void 0) {
            overrideHide = false;
          }
          if (!_this.props.showMonthDropdown || overrideHide) {
            return;
          }
          return React__default.default.createElement(
            MonthDropdown,
            _assign({}, Calendar.defaultProps, _this.props, {
              month: getMonth.getMonth(_this.state.date),
              onChange: _this.changeMonth,
            }),
          );
        };
        _this.renderMonthYearDropdown = function (overrideHide) {
          if (overrideHide === void 0) {
            overrideHide = false;
          }
          if (!_this.props.showMonthYearDropdown || overrideHide) {
            return;
          }
          return React__default.default.createElement(
            MonthYearDropdown,
            _assign({}, Calendar.defaultProps, _this.props, {
              date: _this.state.date,
              onChange: _this.changeMonthYear,
            }),
          );
        };
        _this.handleTodayButtonClick = function (event) {
          _this.props.onSelect(getStartOfToday(), event);
          _this.props.setPreSelection &&
            _this.props.setPreSelection(getStartOfToday());
        };
        _this.renderTodayButton = function () {
          if (!_this.props.todayButton || _this.props.showTimeSelectOnly) {
            return;
          }
          return React__default.default.createElement(
            "div",
            {
              className: "react-datepicker__today-button",
              onClick: _this.handleTodayButtonClick,
            },
            _this.props.todayButton,
          );
        };
        _this.renderDefaultHeader = function (_a) {
          var monthDate = _a.monthDate,
            i = _a.i;
          return React__default.default.createElement(
            "div",
            {
              className: "react-datepicker__header ".concat(
                _this.props.showTimeSelect
                  ? "react-datepicker__header--has-time-select"
                  : "",
              ),
            },
            _this.renderCurrentMonth(monthDate),
            React__default.default.createElement(
              "div",
              {
                className:
                  "react-datepicker__header__dropdown react-datepicker__header__dropdown--".concat(
                    _this.props.dropdownMode,
                  ),
                onFocus: _this.handleDropdownFocus,
              },
              _this.renderMonthDropdown(i !== 0),
              _this.renderMonthYearDropdown(i !== 0),
              _this.renderYearDropdown(i !== 0),
            ),
            React__default.default.createElement(
              "div",
              { className: "react-datepicker__day-names" },
              _this.header(monthDate),
            ),
          );
        };
        _this.renderCustomHeader = function (headerArgs) {
          var _a, _b;
          var monthDate = headerArgs.monthDate,
            i = headerArgs.i;
          if (
            (_this.props.showTimeSelect && !_this.state.monthContainer) ||
            _this.props.showTimeSelectOnly
          ) {
            return null;
          }
          var prevMonthButtonDisabled = monthDisabledBefore(
            _this.state.date,
            _this.props,
          );
          var nextMonthButtonDisabled = monthDisabledAfter(
            _this.state.date,
            _this.props,
          );
          var prevYearButtonDisabled = yearDisabledBefore(
            _this.state.date,
            _this.props,
          );
          var nextYearButtonDisabled = yearDisabledAfter(
            _this.state.date,
            _this.props,
          );
          var showDayNames =
            !_this.props.showMonthYearPicker &&
            !_this.props.showQuarterYearPicker &&
            !_this.props.showYearPicker;
          return React__default.default.createElement(
            "div",
            {
              className:
                "react-datepicker__header react-datepicker__header--custom",
              onFocus: _this.props.onDropdownFocus,
            },
            (_b = (_a = _this.props).renderCustomHeader) === null ||
              _b === void 0
              ? void 0
              : _b.call(
                  _a,
                  _assign(_assign({}, _this.state), {
                    customHeaderCount: i,
                    monthDate: monthDate,
                    changeMonth: _this.changeMonth,
                    changeYear: _this.changeYear,
                    decreaseMonth: _this.decreaseMonth,
                    increaseMonth: _this.increaseMonth,
                    decreaseYear: _this.decreaseYear,
                    increaseYear: _this.increaseYear,
                    prevMonthButtonDisabled: prevMonthButtonDisabled,
                    nextMonthButtonDisabled: nextMonthButtonDisabled,
                    prevYearButtonDisabled: prevYearButtonDisabled,
                    nextYearButtonDisabled: nextYearButtonDisabled,
                  }),
                ),
            showDayNames &&
              React__default.default.createElement(
                "div",
                { className: "react-datepicker__day-names" },
                _this.header(monthDate),
              ),
          );
        };
        _this.renderYearHeader = function (_a) {
          var monthDate = _a.monthDate;
          var _b = _this.props,
            showYearPicker = _b.showYearPicker,
            _c = _b.yearItemNumber,
            yearItemNumber =
              _c === void 0 ? Calendar.defaultProps.yearItemNumber : _c;
          var _d = getYearsPeriod(monthDate, yearItemNumber),
            startPeriod = _d.startPeriod,
            endPeriod = _d.endPeriod;
          return React__default.default.createElement(
            "div",
            {
              className:
                "react-datepicker__header react-datepicker-year-header",
            },
            showYearPicker
              ? "".concat(startPeriod, " - ").concat(endPeriod)
              : getYear.getYear(monthDate),
          );
        };
        _this.renderHeader = function (_a) {
          var monthDate = _a.monthDate,
            _b = _a.i,
            i = _b === void 0 ? 0 : _b;
          var headerArgs = { monthDate: monthDate, i: i };
          switch (true) {
            case _this.props.renderCustomHeader !== undefined:
              return _this.renderCustomHeader(headerArgs);
            case _this.props.showMonthYearPicker ||
              _this.props.showQuarterYearPicker ||
              _this.props.showYearPicker:
              return _this.renderYearHeader(headerArgs);
            default:
              return _this.renderDefaultHeader(headerArgs);
          }
        };
        _this.renderMonths = function () {
          var _a, _b;
          if (_this.props.showTimeSelectOnly || _this.props.showYearPicker) {
            return;
          }
          var monthList = [];
          var monthsShown =
            (_a = _this.props.monthsShown) !== null && _a !== void 0
              ? _a
              : Calendar.defaultProps.monthsShown;
          var monthsToSubtract = _this.props.showPreviousMonths
            ? monthsShown - 1
            : 0;
          var fromMonthDate =
            _this.props.showMonthYearPicker || _this.props.showQuarterYearPicker
              ? addYears.addYears(_this.state.date, monthsToSubtract)
              : subMonths.subMonths(_this.state.date, monthsToSubtract);
          var monthSelectedIn =
            (_b = _this.props.monthSelectedIn) !== null && _b !== void 0
              ? _b
              : monthsToSubtract;
          for (var i = 0; i < monthsShown; ++i) {
            var monthsToAdd = i - monthSelectedIn + monthsToSubtract;
            var monthDate =
              _this.props.showMonthYearPicker ||
              _this.props.showQuarterYearPicker
                ? addYears.addYears(fromMonthDate, monthsToAdd)
                : addMonths.addMonths(fromMonthDate, monthsToAdd);
            var monthKey = "month-".concat(i);
            var monthShowsDuplicateDaysEnd = i < monthsShown - 1;
            var monthShowsDuplicateDaysStart = i > 0;
            monthList.push(
              React__default.default.createElement(
                "div",
                {
                  key: monthKey,
                  ref: function (div) {
                    _this.monthContainer =
                      div !== null && div !== void 0 ? div : undefined;
                  },
                  className: "react-datepicker__month-container",
                },
                _this.renderHeader({ monthDate: monthDate, i: i }),
                React__default.default.createElement(
                  Month,
                  _assign({}, Calendar.defaultProps, _this.props, {
                    ariaLabelPrefix: _this.props.monthAriaLabelPrefix,
                    day: monthDate,
                    onDayClick: _this.handleDayClick,
                    handleOnKeyDown: _this.props.handleOnDayKeyDown,
                    handleOnMonthKeyDown: _this.props.handleOnKeyDown,
                    onDayMouseEnter: _this.handleDayMouseEnter,
                    onMouseLeave: _this.handleMonthMouseLeave,
                    orderInDisplay: i,
                    selectingDate: _this.state.selectingDate,
                    monthShowsDuplicateDaysEnd: monthShowsDuplicateDaysEnd,
                    monthShowsDuplicateDaysStart: monthShowsDuplicateDaysStart,
                  }),
                ),
              ),
            );
          }
          return monthList;
        };
        _this.renderYears = function () {
          if (_this.props.showTimeSelectOnly) {
            return;
          }
          if (_this.props.showYearPicker) {
            return React__default.default.createElement(
              "div",
              { className: "react-datepicker__year--container" },
              _this.renderHeader({ monthDate: _this.state.date }),
              React__default.default.createElement(
                Year,
                _assign({}, Calendar.defaultProps, _this.props, {
                  selectingDate: _this.state.selectingDate,
                  date: _this.state.date,
                  onDayClick: _this.handleDayClick,
                  clearSelectingDate: _this.clearSelectingDate,
                  onYearMouseEnter: _this.handleYearMouseEnter,
                  onYearMouseLeave: _this.handleYearMouseLeave,
                }),
              ),
            );
          }
          return;
        };
        _this.renderTimeSection = function () {
          if (
            _this.props.showTimeSelect &&
            (_this.state.monthContainer || _this.props.showTimeSelectOnly)
          ) {
            return React__default.default.createElement(
              Time,
              _assign({}, Calendar.defaultProps, _this.props, {
                onChange: _this.props.onTimeChange,
                format: _this.props.timeFormat,
                intervals: _this.props.timeIntervals,
                monthRef: _this.state.monthContainer,
              }),
            );
          }
          return;
        };
        _this.renderInputTimeSection = function () {
          var time = _this.props.selected
            ? new Date(_this.props.selected)
            : undefined;
          var timeValid =
            time && isValid(time) && Boolean(_this.props.selected);
          var timeString = timeValid
            ? ""
                .concat(addZero(time.getHours()), ":")
                .concat(addZero(time.getMinutes()))
            : "";
          if (_this.props.showTimeInput) {
            return React__default.default.createElement(
              InputTime,
              _assign({}, Calendar.defaultProps, _this.props, {
                date: time,
                timeString: timeString,
                onChange: _this.props.onTimeChange,
              }),
            );
          }
          return;
        };
        _this.renderAriaLiveRegion = function () {
          var _a;
          var _b = getYearsPeriod(
              _this.state.date,
              (_a = _this.props.yearItemNumber) !== null && _a !== void 0
                ? _a
                : Calendar.defaultProps.yearItemNumber,
            ),
            startPeriod = _b.startPeriod,
            endPeriod = _b.endPeriod;
          var ariaLiveMessage;
          if (_this.props.showYearPicker) {
            ariaLiveMessage = "".concat(startPeriod, " - ").concat(endPeriod);
          } else if (
            _this.props.showMonthYearPicker ||
            _this.props.showQuarterYearPicker
          ) {
            ariaLiveMessage = getYear.getYear(_this.state.date);
          } else {
            ariaLiveMessage = ""
              .concat(
                getMonthInLocale(
                  getMonth.getMonth(_this.state.date),
                  _this.props.locale,
                ),
                " ",
              )
              .concat(getYear.getYear(_this.state.date));
          }
          return React__default.default.createElement(
            "span",
            {
              role: "alert",
              "aria-live": "polite",
              className: "react-datepicker__aria-live",
            },
            _this.state.isRenderAriaLiveMessage && ariaLiveMessage,
          );
        };
        _this.renderChildren = function () {
          if (_this.props.children) {
            return React__default.default.createElement(
              "div",
              { className: "react-datepicker__children-container" },
              _this.props.children,
            );
          }
          return;
        };
        _this.containerRef = React.createRef();
        _this.state = {
          date: _this.getDateInView(),
          selectingDate: undefined,
          monthContainer: undefined,
          isRenderAriaLiveMessage: false,
        };
        return _this;
      }
      Object.defineProperty(Calendar, "defaultProps", {
        get: function () {
          return {
            monthsShown: 1,
            forceShowMonthNavigation: false,
            timeCaption: "Time",
            previousYearButtonLabel: "Previous Year",
            nextYearButtonLabel: "Next Year",
            previousMonthButtonLabel: "Previous Month",
            nextMonthButtonLabel: "Next Month",
            yearItemNumber: DEFAULT_YEAR_ITEM_NUMBER,
          };
        },
        enumerable: false,
        configurable: true,
      });
      Calendar.prototype.componentDidMount = function () {
        var _this = this;
        // monthContainer height is needed in time component
        // to determine the height for the ul in the time component
        // setState here so height is given after final component
        // layout is rendered
        if (this.props.showTimeSelect) {
          this.assignMonthContainer = (function () {
            _this.setState({ monthContainer: _this.monthContainer });
          })();
        }
      };
      Calendar.prototype.componentDidUpdate = function (prevProps) {
        var _this = this;
        if (
          this.props.preSelection &&
          (!isSameDay(this.props.preSelection, prevProps.preSelection) ||
            this.props.monthSelectedIn !== prevProps.monthSelectedIn)
        ) {
          var hasMonthChanged_1 = !isSameMonth(
            this.state.date,
            this.props.preSelection,
          );
          this.setState(
            {
              date: this.props.preSelection,
            },
            function () {
              return (
                hasMonthChanged_1 &&
                _this.handleCustomMonthChange(_this.state.date)
              );
            },
          );
        } else if (
          this.props.openToDate &&
          !isSameDay(this.props.openToDate, prevProps.openToDate)
        ) {
          this.setState({
            date: this.props.openToDate,
          });
        }
      };
      Calendar.prototype.render = function () {
        var Container = this.props.container || CalendarContainer;
        return React__default.default.createElement(
          ClickOutsideWrapper,
          {
            onClickOutside: this.handleClickOutside,
            style: { display: "contents" },
            containerRef: this.containerRef,
            ignoreClass: this.props.outsideClickIgnoreClass,
          },
          React__default.default.createElement(
            Container,
            {
              className: clsx.clsx("react-datepicker", this.props.className, {
                "react-datepicker--time-only": this.props.showTimeSelectOnly,
              }),
              showTime: this.props.showTimeSelect || this.props.showTimeInput,
              showTimeSelectOnly: this.props.showTimeSelectOnly,
            },
            this.renderAriaLiveRegion(),
            this.renderPreviousButton(),
            this.renderNextButton(),
            this.renderMonths(),
            this.renderYears(),
            this.renderTodayButton(),
            this.renderTimeSection(),
            this.renderInputTimeSection(),
            this.renderChildren(),
          ),
        );
      };
      return Calendar;
    })(React.Component);

    /**
     * `CalendarIcon` is a React component that renders an icon for a calendar.
     * The icon can be a string representing a CSS class, a React node, or a default SVG icon.
     *
     * @component
     * @prop  icon - The icon to be displayed. This can be a string representing a CSS class or a React node.
     * @prop  className - An optional string representing additional CSS classes to be applied to the icon.
     * @prop  onClick - An optional function to be called when the icon is clicked.
     *
     * @example
     * // To use a CSS class as the icon
     * <CalendarIcon icon="my-icon-class" onClick={myClickHandler} />
     *
     * @example
     * // To use a React node as the icon
     * <CalendarIcon icon={<MyIconComponent />} onClick={myClickHandler} />
     *
     * @returns  The `CalendarIcon` component.
     */
    var CalendarIcon = function (_a) {
      var icon = _a.icon,
        _b = _a.className,
        className = _b === void 0 ? "" : _b,
        onClick = _a.onClick;
      var defaultClass = "react-datepicker__calendar-icon";
      if (typeof icon === "string") {
        return React__default.default.createElement("i", {
          className: ""
            .concat(defaultClass, " ")
            .concat(icon, " ")
            .concat(className),
          "aria-hidden": "true",
          onClick: onClick,
        });
      }
      if (React__default.default.isValidElement(icon)) {
        // Because we are checking that typeof icon is string first, we can safely cast icon as React.ReactElement on types level and code level
        return React__default.default.cloneElement(icon, {
          className: ""
            .concat(icon.props.className || "", " ")
            .concat(defaultClass, " ")
            .concat(className),
          onClick: function (event) {
            if (typeof icon.props.onClick === "function") {
              icon.props.onClick(event);
            }
            if (typeof onClick === "function") {
              onClick(event);
            }
          },
        });
      }
      // Default SVG Icon
      return React__default.default.createElement(
        "svg",
        {
          className: "".concat(defaultClass, " ").concat(className),
          xmlns: "http://www.w3.org/2000/svg",
          viewBox: "0 0 448 512",
          onClick: onClick,
        },
        React__default.default.createElement("path", {
          d: "M96 32V64H48C21.5 64 0 85.5 0 112v48H448V112c0-26.5-21.5-48-48-48H352V32c0-17.7-14.3-32-32-32s-32 14.3-32 32V64H160V32c0-17.7-14.3-32-32-32S96 14.3 96 32zM448 192H0V464c0 26.5 21.5 48 48 48H400c26.5 0 48-21.5 48-48V192z",
        }),
      );
    };

    /**
     * `Portal` is a React component that allows you to render children into a DOM node
     * that exists outside the DOM hierarchy of the parent component.
     *
     * @class
     * @param {PortalProps} props - The properties that define the `Portal` component.
     * @property {React.ReactNode} props.children - The children to be rendered into the `Portal`.
     * @property {string} props.portalId - The id of the DOM node into which the `Portal` will render.
     * @property {ShadowRoot} [props.portalHost] - The DOM node to host the `Portal`.
     */
    var Portal = /** @class */ (function (_super) {
      __extends(Portal, _super);
      function Portal(props) {
        var _this = _super.call(this, props) || this;
        _this.portalRoot = null;
        _this.el = document.createElement("div");
        return _this;
      }
      Portal.prototype.componentDidMount = function () {
        this.portalRoot = (this.props.portalHost || document).getElementById(
          this.props.portalId,
        );
        if (!this.portalRoot) {
          this.portalRoot = document.createElement("div");
          this.portalRoot.setAttribute("id", this.props.portalId);
          (this.props.portalHost || document.body).appendChild(this.portalRoot);
        }
        this.portalRoot.appendChild(this.el);
      };
      Portal.prototype.componentWillUnmount = function () {
        if (this.portalRoot) {
          this.portalRoot.removeChild(this.el);
        }
      };
      Portal.prototype.render = function () {
        return ReactDOM__default.default.createPortal(
          this.props.children,
          this.el,
        );
      };
      return Portal;
    })(React.Component);

    var focusableElementsSelector =
      "[tabindex], a, button, input, select, textarea";
    var focusableFilter = function (node) {
      if (node instanceof HTMLAnchorElement) {
        return node.tabIndex !== -1;
      }
      return !node.disabled && node.tabIndex !== -1;
    };
    /**
     * `TabLoop` is a React component that manages tabbing behavior for its children.
     *
     * TabLoop prevents the user from tabbing outside of the popper
     * It creates a tabindex loop so that "Tab" on the last element will focus the first element
     * and "Shift Tab" on the first element will focus the last element
     *
     * @component
     * @example
     * <TabLoop enableTabLoop={true}>
     *   <ChildComponent />
     * </TabLoop>
     *
     * @param props - The properties that define the `TabLoop` component.
     * @param props.children - The child components.
     * @param props.enableTabLoop - Whether to enable the tab loop.
     *
     * @returns The `TabLoop` component.
     */
    var TabLoop = /** @class */ (function (_super) {
      __extends(TabLoop, _super);
      function TabLoop(props) {
        var _this = _super.call(this, props) || this;
        /**
         * `getTabChildren` is a method of the `TabLoop` class that retrieves all tabbable children of the component.
         *
         * This method uses the `tabbable` library to find all tabbable elements within the `TabLoop` component.
         * It then filters out any elements that are not visible.
         *
         * @returns An array of all tabbable and visible children of the `TabLoop` component.
         */
        _this.getTabChildren = function () {
          var _a;
          return Array.prototype.slice
            .call(
              (_a = _this.tabLoopRef.current) === null || _a === void 0
                ? void 0
                : _a.querySelectorAll(focusableElementsSelector),
              1,
              -1,
            )
            .filter(focusableFilter);
        };
        _this.handleFocusStart = function () {
          var tabChildren = _this.getTabChildren();
          tabChildren &&
            tabChildren.length > 1 &&
            tabChildren[tabChildren.length - 1].focus();
        };
        _this.handleFocusEnd = function () {
          var tabChildren = _this.getTabChildren();
          tabChildren && tabChildren.length > 1 && tabChildren[0].focus();
        };
        _this.tabLoopRef = React.createRef();
        return _this;
      }
      TabLoop.prototype.render = function () {
        var _a;
        if (
          !((_a = this.props.enableTabLoop) !== null && _a !== void 0
            ? _a
            : TabLoop.defaultProps.enableTabLoop)
        ) {
          return this.props.children;
        }
        return React__default.default.createElement(
          "div",
          { className: "react-datepicker__tab-loop", ref: this.tabLoopRef },
          React__default.default.createElement("div", {
            className: "react-datepicker__tab-loop__start",
            tabIndex: 0,
            onFocus: this.handleFocusStart,
          }),
          this.props.children,
          React__default.default.createElement("div", {
            className: "react-datepicker__tab-loop__end",
            tabIndex: 0,
            onFocus: this.handleFocusEnd,
          }),
        );
      };
      TabLoop.defaultProps = {
        enableTabLoop: true,
      };
      return TabLoop;
    })(React.Component);

    /**
     * `withFloating` is a higher-order component that adds floating behavior to a component.
     *
     * @param Component - The component to enhance.
     *
     * @example
     * const FloatingComponent = withFloating(MyComponent);
     * <FloatingComponent popperModifiers={[]} popperProps={{}} hidePopper={true} />
     *
     * @param popperModifiers - The modifiers to use for the popper.
     * @param popperProps - The props to pass to the popper.
     * @param hidePopper - Whether to hide the popper.
     * @param popperPlacement - The placement of the popper.
     *
     * @returns A new component with floating behavior.
     */
    function withFloating(Component) {
      var WithFloating = function (props) {
        var _a;
        var hidePopper =
          typeof props.hidePopper === "boolean" ? props.hidePopper : true;
        var arrowRef = React.useRef(null);
        var floatingProps = react.useFloating(
          _assign(
            {
              open: !hidePopper,
              whileElementsMounted: react.autoUpdate,
              placement: props.popperPlacement,
              middleware: __spreadArray(
                [
                  react.flip({ padding: 15 }),
                  react.offset(10),
                  react.arrow({ element: arrowRef }),
                ],
                (_a = props.popperModifiers) !== null && _a !== void 0
                  ? _a
                  : [],
                true,
              ),
            },
            props.popperProps,
          ),
        );
        var componentProps = _assign(_assign({}, props), {
          hidePopper: hidePopper,
          popperProps: _assign(_assign({}, floatingProps), {
            arrowRef: arrowRef,
          }),
        });
        return React__default.default.createElement(
          Component,
          _assign({}, componentProps),
        );
      };
      return WithFloating;
    }

    // Exported for testing purposes
    var PopperComponent = /** @class */ (function (_super) {
      __extends(PopperComponent, _super);
      function PopperComponent() {
        return (_super !== null && _super.apply(this, arguments)) || this;
      }
      Object.defineProperty(PopperComponent, "defaultProps", {
        get: function () {
          return {
            hidePopper: true,
          };
        },
        enumerable: false,
        configurable: true,
      });
      PopperComponent.prototype.render = function () {
        var _a = this.props,
          className = _a.className,
          wrapperClassName = _a.wrapperClassName,
          _b = _a.hidePopper,
          hidePopper =
            _b === void 0 ? PopperComponent.defaultProps.hidePopper : _b,
          popperComponent = _a.popperComponent,
          targetComponent = _a.targetComponent,
          enableTabLoop = _a.enableTabLoop,
          popperOnKeyDown = _a.popperOnKeyDown,
          portalId = _a.portalId,
          portalHost = _a.portalHost,
          popperProps = _a.popperProps,
          showArrow = _a.showArrow;
        var popper = undefined;
        if (!hidePopper) {
          var classes = clsx.clsx("react-datepicker-popper", className);
          popper = React__default.default.createElement(
            TabLoop,
            { enableTabLoop: enableTabLoop },
            React__default.default.createElement(
              "div",
              {
                ref: popperProps.refs.setFloating,
                style: popperProps.floatingStyles,
                className: classes,
                "data-placement": popperProps.placement,
                onKeyDown: popperOnKeyDown,
              },
              popperComponent,
              showArrow &&
                React__default.default.createElement(react.FloatingArrow, {
                  ref: popperProps.arrowRef,
                  context: popperProps.context,
                  fill: "currentColor",
                  strokeWidth: 1,
                  height: 8,
                  width: 16,
                  style: { transform: "translateY(-1px)" },
                  className: "react-datepicker__triangle",
                }),
            ),
          );
        }
        if (this.props.popperContainer) {
          popper = React.createElement(this.props.popperContainer, {}, popper);
        }
        if (portalId && !hidePopper) {
          popper = React__default.default.createElement(
            Portal,
            { portalId: portalId, portalHost: portalHost },
            popper,
          );
        }
        var wrapperClasses = clsx.clsx(
          "react-datepicker-wrapper",
          wrapperClassName,
        );
        return React__default.default.createElement(
          React__default.default.Fragment,
          null,
          React__default.default.createElement(
            "div",
            { ref: popperProps.refs.setReference, className: wrapperClasses },
            targetComponent,
          ),
          popper,
        );
      };
      return PopperComponent;
    })(React.Component);
    var PopperComponent$1 = withFloating(PopperComponent);

    var outsideClickIgnoreClass = "react-datepicker-ignore-onclickoutside";
    // Compares dates year+month combinations
    function hasPreSelectionChanged(date1, date2) {
      if (date1 && date2) {
        return (
          getMonth.getMonth(date1) !== getMonth.getMonth(date2) ||
          getYear.getYear(date1) !== getYear.getYear(date2)
        );
      }
      return date1 !== date2;
    }
    /**
     * General datepicker component.
     */
    var INPUT_ERR_1 = "Date input not valid.";
    var DatePicker = /** @class */ (function (_super) {
      __extends(DatePicker, _super);
      function DatePicker(props) {
        var _this = _super.call(this, props) || this;
        _this.calendar = null;
        _this.input = null;
        _this.getPreSelection = function () {
          return _this.props.openToDate
            ? _this.props.openToDate
            : _this.props.selectsEnd && _this.props.startDate
              ? _this.props.startDate
              : _this.props.selectsStart && _this.props.endDate
                ? _this.props.endDate
                : newDate();
        };
        // Convert the date from string format to standard Date format
        _this.modifyHolidays = function () {
          var _a;
          return (_a = _this.props.holidays) === null || _a === void 0
            ? void 0
            : _a.reduce(function (accumulator, holiday) {
                var date = new Date(holiday.date);
                if (!isValid(date)) {
                  return accumulator;
                }
                return __spreadArray(
                  __spreadArray([], accumulator, true),
                  [_assign(_assign({}, holiday), { date: date })],
                  false,
                );
              }, []);
        };
        _this.calcInitialState = function () {
          var _a;
          var defaultPreSelection = _this.getPreSelection();
          var minDate = getEffectiveMinDate(_this.props);
          var maxDate = getEffectiveMaxDate(_this.props);
          var boundedPreSelection =
            minDate &&
            isBefore.isBefore(defaultPreSelection, getStartOfDay(minDate))
              ? minDate
              : maxDate &&
                  isAfter.isAfter(defaultPreSelection, getEndOfDay(maxDate))
                ? maxDate
                : defaultPreSelection;
          return {
            open: _this.props.startOpen || false,
            preventFocus: false,
            inputValue: null,
            preSelection:
              (_a = _this.props.selectsRange
                ? _this.props.startDate
                : _this.props.selected) !== null && _a !== void 0
                ? _a
                : boundedPreSelection,
            // transforming highlighted days (perhaps nested array)
            // to flat Map for faster access in day.jsx
            highlightDates: getHighLightDaysMap(_this.props.highlightDates),
            focused: false,
            // used to focus day in inline version after month has changed, but not on
            // initial render
            shouldFocusDayInline: false,
            isRenderAriaLiveMessage: false,
            wasHidden: false,
          };
        };
        _this.resetHiddenStatus = function () {
          _this.setState(
            _assign(_assign({}, _this.state), { wasHidden: false }),
          );
        };
        _this.setHiddenStatus = function () {
          _this.setState(
            _assign(_assign({}, _this.state), { wasHidden: true }),
          );
        };
        _this.setHiddenStateOnVisibilityHidden = function () {
          if (document.visibilityState !== "hidden") {
            return;
          }
          _this.setHiddenStatus();
        };
        _this.clearPreventFocusTimeout = function () {
          if (_this.preventFocusTimeout) {
            clearTimeout(_this.preventFocusTimeout);
          }
        };
        _this.safeFocus = function () {
          setTimeout(function () {
            var _a, _b;
            (_b =
              (_a = _this.input) === null || _a === void 0
                ? void 0
                : _a.focus) === null || _b === void 0
              ? void 0
              : _b.call(_a, { preventScroll: true });
          }, 0);
        };
        _this.safeBlur = function () {
          setTimeout(function () {
            var _a, _b;
            (_b =
              (_a = _this.input) === null || _a === void 0
                ? void 0
                : _a.blur) === null || _b === void 0
              ? void 0
              : _b.call(_a);
          }, 0);
        };
        _this.setFocus = function () {
          _this.safeFocus();
        };
        _this.setBlur = function () {
          _this.safeBlur();
          _this.cancelFocusInput();
        };
        _this.setOpen = function (open, skipSetBlur) {
          if (skipSetBlur === void 0) {
            skipSetBlur = false;
          }
          _this.setState(
            {
              open: open,
              preSelection:
                open && _this.state.open
                  ? _this.state.preSelection
                  : _this.calcInitialState().preSelection,
              lastPreSelectChange: PRESELECT_CHANGE_VIA_NAVIGATE,
            },
            function () {
              if (!open) {
                _this.setState(
                  function (prev) {
                    return {
                      focused: skipSetBlur ? prev.focused : false,
                    };
                  },
                  function () {
                    !skipSetBlur && _this.setBlur();
                    _this.setState({ inputValue: null });
                  },
                );
              }
            },
          );
        };
        _this.inputOk = function () {
          return isDate.isDate(_this.state.preSelection);
        };
        _this.isCalendarOpen = function () {
          return _this.props.open === undefined
            ? _this.state.open && !_this.props.disabled && !_this.props.readOnly
            : _this.props.open;
        };
        _this.handleFocus = function (event) {
          var _a, _b;
          var isAutoReFocus = _this.state.wasHidden;
          var isOpenAllowed = isAutoReFocus ? _this.state.open : true;
          if (isAutoReFocus) {
            _this.resetHiddenStatus();
          }
          if (!_this.state.preventFocus && isOpenAllowed) {
            (_b = (_a = _this.props).onFocus) === null || _b === void 0
              ? void 0
              : _b.call(_a, event);
            if (!_this.props.preventOpenOnFocus && !_this.props.readOnly) {
              _this.setOpen(true);
            }
          }
          _this.setState({ focused: true });
        };
        _this.sendFocusBackToInput = function () {
          // Clear previous timeout if it exists
          if (_this.preventFocusTimeout) {
            _this.clearPreventFocusTimeout();
          }
          // close the popper and refocus the input
          // stop the input from auto opening onFocus
          // setFocus to the input
          _this.setState({ preventFocus: true }, function () {
            _this.preventFocusTimeout = setTimeout(function () {
              _this.setFocus();
              _this.setState({ preventFocus: false });
            });
          });
        };
        _this.cancelFocusInput = function () {
          clearTimeout(_this.inputFocusTimeout);
          _this.inputFocusTimeout = undefined;
        };
        _this.deferFocusInput = function () {
          _this.cancelFocusInput();
          _this.inputFocusTimeout = setTimeout(function () {
            return _this.setFocus();
          }, 1);
        };
        _this.handleDropdownFocus = function () {
          _this.cancelFocusInput();
        };
        _this.handleBlur = function (event) {
          var _a, _b;
          if (
            !_this.state.open ||
            _this.props.withPortal ||
            _this.props.showTimeInput
          ) {
            (_b = (_a = _this.props).onBlur) === null || _b === void 0
              ? void 0
              : _b.call(_a, event);
          }
          _this.setState({ focused: false });
        };
        _this.handleCalendarClickOutside = function (event) {
          var _a, _b;
          if (!_this.props.inline) {
            _this.setOpen(false);
          }
          (_b = (_a = _this.props).onClickOutside) === null || _b === void 0
            ? void 0
            : _b.call(_a, event);
          if (_this.props.withPortal) {
            event.preventDefault();
          }
        };
        // handleChange is called when user types in the textbox
        _this.handleChange = function () {
          var _a, _b;
          var allArgs = [];
          for (var _i = 0; _i < arguments.length; _i++) {
            allArgs[_i] = arguments[_i];
          }
          var event = allArgs[0];
          if (_this.props.onChangeRaw) {
            _this.props.onChangeRaw.apply(_this, allArgs);
            if (
              !event ||
              typeof event.isDefaultPrevented !== "function" ||
              event.isDefaultPrevented()
            ) {
              return;
            }
          }
          _this.setState({
            inputValue:
              (event === null || event === void 0
                ? void 0
                : event.target) instanceof HTMLInputElement
                ? event.target.value
                : null,
            lastPreSelectChange: PRESELECT_CHANGE_VIA_INPUT,
          });
          var _c = _this.props,
            _d = _c.dateFormat,
            dateFormat =
              _d === void 0 ? DatePicker.defaultProps.dateFormat : _d,
            _e = _c.strictParsing,
            strictParsing =
              _e === void 0 ? DatePicker.defaultProps.strictParsing : _e,
            selectsRange = _c.selectsRange,
            startDate = _c.startDate,
            endDate = _c.endDate;
          var value =
            (event === null || event === void 0
              ? void 0
              : event.target) instanceof HTMLInputElement
              ? event.target.value
              : "";
          if (selectsRange) {
            var _f = value.split("-", 2).map(function (val) {
                return val.trim();
              }),
              valueStart = _f[0],
              valueEnd = _f[1];
            var startDateNew = parseDate(
              valueStart !== null && valueStart !== void 0 ? valueStart : "",
              dateFormat,
              _this.props.locale,
              strictParsing,
            );
            var endDateNew = parseDate(
              valueEnd !== null && valueEnd !== void 0 ? valueEnd : "",
              dateFormat,
              _this.props.locale,
              strictParsing,
            );
            var startChanged =
              (startDate === null || startDate === void 0
                ? void 0
                : startDate.getTime()) !==
              (startDateNew === null || startDateNew === void 0
                ? void 0
                : startDateNew.getTime());
            var endChanged =
              (endDate === null || endDate === void 0
                ? void 0
                : endDate.getTime()) !==
              (endDateNew === null || endDateNew === void 0
                ? void 0
                : endDateNew.getTime());
            if (!startChanged && !endChanged) {
              return;
            }
            if (startDateNew && isDayDisabled(startDateNew, _this.props)) {
              return;
            }
            if (endDateNew && isDayDisabled(endDateNew, _this.props)) {
              return;
            }
            (_b = (_a = _this.props).onChange) === null || _b === void 0
              ? void 0
              : _b.call(_a, [startDateNew, endDateNew], event);
          } else {
            // not selectsRange
            var date = parseDate(
              value,
              dateFormat,
              _this.props.locale,
              strictParsing,
              _this.props.minDate,
            );
            // Use date from `selected` prop when manipulating only time for input value
            if (
              _this.props.showTimeSelectOnly &&
              _this.props.selected &&
              date &&
              !isSameDay(date, _this.props.selected)
            ) {
              date = set.set(_this.props.selected, {
                hours: getHours.getHours(date),
                minutes: getMinutes.getMinutes(date),
                seconds: getSeconds.getSeconds(date),
              });
            }
            // Update selection if either (1) date was successfully parsed, or (2) input field is empty
            if (date || !value) {
              _this.setSelected(date, event, true);
            }
          }
        };
        _this.handleSelect = function (date, event, monthSelectedIn) {
          if (_this.props.shouldCloseOnSelect && !_this.props.showTimeSelect) {
            // Preventing onFocus event to fix issue
            // https://github.com/Hacker0x01/react-datepicker/issues/628
            _this.sendFocusBackToInput();
          }
          if (_this.props.onChangeRaw) {
            _this.props.onChangeRaw(event);
          }
          _this.setSelected(date, event, false, monthSelectedIn);
          if (_this.props.showDateSelect) {
            _this.setState({ isRenderAriaLiveMessage: true });
          }
          if (!_this.props.shouldCloseOnSelect || _this.props.showTimeSelect) {
            _this.setPreSelection(date);
          } else if (!_this.props.inline) {
            if (!_this.props.selectsRange) {
              _this.setOpen(false);
            }
            var _a = _this.props,
              startDate = _a.startDate,
              endDate = _a.endDate;
            if (
              startDate &&
              !endDate &&
              (_this.props.swapRange || !isDateBefore(date, startDate))
            ) {
              _this.setOpen(false);
            }
          }
        };
        // setSelected is called either from handleChange (user typed date into textbox and it was parsed) or handleSelect (user selected date from calendar using mouse or keyboard)
        _this.setSelected = function (date, event, keepInput, monthSelectedIn) {
          var _a, _b;
          var changedDate = date;
          // Early return if selected year/month/day is disabled
          if (_this.props.showYearPicker) {
            if (
              changedDate !== null &&
              isYearDisabled(getYear.getYear(changedDate), _this.props)
            ) {
              return;
            }
          } else if (_this.props.showMonthYearPicker) {
            if (
              changedDate !== null &&
              isMonthDisabled(changedDate, _this.props)
            ) {
              return;
            }
          } else {
            if (
              changedDate !== null &&
              isDayDisabled(changedDate, _this.props)
            ) {
              return;
            }
          }
          var _c = _this.props,
            onChange = _c.onChange,
            selectsRange = _c.selectsRange,
            startDate = _c.startDate,
            endDate = _c.endDate,
            selectsMultiple = _c.selectsMultiple,
            selectedDates = _c.selectedDates,
            minTime = _c.minTime,
            swapRange = _c.swapRange;
          if (
            !isEqual(_this.props.selected, changedDate) ||
            _this.props.allowSameDay ||
            selectsRange ||
            selectsMultiple
          ) {
            if (changedDate !== null) {
              // Preserve previously selected time if only date is currently being changed
              if (
                _this.props.selected &&
                (!keepInput ||
                  (!_this.props.showTimeSelect &&
                    !_this.props.showTimeSelectOnly &&
                    !_this.props.showTimeInput))
              ) {
                changedDate = setTime(changedDate, {
                  hour: getHours.getHours(_this.props.selected),
                  minute: getMinutes.getMinutes(_this.props.selected),
                  second: getSeconds.getSeconds(_this.props.selected),
                });
              }
              // If minTime is present then set the time to minTime
              if (
                !keepInput &&
                (_this.props.showTimeSelect || _this.props.showTimeSelectOnly)
              ) {
                if (minTime) {
                  changedDate = setTime(changedDate, {
                    hour: minTime.getHours(),
                    minute: minTime.getMinutes(),
                    second: minTime.getSeconds(),
                  });
                }
              }
              if (!_this.props.inline) {
                _this.setState({
                  preSelection: changedDate,
                });
              }
              if (!_this.props.focusSelectedMonth) {
                _this.setState({ monthSelectedIn: monthSelectedIn });
              }
            }
            if (selectsRange) {
              var noRanges = !startDate && !endDate;
              var hasStartRange = startDate && !endDate;
              var isRangeFilled = startDate && endDate;
              if (noRanges) {
                onChange === null || onChange === void 0
                  ? void 0
                  : onChange([changedDate, null], event);
              } else if (hasStartRange) {
                if (changedDate === null) {
                  onChange === null || onChange === void 0
                    ? void 0
                    : onChange([null, null], event);
                } else if (isDateBefore(changedDate, startDate)) {
                  if (swapRange) {
                    onChange === null || onChange === void 0
                      ? void 0
                      : onChange([changedDate, startDate], event);
                  } else {
                    onChange === null || onChange === void 0
                      ? void 0
                      : onChange([changedDate, null], event);
                  }
                } else {
                  onChange === null || onChange === void 0
                    ? void 0
                    : onChange([startDate, changedDate], event);
                }
              }
              if (isRangeFilled) {
                onChange === null || onChange === void 0
                  ? void 0
                  : onChange([changedDate, null], event);
              }
            } else if (selectsMultiple) {
              if (changedDate !== null) {
                if (
                  !(selectedDates === null || selectedDates === void 0
                    ? void 0
                    : selectedDates.length)
                ) {
                  onChange === null || onChange === void 0
                    ? void 0
                    : onChange([changedDate], event);
                } else {
                  var isChangedDateAlreadySelected = selectedDates.some(
                    function (selectedDate) {
                      return isSameDay(selectedDate, changedDate);
                    },
                  );
                  if (isChangedDateAlreadySelected) {
                    var nextDates = selectedDates.filter(
                      function (selectedDate) {
                        return !isSameDay(selectedDate, changedDate);
                      },
                    );
                    onChange === null || onChange === void 0
                      ? void 0
                      : onChange(nextDates, event);
                  } else {
                    onChange === null || onChange === void 0
                      ? void 0
                      : onChange(
                          __spreadArray(
                            __spreadArray([], selectedDates, true),
                            [changedDate],
                            false,
                          ),
                          event,
                        );
                  }
                }
              }
            } else {
              onChange === null || onChange === void 0
                ? void 0
                : onChange(changedDate, event);
            }
          }
          if (!keepInput) {
            (_b = (_a = _this.props).onSelect) === null || _b === void 0
              ? void 0
              : _b.call(_a, changedDate, event);
            _this.setState({ inputValue: null });
          }
        };
        // When checking preSelection via min/maxDate, times need to be manipulated via getStartOfDay/getEndOfDay
        _this.setPreSelection = function (date) {
          var hasMinDate = isDate.isDate(_this.props.minDate);
          var hasMaxDate = isDate.isDate(_this.props.maxDate);
          var isValidDateSelection = true;
          if (date) {
            var dateStartOfDay = getStartOfDay(date);
            if (hasMinDate && hasMaxDate) {
              // isDayInRange uses getStartOfDay internally, so not necessary to manipulate times here
              isValidDateSelection = isDayInRange(
                date,
                _this.props.minDate,
                _this.props.maxDate,
              );
            } else if (hasMinDate) {
              var minDateStartOfDay = getStartOfDay(_this.props.minDate);
              isValidDateSelection =
                isAfter.isAfter(date, minDateStartOfDay) ||
                isEqual(dateStartOfDay, minDateStartOfDay);
            } else if (hasMaxDate) {
              var maxDateEndOfDay = getEndOfDay(_this.props.maxDate);
              isValidDateSelection =
                isBefore.isBefore(date, maxDateEndOfDay) ||
                isEqual(dateStartOfDay, maxDateEndOfDay);
            }
          }
          if (isValidDateSelection) {
            _this.setState({
              preSelection: date,
            });
          }
        };
        _this.toggleCalendar = function () {
          _this.setOpen(!_this.state.open);
        };
        _this.handleTimeChange = function (time) {
          var _a, _b;
          if (_this.props.selectsRange || _this.props.selectsMultiple) {
            return;
          }
          var selected = _this.props.selected
            ? _this.props.selected
            : _this.getPreSelection();
          var changedDate = _this.props.selected
            ? time
            : setTime(selected, {
                hour: getHours.getHours(time),
                minute: getMinutes.getMinutes(time),
              });
          _this.setState({
            preSelection: changedDate,
          });
          (_b = (_a = _this.props).onChange) === null || _b === void 0
            ? void 0
            : _b.call(_a, changedDate);
          if (_this.props.shouldCloseOnSelect && !_this.props.showTimeInput) {
            _this.sendFocusBackToInput();
            _this.setOpen(false);
          }
          if (_this.props.showTimeInput) {
            _this.setOpen(true);
          }
          if (_this.props.showTimeSelectOnly || _this.props.showTimeSelect) {
            _this.setState({ isRenderAriaLiveMessage: true });
          }
          _this.setState({ inputValue: null });
        };
        _this.onInputClick = function () {
          var _a, _b;
          if (!_this.props.disabled && !_this.props.readOnly) {
            _this.setOpen(true);
          }
          (_b = (_a = _this.props).onInputClick) === null || _b === void 0
            ? void 0
            : _b.call(_a);
        };
        _this.onInputKeyDown = function (event) {
          var _a, _b, _c, _d, _e, _f;
          (_b = (_a = _this.props).onKeyDown) === null || _b === void 0
            ? void 0
            : _b.call(_a, event);
          var eventKey = event.key;
          if (
            !_this.state.open &&
            !_this.props.inline &&
            !_this.props.preventOpenOnFocus
          ) {
            if (
              eventKey === KeyType.ArrowDown ||
              eventKey === KeyType.ArrowUp ||
              eventKey === KeyType.Enter
            ) {
              (_c = _this.onInputClick) === null || _c === void 0
                ? void 0
                : _c.call(_this);
            }
            return;
          }
          // if calendar is open, these keys will focus the selected item
          if (_this.state.open) {
            if (
              eventKey === KeyType.ArrowDown ||
              eventKey === KeyType.ArrowUp
            ) {
              event.preventDefault();
              var selectorString = _this.props.showTimeSelectOnly
                ? ".react-datepicker__time-list-item[tabindex='0']"
                : _this.props.showWeekPicker && _this.props.showWeekNumbers
                  ? '.react-datepicker__week-number[tabindex="0"]'
                  : _this.props.showFullMonthYearPicker ||
                      _this.props.showMonthYearPicker
                    ? '.react-datepicker__month-text[tabindex="0"]'
                    : '.react-datepicker__day[tabindex="0"]';
              var selectedItem =
                ((_d = _this.calendar) === null || _d === void 0
                  ? void 0
                  : _d.containerRef.current) instanceof Element &&
                _this.calendar.containerRef.current.querySelector(
                  selectorString,
                );
              selectedItem instanceof HTMLElement &&
                selectedItem.focus({ preventScroll: true });
              return;
            }
            var copy = newDate(_this.state.preSelection);
            if (eventKey === KeyType.Enter) {
              event.preventDefault();
              if (
                _this.inputOk() &&
                _this.state.lastPreSelectChange ===
                  PRESELECT_CHANGE_VIA_NAVIGATE
              ) {
                _this.handleSelect(copy, event);
                !_this.props.shouldCloseOnSelect && _this.setPreSelection(copy);
              } else {
                _this.setOpen(false);
              }
            } else if (eventKey === KeyType.Escape) {
              event.preventDefault();
              _this.sendFocusBackToInput();
              _this.setOpen(false);
            } else if (eventKey === KeyType.Tab) {
              _this.setOpen(false);
            }
            if (!_this.inputOk()) {
              (_f = (_e = _this.props).onInputError) === null || _f === void 0
                ? void 0
                : _f.call(_e, { code: 1, msg: INPUT_ERR_1 });
            }
          }
        };
        _this.onPortalKeyDown = function (event) {
          var eventKey = event.key;
          if (eventKey === KeyType.Escape) {
            event.preventDefault();
            _this.setState(
              {
                preventFocus: true,
              },
              function () {
                _this.setOpen(false);
                setTimeout(function () {
                  _this.setFocus();
                  _this.setState({ preventFocus: false });
                });
              },
            );
          }
        };
        // keyDown events passed down to day.jsx
        _this.onDayKeyDown = function (event) {
          var _a, _b, _c, _d, _e, _f;
          var _g = _this.props,
            minDate = _g.minDate,
            maxDate = _g.maxDate,
            disabledKeyboardNavigation = _g.disabledKeyboardNavigation,
            showWeekPicker = _g.showWeekPicker,
            shouldCloseOnSelect = _g.shouldCloseOnSelect,
            locale = _g.locale,
            calendarStartDay = _g.calendarStartDay,
            adjustDateOnChange = _g.adjustDateOnChange,
            inline = _g.inline;
          (_b = (_a = _this.props).onKeyDown) === null || _b === void 0
            ? void 0
            : _b.call(_a, event);
          if (disabledKeyboardNavigation) return;
          var eventKey = event.key;
          var isShiftKeyActive = event.shiftKey;
          var copy = newDate(_this.state.preSelection);
          var calculateNewDate = function (eventKey, date) {
            var newCalculatedDate = date;
            switch (eventKey) {
              case KeyType.ArrowRight:
                newCalculatedDate = showWeekPicker
                  ? addWeeks.addWeeks(date, 1)
                  : addDays.addDays(date, 1);
                break;
              case KeyType.ArrowLeft:
                newCalculatedDate = showWeekPicker
                  ? subWeeks.subWeeks(date, 1)
                  : subDays.subDays(date, 1);
                break;
              case KeyType.ArrowUp:
                newCalculatedDate = subWeeks.subWeeks(date, 1);
                break;
              case KeyType.ArrowDown:
                newCalculatedDate = addWeeks.addWeeks(date, 1);
                break;
              case KeyType.PageUp:
                newCalculatedDate = isShiftKeyActive
                  ? subYears.subYears(date, 1)
                  : subMonths.subMonths(date, 1);
                break;
              case KeyType.PageDown:
                newCalculatedDate = isShiftKeyActive
                  ? addYears.addYears(date, 1)
                  : addMonths.addMonths(date, 1);
                break;
              case KeyType.Home:
                newCalculatedDate = getStartOfWeek(
                  date,
                  locale,
                  calendarStartDay,
                );
                break;
              case KeyType.End:
                newCalculatedDate = getEndOfWeek(date);
                break;
            }
            return newCalculatedDate;
          };
          var getNewDate = function (eventKey, date) {
            var MAX_ITERATIONS = 40;
            var eventKeyCopy = eventKey;
            var validDateFound = false;
            var iterations = 0;
            var newSelection = calculateNewDate(eventKey, date);
            while (!validDateFound) {
              if (iterations >= MAX_ITERATIONS) {
                newSelection = date;
                break;
              }
              // if minDate exists and the new selection is before the min date, get the nearest date that isn't disabled
              if (minDate && newSelection < minDate) {
                eventKeyCopy = KeyType.ArrowRight;
                newSelection = isDayDisabled(minDate, _this.props)
                  ? calculateNewDate(eventKeyCopy, newSelection)
                  : minDate;
              }
              // if maxDate exists and the new selection is after the max date, get the nearest date that isn't disabled
              if (maxDate && newSelection > maxDate) {
                eventKeyCopy = KeyType.ArrowLeft;
                newSelection = isDayDisabled(maxDate, _this.props)
                  ? calculateNewDate(eventKeyCopy, newSelection)
                  : maxDate;
              }
              if (isDayDisabled(newSelection, _this.props)) {
                // if PageUp and Home is pressed to a disabled date, it will try to find the next available date after
                if (
                  eventKeyCopy === KeyType.PageUp ||
                  eventKeyCopy === KeyType.Home
                ) {
                  eventKeyCopy = KeyType.ArrowRight;
                }
                // if PageDown and End is pressed to a disabled date, it will try to find the next available date before
                if (
                  eventKeyCopy === KeyType.PageDown ||
                  eventKeyCopy === KeyType.End
                ) {
                  eventKeyCopy = KeyType.ArrowLeft;
                }
                newSelection = calculateNewDate(eventKeyCopy, newSelection);
              } else {
                validDateFound = true;
              }
              iterations++;
            }
            return newSelection;
          };
          if (eventKey === KeyType.Enter) {
            event.preventDefault();
            _this.handleSelect(copy, event);
            !shouldCloseOnSelect && _this.setPreSelection(copy);
            return;
          } else if (eventKey === KeyType.Escape) {
            event.preventDefault();
            _this.setOpen(false);
            if (!_this.inputOk()) {
              (_d = (_c = _this.props).onInputError) === null || _d === void 0
                ? void 0
                : _d.call(_c, { code: 1, msg: INPUT_ERR_1 });
            }
            return;
          }
          var newSelection = null;
          switch (eventKey) {
            case KeyType.ArrowLeft:
            case KeyType.ArrowRight:
            case KeyType.ArrowUp:
            case KeyType.ArrowDown:
            case KeyType.PageUp:
            case KeyType.PageDown:
            case KeyType.Home:
            case KeyType.End:
              newSelection = getNewDate(eventKey, copy);
              break;
          }
          if (!newSelection) {
            (_f = (_e = _this.props).onInputError) === null || _f === void 0
              ? void 0
              : _f.call(_e, { code: 1, msg: INPUT_ERR_1 });
            return;
          }
          event.preventDefault();
          _this.setState({
            lastPreSelectChange: PRESELECT_CHANGE_VIA_NAVIGATE,
          });
          if (adjustDateOnChange) {
            _this.setSelected(newSelection);
          }
          _this.setPreSelection(newSelection);
          // need to figure out whether month has changed to focus day in inline version
          if (inline) {
            var prevMonth = getMonth.getMonth(copy);
            var newMonth = getMonth.getMonth(newSelection);
            var prevYear = getYear.getYear(copy);
            var newYear = getYear.getYear(newSelection);
            if (prevMonth !== newMonth || prevYear !== newYear) {
              // month has changed
              _this.setState({ shouldFocusDayInline: true });
            } else {
              // month hasn't changed
              _this.setState({ shouldFocusDayInline: false });
            }
          }
        };
        // handle generic key down events in the popper that do not adjust or select dates
        // ex: while focusing prev and next month buttons
        _this.onPopperKeyDown = function (event) {
          var eventKey = event.key;
          if (eventKey === KeyType.Escape) {
            event.preventDefault();
            _this.sendFocusBackToInput();
          }
        };
        _this.onClearClick = function (event) {
          if (event) {
            if (event.preventDefault) {
              event.preventDefault();
            }
          }
          _this.sendFocusBackToInput();
          var _a = _this.props,
            selectsRange = _a.selectsRange,
            onChange = _a.onChange;
          if (selectsRange) {
            onChange === null || onChange === void 0
              ? void 0
              : onChange([null, null], event);
          } else {
            onChange === null || onChange === void 0
              ? void 0
              : onChange(null, event);
          }
          _this.setState({ inputValue: null });
        };
        _this.clear = function () {
          _this.onClearClick();
        };
        _this.onScroll = function (event) {
          if (
            typeof _this.props.closeOnScroll === "boolean" &&
            _this.props.closeOnScroll
          ) {
            if (
              event.target === document ||
              event.target === document.documentElement ||
              event.target === document.body
            ) {
              _this.setOpen(false);
            }
          } else if (typeof _this.props.closeOnScroll === "function") {
            if (_this.props.closeOnScroll(event)) {
              _this.setOpen(false);
            }
          }
        };
        _this.renderCalendar = function () {
          var _a, _b;
          if (!_this.props.inline && !_this.isCalendarOpen()) {
            return null;
          }
          return React__default.default.createElement(
            Calendar,
            _assign(
              {
                showMonthYearDropdown: undefined,
                ref: function (elem) {
                  _this.calendar = elem;
                },
              },
              _this.props,
              _this.state,
              {
                setOpen: _this.setOpen,
                dateFormat:
                  (_a = _this.props.dateFormatCalendar) !== null &&
                  _a !== void 0
                    ? _a
                    : DatePicker.defaultProps.dateFormatCalendar,
                onSelect: _this.handleSelect,
                onClickOutside: _this.handleCalendarClickOutside,
                holidays: getHolidaysMap(_this.modifyHolidays()),
                outsideClickIgnoreClass: outsideClickIgnoreClass,
                onDropdownFocus: _this.handleDropdownFocus,
                onTimeChange: _this.handleTimeChange,
                className: _this.props.calendarClassName,
                container: _this.props.calendarContainer,
                handleOnKeyDown: _this.props.onKeyDown,
                handleOnDayKeyDown: _this.onDayKeyDown,
                setPreSelection: _this.setPreSelection,
                dropdownMode:
                  (_b = _this.props.dropdownMode) !== null && _b !== void 0
                    ? _b
                    : DatePicker.defaultProps.dropdownMode,
              },
            ),
            _this.props.children,
          );
        };
        _this.renderAriaLiveRegion = function () {
          var _a = _this.props,
            _b = _a.dateFormat,
            dateFormat =
              _b === void 0 ? DatePicker.defaultProps.dateFormat : _b,
            locale = _a.locale;
          var isContainsTime =
            _this.props.showTimeInput || _this.props.showTimeSelect;
          var longDateFormat = isContainsTime ? "PPPPp" : "PPPP";
          var ariaLiveMessage;
          if (_this.props.selectsRange) {
            ariaLiveMessage = "Selected start date: "
              .concat(
                safeDateFormat(_this.props.startDate, {
                  dateFormat: longDateFormat,
                  locale: locale,
                }),
                ". ",
              )
              .concat(
                _this.props.endDate
                  ? "End date: " +
                      safeDateFormat(_this.props.endDate, {
                        dateFormat: longDateFormat,
                        locale: locale,
                      })
                  : "",
              );
          } else {
            if (_this.props.showTimeSelectOnly) {
              ariaLiveMessage = "Selected time: ".concat(
                safeDateFormat(_this.props.selected, {
                  dateFormat: dateFormat,
                  locale: locale,
                }),
              );
            } else if (_this.props.showYearPicker) {
              ariaLiveMessage = "Selected year: ".concat(
                safeDateFormat(_this.props.selected, {
                  dateFormat: "yyyy",
                  locale: locale,
                }),
              );
            } else if (_this.props.showMonthYearPicker) {
              ariaLiveMessage = "Selected month: ".concat(
                safeDateFormat(_this.props.selected, {
                  dateFormat: "MMMM yyyy",
                  locale: locale,
                }),
              );
            } else if (_this.props.showQuarterYearPicker) {
              ariaLiveMessage = "Selected quarter: ".concat(
                safeDateFormat(_this.props.selected, {
                  dateFormat: "yyyy, QQQ",
                  locale: locale,
                }),
              );
            } else {
              ariaLiveMessage = "Selected date: ".concat(
                safeDateFormat(_this.props.selected, {
                  dateFormat: longDateFormat,
                  locale: locale,
                }),
              );
            }
          }
          return React__default.default.createElement(
            "span",
            {
              role: "alert",
              "aria-live": "polite",
              className: "react-datepicker__aria-live",
            },
            ariaLiveMessage,
          );
        };
        _this.renderDateInput = function () {
          var _a, _b;
          var _c;
          var className = clsx.clsx(
            _this.props.className,
            ((_a = {}), (_a[outsideClickIgnoreClass] = _this.state.open), _a),
          );
          var customInput =
            _this.props.customInput ||
            React__default.default.createElement("input", { type: "text" });
          var customInputRef = _this.props.customInputRef || "ref";
          var _d = _this.props,
            _e = _d.dateFormat,
            dateFormat =
              _e === void 0 ? DatePicker.defaultProps.dateFormat : _e,
            locale = _d.locale;
          var inputValue =
            typeof _this.props.value === "string"
              ? _this.props.value
              : typeof _this.state.inputValue === "string"
                ? _this.state.inputValue
                : _this.props.selectsRange
                  ? safeDateRangeFormat(
                      _this.props.startDate,
                      _this.props.endDate,
                      {
                        dateFormat: dateFormat,
                        locale: locale,
                      },
                    )
                  : _this.props.selectsMultiple
                    ? safeMultipleDatesFormat(
                        (_c = _this.props.selectedDates) !== null &&
                          _c !== void 0
                          ? _c
                          : [],
                        {
                          dateFormat: dateFormat,
                          locale: locale,
                        },
                      )
                    : safeDateFormat(_this.props.selected, {
                        dateFormat: dateFormat,
                        locale: locale,
                      });
          return React.cloneElement(
            customInput,
            ((_b = {}),
            (_b[customInputRef] = function (input) {
              _this.input = input;
            }),
            (_b.value = inputValue),
            (_b.onBlur = _this.handleBlur),
            (_b.onChange = _this.handleChange),
            (_b.onClick = _this.onInputClick),
            (_b.onFocus = _this.handleFocus),
            (_b.onKeyDown = _this.onInputKeyDown),
            (_b.id = _this.props.id),
            (_b.name = _this.props.name),
            (_b.form = _this.props.form),
            (_b.autoFocus = _this.props.autoFocus),
            (_b.placeholder = _this.props.placeholderText),
            (_b.disabled = _this.props.disabled),
            (_b.autoComplete = _this.props.autoComplete),
            (_b.className = clsx.clsx(customInput.props.className, className)),
            (_b.title = _this.props.title),
            (_b.readOnly = _this.props.readOnly),
            (_b.required = _this.props.required),
            (_b.tabIndex = _this.props.tabIndex),
            (_b["aria-describedby"] = _this.props.ariaDescribedBy),
            (_b["aria-invalid"] = _this.props.ariaInvalid),
            (_b["aria-labelledby"] = _this.props.ariaLabelledBy),
            (_b["aria-required"] = _this.props.ariaRequired),
            _b),
          );
        };
        _this.renderClearButton = function () {
          var _a = _this.props,
            isClearable = _a.isClearable,
            disabled = _a.disabled,
            selected = _a.selected,
            startDate = _a.startDate,
            endDate = _a.endDate,
            clearButtonTitle = _a.clearButtonTitle,
            _b = _a.clearButtonClassName,
            clearButtonClassName = _b === void 0 ? "" : _b,
            _c = _a.ariaLabelClose,
            ariaLabelClose = _c === void 0 ? "Close" : _c,
            selectedDates = _a.selectedDates;
          if (
            isClearable &&
            (selected != null ||
              startDate != null ||
              endDate != null ||
              (selectedDates === null || selectedDates === void 0
                ? void 0
                : selectedDates.length))
          ) {
            return React__default.default.createElement("button", {
              type: "button",
              className: clsx.clsx(
                "react-datepicker__close-icon",
                clearButtonClassName,
                { "react-datepicker__close-icon--disabled": disabled },
              ),
              disabled: disabled,
              "aria-label": ariaLabelClose,
              onClick: _this.onClearClick,
              title: clearButtonTitle,
              tabIndex: -1,
            });
          } else {
            return null;
          }
        };
        _this.state = _this.calcInitialState();
        _this.preventFocusTimeout = undefined;
        return _this;
      }
      Object.defineProperty(DatePicker, "defaultProps", {
        get: function () {
          return {
            allowSameDay: false,
            dateFormat: "MM/dd/yyyy",
            dateFormatCalendar: "LLLL yyyy",
            disabled: false,
            disabledKeyboardNavigation: false,
            dropdownMode: "scroll",
            preventOpenOnFocus: false,
            monthsShown: 1,
            readOnly: false,
            withPortal: false,
            selectsDisabledDaysInRange: false,
            shouldCloseOnSelect: true,
            showTimeSelect: false,
            showTimeInput: false,
            showPreviousMonths: false,
            showMonthYearPicker: false,
            showFullMonthYearPicker: false,
            showTwoColumnMonthYearPicker: false,
            showFourColumnMonthYearPicker: false,
            showYearPicker: false,
            showQuarterYearPicker: false,
            showWeekPicker: false,
            strictParsing: false,
            swapRange: false,
            timeIntervals: 30,
            timeCaption: "Time",
            previousMonthAriaLabel: "Previous Month",
            previousMonthButtonLabel: "Previous Month",
            nextMonthAriaLabel: "Next Month",
            nextMonthButtonLabel: "Next Month",
            previousYearAriaLabel: "Previous Year",
            previousYearButtonLabel: "Previous Year",
            nextYearAriaLabel: "Next Year",
            nextYearButtonLabel: "Next Year",
            timeInputLabel: "Time",
            enableTabLoop: true,
            yearItemNumber: DEFAULT_YEAR_ITEM_NUMBER,
            focusSelectedMonth: false,
            showPopperArrow: true,
            excludeScrollbar: true,
            customTimeInput: null,
            calendarStartDay: undefined,
            toggleCalendarOnIconClick: false,
            usePointerEvent: false,
          };
        },
        enumerable: false,
        configurable: true,
      });
      DatePicker.prototype.componentDidMount = function () {
        window.addEventListener("scroll", this.onScroll, true);
        document.addEventListener(
          "visibilitychange",
          this.setHiddenStateOnVisibilityHidden,
        );
      };
      DatePicker.prototype.componentDidUpdate = function (
        prevProps,
        prevState,
      ) {
        var _a, _b, _c, _d;
        if (
          prevProps.inline &&
          hasPreSelectionChanged(prevProps.selected, this.props.selected)
        ) {
          this.setPreSelection(this.props.selected);
        }
        if (
          this.state.monthSelectedIn !== undefined &&
          prevProps.monthsShown !== this.props.monthsShown
        ) {
          this.setState({ monthSelectedIn: 0 });
        }
        if (prevProps.highlightDates !== this.props.highlightDates) {
          this.setState({
            highlightDates: getHighLightDaysMap(this.props.highlightDates),
          });
        }
        if (
          !prevState.focused &&
          !isEqual(prevProps.selected, this.props.selected)
        ) {
          this.setState({ inputValue: null });
        }
        if (prevState.open !== this.state.open) {
          if (prevState.open === false && this.state.open === true) {
            (_b = (_a = this.props).onCalendarOpen) === null || _b === void 0
              ? void 0
              : _b.call(_a);
          }
          if (prevState.open === true && this.state.open === false) {
            (_d = (_c = this.props).onCalendarClose) === null || _d === void 0
              ? void 0
              : _d.call(_c);
          }
        }
      };
      DatePicker.prototype.componentWillUnmount = function () {
        this.clearPreventFocusTimeout();
        window.removeEventListener("scroll", this.onScroll, true);
        document.removeEventListener(
          "visibilitychange",
          this.setHiddenStateOnVisibilityHidden,
        );
      };
      DatePicker.prototype.renderInputContainer = function () {
        var _a = this.props,
          showIcon = _a.showIcon,
          icon = _a.icon,
          calendarIconClassname = _a.calendarIconClassname,
          calendarIconClassName = _a.calendarIconClassName,
          toggleCalendarOnIconClick = _a.toggleCalendarOnIconClick;
        var open = this.state.open;
        if (calendarIconClassname) {
          console.warn(
            "calendarIconClassname props is deprecated. should use calendarIconClassName props.",
          );
        }
        return React__default.default.createElement(
          "div",
          {
            className: "react-datepicker__input-container".concat(
              showIcon ? " react-datepicker__view-calendar-icon" : "",
            ),
          },
          showIcon &&
            React__default.default.createElement(
              CalendarIcon,
              _assign(
                {
                  icon: icon,
                  className: clsx.clsx(
                    calendarIconClassName,
                    !calendarIconClassName && calendarIconClassname,
                    open && "react-datepicker-ignore-onclickoutside",
                  ),
                },
                toggleCalendarOnIconClick
                  ? {
                      onClick: this.toggleCalendar,
                    }
                  : null,
              ),
            ),
          this.state.isRenderAriaLiveMessage && this.renderAriaLiveRegion(),
          this.renderDateInput(),
          this.renderClearButton(),
        );
      };
      DatePicker.prototype.render = function () {
        var calendar = this.renderCalendar();
        if (this.props.inline) return calendar;
        if (this.props.withPortal) {
          var portalContainer = this.state.open
            ? React__default.default.createElement(
                TabLoop,
                { enableTabLoop: this.props.enableTabLoop },
                React__default.default.createElement(
                  "div",
                  {
                    className: "react-datepicker__portal",
                    tabIndex: -1,
                    onKeyDown: this.onPortalKeyDown,
                  },
                  calendar,
                ),
              )
            : null;
          if (this.state.open && this.props.portalId) {
            portalContainer = React__default.default.createElement(
              Portal,
              _assign({ portalId: this.props.portalId }, this.props),
              portalContainer,
            );
          }
          return React__default.default.createElement(
            "div",
            null,
            this.renderInputContainer(),
            portalContainer,
          );
        }
        return React__default.default.createElement(
          PopperComponent$1,
          _assign({}, this.props, {
            className: this.props.popperClassName,
            hidePopper: !this.isCalendarOpen(),
            targetComponent: this.renderInputContainer(),
            popperComponent: calendar,
            popperOnKeyDown: this.onPopperKeyDown,
            showArrow: this.props.showPopperArrow,
          }),
        );
      };
      return DatePicker;
    })(React.Component);
    var PRESELECT_CHANGE_VIA_INPUT = "input";
    var PRESELECT_CHANGE_VIA_NAVIGATE = "navigate";

    exports.CalendarContainer = CalendarContainer;
    exports.default = DatePicker;
    exports.getDefaultLocale = getDefaultLocale;
    exports.registerLocale = registerLocale;
    exports.setDefaultLocale = setDefaultLocale;

    Object.defineProperty(exports, "__esModule", { value: true });
  },
);
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoicmVhY3QtZGF0ZXBpY2tlci5qcyIsInNvdXJjZXMiOlsiLi4vbm9kZV9tb2R1bGVzL3RzbGliL3RzbGliLmVzNi5qcyIsIi4uL3NyYy9jYWxlbmRhcl9jb250YWluZXIudHN4IiwiLi4vc3JjL2NsaWNrX291dHNpZGVfd3JhcHBlci50c3giLCIuLi9zcmMvZGF0ZV91dGlscy50cyIsIi4uL3NyYy9pbnB1dF90aW1lLnRzeCIsIi4uL3NyYy9kYXkudHN4IiwiLi4vc3JjL3dlZWtfbnVtYmVyLnRzeCIsIi4uL3NyYy93ZWVrLnRzeCIsIi4uL3NyYy9tb250aC50c3giLCIuLi9zcmMvbW9udGhfZHJvcGRvd25fb3B0aW9ucy50c3giLCIuLi9zcmMvbW9udGhfZHJvcGRvd24udHN4IiwiLi4vc3JjL21vbnRoX3llYXJfZHJvcGRvd25fb3B0aW9ucy50c3giLCIuLi9zcmMvbW9udGhfeWVhcl9kcm9wZG93bi50c3giLCIuLi9zcmMvdGltZS50c3giLCIuLi9zcmMveWVhci50c3giLCIuLi9zcmMveWVhcl9kcm9wZG93bl9vcHRpb25zLnRzeCIsIi4uL3NyYy95ZWFyX2Ryb3Bkb3duLnRzeCIsIi4uL3NyYy9jYWxlbmRhci50c3giLCIuLi9zcmMvY2FsZW5kYXJfaWNvbi50c3giLCIuLi9zcmMvcG9ydGFsLnRzeCIsIi4uL3NyYy90YWJfbG9vcC50c3giLCIuLi9zcmMvd2l0aF9mbG9hdGluZy50c3giLCIuLi9zcmMvcG9wcGVyX2NvbXBvbmVudC50c3giLCIuLi9zcmMvaW5kZXgudHN4Il0sInNvdXJjZXNDb250ZW50IjpbIi8qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKipcclxuQ29weXJpZ2h0IChjKSBNaWNyb3NvZnQgQ29ycG9yYXRpb24uXHJcblxyXG5QZXJtaXNzaW9uIHRvIHVzZSwgY29weSwgbW9kaWZ5LCBhbmQvb3IgZGlzdHJpYnV0ZSB0aGlzIHNvZnR3YXJlIGZvciBhbnlcclxucHVycG9zZSB3aXRoIG9yIHdpdGhvdXQgZmVlIGlzIGhlcmVieSBncmFudGVkLlxyXG5cclxuVEhFIFNPRlRXQVJFIElTIFBST1ZJREVEIFwiQVMgSVNcIiBBTkQgVEhFIEFVVEhPUiBESVNDTEFJTVMgQUxMIFdBUlJBTlRJRVMgV0lUSFxyXG5SRUdBUkQgVE8gVEhJUyBTT0ZUV0FSRSBJTkNMVURJTkcgQUxMIElNUExJRUQgV0FSUkFOVElFUyBPRiBNRVJDSEFOVEFCSUxJVFlcclxuQU5EIEZJVE5FU1MuIElOIE5PIEVWRU5UIFNIQUxMIFRIRSBBVVRIT1IgQkUgTElBQkxFIEZPUiBBTlkgU1BFQ0lBTCwgRElSRUNULFxyXG5JTkRJUkVDVCwgT1IgQ09OU0VRVUVOVElBTCBEQU1BR0VTIE9SIEFOWSBEQU1BR0VTIFdIQVRTT0VWRVIgUkVTVUxUSU5HIEZST01cclxuTE9TUyBPRiBVU0UsIERBVEEgT1IgUFJPRklUUywgV0hFVEhFUiBJTiBBTiBBQ1RJT04gT0YgQ09OVFJBQ1QsIE5FR0xJR0VOQ0UgT1JcclxuT1RIRVIgVE9SVElPVVMgQUNUSU9OLCBBUklTSU5HIE9VVCBPRiBPUiBJTiBDT05ORUNUSU9OIFdJVEggVEhFIFVTRSBPUlxyXG5QRVJGT1JNQU5DRSBPRiBUSElTIFNPRlRXQVJFLlxyXG4qKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKioqKiAqL1xyXG4vKiBnbG9iYWwgUmVmbGVjdCwgUHJvbWlzZSwgU3VwcHJlc3NlZEVycm9yLCBTeW1ib2wsIEl0ZXJhdG9yICovXHJcblxyXG52YXIgZXh0ZW5kU3RhdGljcyA9IGZ1bmN0aW9uKGQsIGIpIHtcclxuICAgIGV4dGVuZFN0YXRpY3MgPSBPYmplY3Quc2V0UHJvdG90eXBlT2YgfHxcclxuICAgICAgICAoeyBfX3Byb3RvX186IFtdIH0gaW5zdGFuY2VvZiBBcnJheSAmJiBmdW5jdGlvbiAoZCwgYikgeyBkLl9fcHJvdG9fXyA9IGI7IH0pIHx8XHJcbiAgICAgICAgZnVuY3Rpb24gKGQsIGIpIHsgZm9yICh2YXIgcCBpbiBiKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKGIsIHApKSBkW3BdID0gYltwXTsgfTtcclxuICAgIHJldHVybiBleHRlbmRTdGF0aWNzKGQsIGIpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXh0ZW5kcyhkLCBiKSB7XHJcbiAgICBpZiAodHlwZW9mIGIgIT09IFwiZnVuY3Rpb25cIiAmJiBiICE9PSBudWxsKVxyXG4gICAgICAgIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDbGFzcyBleHRlbmRzIHZhbHVlIFwiICsgU3RyaW5nKGIpICsgXCIgaXMgbm90IGEgY29uc3RydWN0b3Igb3IgbnVsbFwiKTtcclxuICAgIGV4dGVuZFN0YXRpY3MoZCwgYik7XHJcbiAgICBmdW5jdGlvbiBfXygpIHsgdGhpcy5jb25zdHJ1Y3RvciA9IGQ7IH1cclxuICAgIGQucHJvdG90eXBlID0gYiA9PT0gbnVsbCA/IE9iamVjdC5jcmVhdGUoYikgOiAoX18ucHJvdG90eXBlID0gYi5wcm90b3R5cGUsIG5ldyBfXygpKTtcclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2Fzc2lnbiA9IGZ1bmN0aW9uKCkge1xyXG4gICAgX19hc3NpZ24gPSBPYmplY3QuYXNzaWduIHx8IGZ1bmN0aW9uIF9fYXNzaWduKHQpIHtcclxuICAgICAgICBmb3IgKHZhciBzLCBpID0gMSwgbiA9IGFyZ3VtZW50cy5sZW5ndGg7IGkgPCBuOyBpKyspIHtcclxuICAgICAgICAgICAgcyA9IGFyZ3VtZW50c1tpXTtcclxuICAgICAgICAgICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApKSB0W3BdID0gc1twXTtcclxuICAgICAgICB9XHJcbiAgICAgICAgcmV0dXJuIHQ7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gX19hc3NpZ24uYXBwbHkodGhpcywgYXJndW1lbnRzKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVzdChzLCBlKSB7XHJcbiAgICB2YXIgdCA9IHt9O1xyXG4gICAgZm9yICh2YXIgcCBpbiBzKSBpZiAoT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKHMsIHApICYmIGUuaW5kZXhPZihwKSA8IDApXHJcbiAgICAgICAgdFtwXSA9IHNbcF07XHJcbiAgICBpZiAocyAhPSBudWxsICYmIHR5cGVvZiBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzID09PSBcImZ1bmN0aW9uXCIpXHJcbiAgICAgICAgZm9yICh2YXIgaSA9IDAsIHAgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlTeW1ib2xzKHMpOyBpIDwgcC5sZW5ndGg7IGkrKykge1xyXG4gICAgICAgICAgICBpZiAoZS5pbmRleE9mKHBbaV0pIDwgMCAmJiBPYmplY3QucHJvdG90eXBlLnByb3BlcnR5SXNFbnVtZXJhYmxlLmNhbGwocywgcFtpXSkpXHJcbiAgICAgICAgICAgICAgICB0W3BbaV1dID0gc1twW2ldXTtcclxuICAgICAgICB9XHJcbiAgICByZXR1cm4gdDtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpIHtcclxuICAgIHZhciBjID0gYXJndW1lbnRzLmxlbmd0aCwgciA9IGMgPCAzID8gdGFyZ2V0IDogZGVzYyA9PT0gbnVsbCA/IGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKHRhcmdldCwga2V5KSA6IGRlc2MsIGQ7XHJcbiAgICBpZiAodHlwZW9mIFJlZmxlY3QgPT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIFJlZmxlY3QuZGVjb3JhdGUgPT09IFwiZnVuY3Rpb25cIikgciA9IFJlZmxlY3QuZGVjb3JhdGUoZGVjb3JhdG9ycywgdGFyZ2V0LCBrZXksIGRlc2MpO1xyXG4gICAgZWxzZSBmb3IgKHZhciBpID0gZGVjb3JhdG9ycy5sZW5ndGggLSAxOyBpID49IDA7IGktLSkgaWYgKGQgPSBkZWNvcmF0b3JzW2ldKSByID0gKGMgPCAzID8gZChyKSA6IGMgPiAzID8gZCh0YXJnZXQsIGtleSwgcikgOiBkKHRhcmdldCwga2V5KSkgfHwgcjtcclxuICAgIHJldHVybiBjID4gMyAmJiByICYmIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGtleSwgciksIHI7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3BhcmFtKHBhcmFtSW5kZXgsIGRlY29yYXRvcikge1xyXG4gICAgcmV0dXJuIGZ1bmN0aW9uICh0YXJnZXQsIGtleSkgeyBkZWNvcmF0b3IodGFyZ2V0LCBrZXksIHBhcmFtSW5kZXgpOyB9XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2VzRGVjb3JhdGUoY3RvciwgZGVzY3JpcHRvckluLCBkZWNvcmF0b3JzLCBjb250ZXh0SW4sIGluaXRpYWxpemVycywgZXh0cmFJbml0aWFsaXplcnMpIHtcclxuICAgIGZ1bmN0aW9uIGFjY2VwdChmKSB7IGlmIChmICE9PSB2b2lkIDAgJiYgdHlwZW9mIGYgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkZ1bmN0aW9uIGV4cGVjdGVkXCIpOyByZXR1cm4gZjsgfVxyXG4gICAgdmFyIGtpbmQgPSBjb250ZXh0SW4ua2luZCwga2V5ID0ga2luZCA9PT0gXCJnZXR0ZXJcIiA/IFwiZ2V0XCIgOiBraW5kID09PSBcInNldHRlclwiID8gXCJzZXRcIiA6IFwidmFsdWVcIjtcclxuICAgIHZhciB0YXJnZXQgPSAhZGVzY3JpcHRvckluICYmIGN0b3IgPyBjb250ZXh0SW5bXCJzdGF0aWNcIl0gPyBjdG9yIDogY3Rvci5wcm90b3R5cGUgOiBudWxsO1xyXG4gICAgdmFyIGRlc2NyaXB0b3IgPSBkZXNjcmlwdG9ySW4gfHwgKHRhcmdldCA/IE9iamVjdC5nZXRPd25Qcm9wZXJ0eURlc2NyaXB0b3IodGFyZ2V0LCBjb250ZXh0SW4ubmFtZSkgOiB7fSk7XHJcbiAgICB2YXIgXywgZG9uZSA9IGZhbHNlO1xyXG4gICAgZm9yICh2YXIgaSA9IGRlY29yYXRvcnMubGVuZ3RoIC0gMTsgaSA+PSAwOyBpLS0pIHtcclxuICAgICAgICB2YXIgY29udGV4dCA9IHt9O1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluKSBjb250ZXh0W3BdID0gcCA9PT0gXCJhY2Nlc3NcIiA/IHt9IDogY29udGV4dEluW3BdO1xyXG4gICAgICAgIGZvciAodmFyIHAgaW4gY29udGV4dEluLmFjY2VzcykgY29udGV4dC5hY2Nlc3NbcF0gPSBjb250ZXh0SW4uYWNjZXNzW3BdO1xyXG4gICAgICAgIGNvbnRleHQuYWRkSW5pdGlhbGl6ZXIgPSBmdW5jdGlvbiAoZikgeyBpZiAoZG9uZSkgdGhyb3cgbmV3IFR5cGVFcnJvcihcIkNhbm5vdCBhZGQgaW5pdGlhbGl6ZXJzIGFmdGVyIGRlY29yYXRpb24gaGFzIGNvbXBsZXRlZFwiKTsgZXh0cmFJbml0aWFsaXplcnMucHVzaChhY2NlcHQoZiB8fCBudWxsKSk7IH07XHJcbiAgICAgICAgdmFyIHJlc3VsdCA9ICgwLCBkZWNvcmF0b3JzW2ldKShraW5kID09PSBcImFjY2Vzc29yXCIgPyB7IGdldDogZGVzY3JpcHRvci5nZXQsIHNldDogZGVzY3JpcHRvci5zZXQgfSA6IGRlc2NyaXB0b3Jba2V5XSwgY29udGV4dCk7XHJcbiAgICAgICAgaWYgKGtpbmQgPT09IFwiYWNjZXNzb3JcIikge1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSB2b2lkIDApIGNvbnRpbnVlO1xyXG4gICAgICAgICAgICBpZiAocmVzdWx0ID09PSBudWxsIHx8IHR5cGVvZiByZXN1bHQgIT09IFwib2JqZWN0XCIpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJPYmplY3QgZXhwZWN0ZWRcIik7XHJcbiAgICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5nZXQpKSBkZXNjcmlwdG9yLmdldCA9IF87XHJcbiAgICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5zZXQpKSBkZXNjcmlwdG9yLnNldCA9IF87XHJcbiAgICAgICAgICAgIGlmIChfID0gYWNjZXB0KHJlc3VsdC5pbml0KSkgaW5pdGlhbGl6ZXJzLnVuc2hpZnQoXyk7XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGVsc2UgaWYgKF8gPSBhY2NlcHQocmVzdWx0KSkge1xyXG4gICAgICAgICAgICBpZiAoa2luZCA9PT0gXCJmaWVsZFwiKSBpbml0aWFsaXplcnMudW5zaGlmdChfKTtcclxuICAgICAgICAgICAgZWxzZSBkZXNjcmlwdG9yW2tleV0gPSBfO1xyXG4gICAgICAgIH1cclxuICAgIH1cclxuICAgIGlmICh0YXJnZXQpIE9iamVjdC5kZWZpbmVQcm9wZXJ0eSh0YXJnZXQsIGNvbnRleHRJbi5uYW1lLCBkZXNjcmlwdG9yKTtcclxuICAgIGRvbmUgPSB0cnVlO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcnVuSW5pdGlhbGl6ZXJzKHRoaXNBcmcsIGluaXRpYWxpemVycywgdmFsdWUpIHtcclxuICAgIHZhciB1c2VWYWx1ZSA9IGFyZ3VtZW50cy5sZW5ndGggPiAyO1xyXG4gICAgZm9yICh2YXIgaSA9IDA7IGkgPCBpbml0aWFsaXplcnMubGVuZ3RoOyBpKyspIHtcclxuICAgICAgICB2YWx1ZSA9IHVzZVZhbHVlID8gaW5pdGlhbGl6ZXJzW2ldLmNhbGwodGhpc0FyZywgdmFsdWUpIDogaW5pdGlhbGl6ZXJzW2ldLmNhbGwodGhpc0FyZyk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gdXNlVmFsdWUgPyB2YWx1ZSA6IHZvaWQgMDtcclxufTtcclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Byb3BLZXkoeCkge1xyXG4gICAgcmV0dXJuIHR5cGVvZiB4ID09PSBcInN5bWJvbFwiID8geCA6IFwiXCIuY29uY2F0KHgpO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc2V0RnVuY3Rpb25OYW1lKGYsIG5hbWUsIHByZWZpeCkge1xyXG4gICAgaWYgKHR5cGVvZiBuYW1lID09PSBcInN5bWJvbFwiKSBuYW1lID0gbmFtZS5kZXNjcmlwdGlvbiA/IFwiW1wiLmNvbmNhdChuYW1lLmRlc2NyaXB0aW9uLCBcIl1cIikgOiBcIlwiO1xyXG4gICAgcmV0dXJuIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShmLCBcIm5hbWVcIiwgeyBjb25maWd1cmFibGU6IHRydWUsIHZhbHVlOiBwcmVmaXggPyBcIlwiLmNvbmNhdChwcmVmaXgsIFwiIFwiLCBuYW1lKSA6IG5hbWUgfSk7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19tZXRhZGF0YShtZXRhZGF0YUtleSwgbWV0YWRhdGFWYWx1ZSkge1xyXG4gICAgaWYgKHR5cGVvZiBSZWZsZWN0ID09PSBcIm9iamVjdFwiICYmIHR5cGVvZiBSZWZsZWN0Lm1ldGFkYXRhID09PSBcImZ1bmN0aW9uXCIpIHJldHVybiBSZWZsZWN0Lm1ldGFkYXRhKG1ldGFkYXRhS2V5LCBtZXRhZGF0YVZhbHVlKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fYXdhaXRlcih0aGlzQXJnLCBfYXJndW1lbnRzLCBQLCBnZW5lcmF0b3IpIHtcclxuICAgIGZ1bmN0aW9uIGFkb3B0KHZhbHVlKSB7IHJldHVybiB2YWx1ZSBpbnN0YW5jZW9mIFAgPyB2YWx1ZSA6IG5ldyBQKGZ1bmN0aW9uIChyZXNvbHZlKSB7IHJlc29sdmUodmFsdWUpOyB9KTsgfVxyXG4gICAgcmV0dXJuIG5ldyAoUCB8fCAoUCA9IFByb21pc2UpKShmdW5jdGlvbiAocmVzb2x2ZSwgcmVqZWN0KSB7XHJcbiAgICAgICAgZnVuY3Rpb24gZnVsZmlsbGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yLm5leHQodmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHJlamVjdGVkKHZhbHVlKSB7IHRyeSB7IHN0ZXAoZ2VuZXJhdG9yW1widGhyb3dcIl0odmFsdWUpKTsgfSBjYXRjaCAoZSkgeyByZWplY3QoZSk7IH0gfVxyXG4gICAgICAgIGZ1bmN0aW9uIHN0ZXAocmVzdWx0KSB7IHJlc3VsdC5kb25lID8gcmVzb2x2ZShyZXN1bHQudmFsdWUpIDogYWRvcHQocmVzdWx0LnZhbHVlKS50aGVuKGZ1bGZpbGxlZCwgcmVqZWN0ZWQpOyB9XHJcbiAgICAgICAgc3RlcCgoZ2VuZXJhdG9yID0gZ2VuZXJhdG9yLmFwcGx5KHRoaXNBcmcsIF9hcmd1bWVudHMgfHwgW10pKS5uZXh0KCkpO1xyXG4gICAgfSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2dlbmVyYXRvcih0aGlzQXJnLCBib2R5KSB7XHJcbiAgICB2YXIgXyA9IHsgbGFiZWw6IDAsIHNlbnQ6IGZ1bmN0aW9uKCkgeyBpZiAodFswXSAmIDEpIHRocm93IHRbMV07IHJldHVybiB0WzFdOyB9LCB0cnlzOiBbXSwgb3BzOiBbXSB9LCBmLCB5LCB0LCBnID0gT2JqZWN0LmNyZWF0ZSgodHlwZW9mIEl0ZXJhdG9yID09PSBcImZ1bmN0aW9uXCIgPyBJdGVyYXRvciA6IE9iamVjdCkucHJvdG90eXBlKTtcclxuICAgIHJldHVybiBnLm5leHQgPSB2ZXJiKDApLCBnW1widGhyb3dcIl0gPSB2ZXJiKDEpLCBnW1wicmV0dXJuXCJdID0gdmVyYigyKSwgdHlwZW9mIFN5bWJvbCA9PT0gXCJmdW5jdGlvblwiICYmIChnW1N5bWJvbC5pdGVyYXRvcl0gPSBmdW5jdGlvbigpIHsgcmV0dXJuIHRoaXM7IH0pLCBnO1xyXG4gICAgZnVuY3Rpb24gdmVyYihuKSB7IHJldHVybiBmdW5jdGlvbiAodikgeyByZXR1cm4gc3RlcChbbiwgdl0pOyB9OyB9XHJcbiAgICBmdW5jdGlvbiBzdGVwKG9wKSB7XHJcbiAgICAgICAgaWYgKGYpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJHZW5lcmF0b3IgaXMgYWxyZWFkeSBleGVjdXRpbmcuXCIpO1xyXG4gICAgICAgIHdoaWxlIChnICYmIChnID0gMCwgb3BbMF0gJiYgKF8gPSAwKSksIF8pIHRyeSB7XHJcbiAgICAgICAgICAgIGlmIChmID0gMSwgeSAmJiAodCA9IG9wWzBdICYgMiA/IHlbXCJyZXR1cm5cIl0gOiBvcFswXSA/IHlbXCJ0aHJvd1wiXSB8fCAoKHQgPSB5W1wicmV0dXJuXCJdKSAmJiB0LmNhbGwoeSksIDApIDogeS5uZXh0KSAmJiAhKHQgPSB0LmNhbGwoeSwgb3BbMV0pKS5kb25lKSByZXR1cm4gdDtcclxuICAgICAgICAgICAgaWYgKHkgPSAwLCB0KSBvcCA9IFtvcFswXSAmIDIsIHQudmFsdWVdO1xyXG4gICAgICAgICAgICBzd2l0Y2ggKG9wWzBdKSB7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDA6IGNhc2UgMTogdCA9IG9wOyBicmVhaztcclxuICAgICAgICAgICAgICAgIGNhc2UgNDogXy5sYWJlbCsrOyByZXR1cm4geyB2YWx1ZTogb3BbMV0sIGRvbmU6IGZhbHNlIH07XHJcbiAgICAgICAgICAgICAgICBjYXNlIDU6IF8ubGFiZWwrKzsgeSA9IG9wWzFdOyBvcCA9IFswXTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBjYXNlIDc6IG9wID0gXy5vcHMucG9wKCk7IF8udHJ5cy5wb3AoKTsgY29udGludWU7XHJcbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxyXG4gICAgICAgICAgICAgICAgICAgIGlmICghKHQgPSBfLnRyeXMsIHQgPSB0Lmxlbmd0aCA+IDAgJiYgdFt0Lmxlbmd0aCAtIDFdKSAmJiAob3BbMF0gPT09IDYgfHwgb3BbMF0gPT09IDIpKSB7IF8gPSAwOyBjb250aW51ZTsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmIChvcFswXSA9PT0gMyAmJiAoIXQgfHwgKG9wWzFdID4gdFswXSAmJiBvcFsxXSA8IHRbM10pKSkgeyBfLmxhYmVsID0gb3BbMV07IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKG9wWzBdID09PSA2ICYmIF8ubGFiZWwgPCB0WzFdKSB7IF8ubGFiZWwgPSB0WzFdOyB0ID0gb3A7IGJyZWFrOyB9XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHQgJiYgXy5sYWJlbCA8IHRbMl0pIHsgXy5sYWJlbCA9IHRbMl07IF8ub3BzLnB1c2gob3ApOyBicmVhazsgfVxyXG4gICAgICAgICAgICAgICAgICAgIGlmICh0WzJdKSBfLm9wcy5wb3AoKTtcclxuICAgICAgICAgICAgICAgICAgICBfLnRyeXMucG9wKCk7IGNvbnRpbnVlO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIG9wID0gYm9keS5jYWxsKHRoaXNBcmcsIF8pO1xyXG4gICAgICAgIH0gY2F0Y2ggKGUpIHsgb3AgPSBbNiwgZV07IHkgPSAwOyB9IGZpbmFsbHkgeyBmID0gdCA9IDA7IH1cclxuICAgICAgICBpZiAob3BbMF0gJiA1KSB0aHJvdyBvcFsxXTsgcmV0dXJuIHsgdmFsdWU6IG9wWzBdID8gb3BbMV0gOiB2b2lkIDAsIGRvbmU6IHRydWUgfTtcclxuICAgIH1cclxufVxyXG5cclxuZXhwb3J0IHZhciBfX2NyZWF0ZUJpbmRpbmcgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIG0sIGssIGsyKSB7XHJcbiAgICBpZiAoazIgPT09IHVuZGVmaW5lZCkgazIgPSBrO1xyXG4gICAgdmFyIGRlc2MgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlEZXNjcmlwdG9yKG0sIGspO1xyXG4gICAgaWYgKCFkZXNjIHx8IChcImdldFwiIGluIGRlc2MgPyAhbS5fX2VzTW9kdWxlIDogZGVzYy53cml0YWJsZSB8fCBkZXNjLmNvbmZpZ3VyYWJsZSkpIHtcclxuICAgICAgICBkZXNjID0geyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGZ1bmN0aW9uKCkgeyByZXR1cm4gbVtrXTsgfSB9O1xyXG4gICAgfVxyXG4gICAgT2JqZWN0LmRlZmluZVByb3BlcnR5KG8sIGsyLCBkZXNjKTtcclxufSkgOiAoZnVuY3Rpb24obywgbSwgaywgazIpIHtcclxuICAgIGlmIChrMiA9PT0gdW5kZWZpbmVkKSBrMiA9IGs7XHJcbiAgICBvW2syXSA9IG1ba107XHJcbn0pO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fZXhwb3J0U3RhcihtLCBvKSB7XHJcbiAgICBmb3IgKHZhciBwIGluIG0pIGlmIChwICE9PSBcImRlZmF1bHRcIiAmJiAhT2JqZWN0LnByb3RvdHlwZS5oYXNPd25Qcm9wZXJ0eS5jYWxsKG8sIHApKSBfX2NyZWF0ZUJpbmRpbmcobywgbSwgcCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3ZhbHVlcyhvKSB7XHJcbiAgICB2YXIgcyA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBTeW1ib2wuaXRlcmF0b3IsIG0gPSBzICYmIG9bc10sIGkgPSAwO1xyXG4gICAgaWYgKG0pIHJldHVybiBtLmNhbGwobyk7XHJcbiAgICBpZiAobyAmJiB0eXBlb2Ygby5sZW5ndGggPT09IFwibnVtYmVyXCIpIHJldHVybiB7XHJcbiAgICAgICAgbmV4dDogZnVuY3Rpb24gKCkge1xyXG4gICAgICAgICAgICBpZiAobyAmJiBpID49IG8ubGVuZ3RoKSBvID0gdm9pZCAwO1xyXG4gICAgICAgICAgICByZXR1cm4geyB2YWx1ZTogbyAmJiBvW2krK10sIGRvbmU6ICFvIH07XHJcbiAgICAgICAgfVxyXG4gICAgfTtcclxuICAgIHRocm93IG5ldyBUeXBlRXJyb3IocyA/IFwiT2JqZWN0IGlzIG5vdCBpdGVyYWJsZS5cIiA6IFwiU3ltYm9sLml0ZXJhdG9yIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fcmVhZChvLCBuKSB7XHJcbiAgICB2YXIgbSA9IHR5cGVvZiBTeW1ib2wgPT09IFwiZnVuY3Rpb25cIiAmJiBvW1N5bWJvbC5pdGVyYXRvcl07XHJcbiAgICBpZiAoIW0pIHJldHVybiBvO1xyXG4gICAgdmFyIGkgPSBtLmNhbGwobyksIHIsIGFyID0gW10sIGU7XHJcbiAgICB0cnkge1xyXG4gICAgICAgIHdoaWxlICgobiA9PT0gdm9pZCAwIHx8IG4tLSA+IDApICYmICEociA9IGkubmV4dCgpKS5kb25lKSBhci5wdXNoKHIudmFsdWUpO1xyXG4gICAgfVxyXG4gICAgY2F0Y2ggKGVycm9yKSB7IGUgPSB7IGVycm9yOiBlcnJvciB9OyB9XHJcbiAgICBmaW5hbGx5IHtcclxuICAgICAgICB0cnkge1xyXG4gICAgICAgICAgICBpZiAociAmJiAhci5kb25lICYmIChtID0gaVtcInJldHVyblwiXSkpIG0uY2FsbChpKTtcclxuICAgICAgICB9XHJcbiAgICAgICAgZmluYWxseSB7IGlmIChlKSB0aHJvdyBlLmVycm9yOyB9XHJcbiAgICB9XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWQoKSB7XHJcbiAgICBmb3IgKHZhciBhciA9IFtdLCBpID0gMDsgaSA8IGFyZ3VtZW50cy5sZW5ndGg7IGkrKylcclxuICAgICAgICBhciA9IGFyLmNvbmNhdChfX3JlYWQoYXJndW1lbnRzW2ldKSk7XHJcbiAgICByZXR1cm4gYXI7XHJcbn1cclxuXHJcbi8qKiBAZGVwcmVjYXRlZCAqL1xyXG5leHBvcnQgZnVuY3Rpb24gX19zcHJlYWRBcnJheXMoKSB7XHJcbiAgICBmb3IgKHZhciBzID0gMCwgaSA9IDAsIGlsID0gYXJndW1lbnRzLmxlbmd0aDsgaSA8IGlsOyBpKyspIHMgKz0gYXJndW1lbnRzW2ldLmxlbmd0aDtcclxuICAgIGZvciAodmFyIHIgPSBBcnJheShzKSwgayA9IDAsIGkgPSAwOyBpIDwgaWw7IGkrKylcclxuICAgICAgICBmb3IgKHZhciBhID0gYXJndW1lbnRzW2ldLCBqID0gMCwgamwgPSBhLmxlbmd0aDsgaiA8IGpsOyBqKyssIGsrKylcclxuICAgICAgICAgICAgcltrXSA9IGFbal07XHJcbiAgICByZXR1cm4gcjtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fc3ByZWFkQXJyYXkodG8sIGZyb20sIHBhY2spIHtcclxuICAgIGlmIChwYWNrIHx8IGFyZ3VtZW50cy5sZW5ndGggPT09IDIpIGZvciAodmFyIGkgPSAwLCBsID0gZnJvbS5sZW5ndGgsIGFyOyBpIDwgbDsgaSsrKSB7XHJcbiAgICAgICAgaWYgKGFyIHx8ICEoaSBpbiBmcm9tKSkge1xyXG4gICAgICAgICAgICBpZiAoIWFyKSBhciA9IEFycmF5LnByb3RvdHlwZS5zbGljZS5jYWxsKGZyb20sIDAsIGkpO1xyXG4gICAgICAgICAgICBhcltpXSA9IGZyb21baV07XHJcbiAgICAgICAgfVxyXG4gICAgfVxyXG4gICAgcmV0dXJuIHRvLmNvbmNhdChhciB8fCBBcnJheS5wcm90b3R5cGUuc2xpY2UuY2FsbChmcm9tKSk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2F3YWl0KHYpIHtcclxuICAgIHJldHVybiB0aGlzIGluc3RhbmNlb2YgX19hd2FpdCA/ICh0aGlzLnYgPSB2LCB0aGlzKSA6IG5ldyBfX2F3YWl0KHYpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0dlbmVyYXRvcih0aGlzQXJnLCBfYXJndW1lbnRzLCBnZW5lcmF0b3IpIHtcclxuICAgIGlmICghU3ltYm9sLmFzeW5jSXRlcmF0b3IpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNJdGVyYXRvciBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICB2YXIgZyA9IGdlbmVyYXRvci5hcHBseSh0aGlzQXJnLCBfYXJndW1lbnRzIHx8IFtdKSwgaSwgcSA9IFtdO1xyXG4gICAgcmV0dXJuIGkgPSBPYmplY3QuY3JlYXRlKCh0eXBlb2YgQXN5bmNJdGVyYXRvciA9PT0gXCJmdW5jdGlvblwiID8gQXN5bmNJdGVyYXRvciA6IE9iamVjdCkucHJvdG90eXBlKSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiLCBhd2FpdFJldHVybiksIGlbU3ltYm9sLmFzeW5jSXRlcmF0b3JdID0gZnVuY3Rpb24gKCkgeyByZXR1cm4gdGhpczsgfSwgaTtcclxuICAgIGZ1bmN0aW9uIGF3YWl0UmV0dXJuKGYpIHsgcmV0dXJuIGZ1bmN0aW9uICh2KSB7IHJldHVybiBQcm9taXNlLnJlc29sdmUodikudGhlbihmLCByZWplY3QpOyB9OyB9XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaWYgKGdbbl0pIHsgaVtuXSA9IGZ1bmN0aW9uICh2KSB7IHJldHVybiBuZXcgUHJvbWlzZShmdW5jdGlvbiAoYSwgYikgeyBxLnB1c2goW24sIHYsIGEsIGJdKSA+IDEgfHwgcmVzdW1lKG4sIHYpOyB9KTsgfTsgaWYgKGYpIGlbbl0gPSBmKGlbbl0pOyB9IH1cclxuICAgIGZ1bmN0aW9uIHJlc3VtZShuLCB2KSB7IHRyeSB7IHN0ZXAoZ1tuXSh2KSk7IH0gY2F0Y2ggKGUpIHsgc2V0dGxlKHFbMF1bM10sIGUpOyB9IH1cclxuICAgIGZ1bmN0aW9uIHN0ZXAocikgeyByLnZhbHVlIGluc3RhbmNlb2YgX19hd2FpdCA/IFByb21pc2UucmVzb2x2ZShyLnZhbHVlLnYpLnRoZW4oZnVsZmlsbCwgcmVqZWN0KSA6IHNldHRsZShxWzBdWzJdLCByKTsgfVxyXG4gICAgZnVuY3Rpb24gZnVsZmlsbCh2YWx1ZSkgeyByZXN1bWUoXCJuZXh0XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gcmVqZWN0KHZhbHVlKSB7IHJlc3VtZShcInRocm93XCIsIHZhbHVlKTsgfVxyXG4gICAgZnVuY3Rpb24gc2V0dGxlKGYsIHYpIHsgaWYgKGYodiksIHEuc2hpZnQoKSwgcS5sZW5ndGgpIHJlc3VtZShxWzBdWzBdLCBxWzBdWzFdKTsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY0RlbGVnYXRvcihvKSB7XHJcbiAgICB2YXIgaSwgcDtcclxuICAgIHJldHVybiBpID0ge30sIHZlcmIoXCJuZXh0XCIpLCB2ZXJiKFwidGhyb3dcIiwgZnVuY3Rpb24gKGUpIHsgdGhyb3cgZTsgfSksIHZlcmIoXCJyZXR1cm5cIiksIGlbU3ltYm9sLml0ZXJhdG9yXSA9IGZ1bmN0aW9uICgpIHsgcmV0dXJuIHRoaXM7IH0sIGk7XHJcbiAgICBmdW5jdGlvbiB2ZXJiKG4sIGYpIHsgaVtuXSA9IG9bbl0gPyBmdW5jdGlvbiAodikgeyByZXR1cm4gKHAgPSAhcCkgPyB7IHZhbHVlOiBfX2F3YWl0KG9bbl0odikpLCBkb25lOiBmYWxzZSB9IDogZiA/IGYodikgOiB2OyB9IDogZjsgfVxyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hc3luY1ZhbHVlcyhvKSB7XHJcbiAgICBpZiAoIVN5bWJvbC5hc3luY0l0ZXJhdG9yKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiU3ltYm9sLmFzeW5jSXRlcmF0b3IgaXMgbm90IGRlZmluZWQuXCIpO1xyXG4gICAgdmFyIG0gPSBvW1N5bWJvbC5hc3luY0l0ZXJhdG9yXSwgaTtcclxuICAgIHJldHVybiBtID8gbS5jYWxsKG8pIDogKG8gPSB0eXBlb2YgX192YWx1ZXMgPT09IFwiZnVuY3Rpb25cIiA/IF9fdmFsdWVzKG8pIDogb1tTeW1ib2wuaXRlcmF0b3JdKCksIGkgPSB7fSwgdmVyYihcIm5leHRcIiksIHZlcmIoXCJ0aHJvd1wiKSwgdmVyYihcInJldHVyblwiKSwgaVtTeW1ib2wuYXN5bmNJdGVyYXRvcl0gPSBmdW5jdGlvbiAoKSB7IHJldHVybiB0aGlzOyB9LCBpKTtcclxuICAgIGZ1bmN0aW9uIHZlcmIobikgeyBpW25dID0gb1tuXSAmJiBmdW5jdGlvbiAodikgeyByZXR1cm4gbmV3IFByb21pc2UoZnVuY3Rpb24gKHJlc29sdmUsIHJlamVjdCkgeyB2ID0gb1tuXSh2KSwgc2V0dGxlKHJlc29sdmUsIHJlamVjdCwgdi5kb25lLCB2LnZhbHVlKTsgfSk7IH07IH1cclxuICAgIGZ1bmN0aW9uIHNldHRsZShyZXNvbHZlLCByZWplY3QsIGQsIHYpIHsgUHJvbWlzZS5yZXNvbHZlKHYpLnRoZW4oZnVuY3Rpb24odikgeyByZXNvbHZlKHsgdmFsdWU6IHYsIGRvbmU6IGQgfSk7IH0sIHJlamVjdCk7IH1cclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fbWFrZVRlbXBsYXRlT2JqZWN0KGNvb2tlZCwgcmF3KSB7XHJcbiAgICBpZiAoT2JqZWN0LmRlZmluZVByb3BlcnR5KSB7IE9iamVjdC5kZWZpbmVQcm9wZXJ0eShjb29rZWQsIFwicmF3XCIsIHsgdmFsdWU6IHJhdyB9KTsgfSBlbHNlIHsgY29va2VkLnJhdyA9IHJhdzsgfVxyXG4gICAgcmV0dXJuIGNvb2tlZDtcclxufTtcclxuXHJcbnZhciBfX3NldE1vZHVsZURlZmF1bHQgPSBPYmplY3QuY3JlYXRlID8gKGZ1bmN0aW9uKG8sIHYpIHtcclxuICAgIE9iamVjdC5kZWZpbmVQcm9wZXJ0eShvLCBcImRlZmF1bHRcIiwgeyBlbnVtZXJhYmxlOiB0cnVlLCB2YWx1ZTogdiB9KTtcclxufSkgOiBmdW5jdGlvbihvLCB2KSB7XHJcbiAgICBvW1wiZGVmYXVsdFwiXSA9IHY7XHJcbn07XHJcblxyXG52YXIgb3duS2V5cyA9IGZ1bmN0aW9uKG8pIHtcclxuICAgIG93bktleXMgPSBPYmplY3QuZ2V0T3duUHJvcGVydHlOYW1lcyB8fCBmdW5jdGlvbiAobykge1xyXG4gICAgICAgIHZhciBhciA9IFtdO1xyXG4gICAgICAgIGZvciAodmFyIGsgaW4gbykgaWYgKE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvLCBrKSkgYXJbYXIubGVuZ3RoXSA9IGs7XHJcbiAgICAgICAgcmV0dXJuIGFyO1xyXG4gICAgfTtcclxuICAgIHJldHVybiBvd25LZXlzKG8pO1xyXG59O1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9faW1wb3J0U3Rhcihtb2QpIHtcclxuICAgIGlmIChtb2QgJiYgbW9kLl9fZXNNb2R1bGUpIHJldHVybiBtb2Q7XHJcbiAgICB2YXIgcmVzdWx0ID0ge307XHJcbiAgICBpZiAobW9kICE9IG51bGwpIGZvciAodmFyIGsgPSBvd25LZXlzKG1vZCksIGkgPSAwOyBpIDwgay5sZW5ndGg7IGkrKykgaWYgKGtbaV0gIT09IFwiZGVmYXVsdFwiKSBfX2NyZWF0ZUJpbmRpbmcocmVzdWx0LCBtb2QsIGtbaV0pO1xyXG4gICAgX19zZXRNb2R1bGVEZWZhdWx0KHJlc3VsdCwgbW9kKTtcclxuICAgIHJldHVybiByZXN1bHQ7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX2ltcG9ydERlZmF1bHQobW9kKSB7XHJcbiAgICByZXR1cm4gKG1vZCAmJiBtb2QuX19lc01vZHVsZSkgPyBtb2QgOiB7IGRlZmF1bHQ6IG1vZCB9O1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEdldChyZWNlaXZlciwgc3RhdGUsIGtpbmQsIGYpIHtcclxuICAgIGlmIChraW5kID09PSBcImFcIiAmJiAhZikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIlByaXZhdGUgYWNjZXNzb3Igd2FzIGRlZmluZWQgd2l0aG91dCBhIGdldHRlclwiKTtcclxuICAgIGlmICh0eXBlb2Ygc3RhdGUgPT09IFwiZnVuY3Rpb25cIiA/IHJlY2VpdmVyICE9PSBzdGF0ZSB8fCAhZiA6ICFzdGF0ZS5oYXMocmVjZWl2ZXIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHJlYWQgcHJpdmF0ZSBtZW1iZXIgZnJvbSBhbiBvYmplY3Qgd2hvc2UgY2xhc3MgZGlkIG5vdCBkZWNsYXJlIGl0XCIpO1xyXG4gICAgcmV0dXJuIGtpbmQgPT09IFwibVwiID8gZiA6IGtpbmQgPT09IFwiYVwiID8gZi5jYWxsKHJlY2VpdmVyKSA6IGYgPyBmLnZhbHVlIDogc3RhdGUuZ2V0KHJlY2VpdmVyKTtcclxufVxyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIF9fY2xhc3NQcml2YXRlRmllbGRTZXQocmVjZWl2ZXIsIHN0YXRlLCB2YWx1ZSwga2luZCwgZikge1xyXG4gICAgaWYgKGtpbmQgPT09IFwibVwiKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBtZXRob2QgaXMgbm90IHdyaXRhYmxlXCIpO1xyXG4gICAgaWYgKGtpbmQgPT09IFwiYVwiICYmICFmKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiUHJpdmF0ZSBhY2Nlc3NvciB3YXMgZGVmaW5lZCB3aXRob3V0IGEgc2V0dGVyXCIpO1xyXG4gICAgaWYgKHR5cGVvZiBzdGF0ZSA9PT0gXCJmdW5jdGlvblwiID8gcmVjZWl2ZXIgIT09IHN0YXRlIHx8ICFmIDogIXN0YXRlLmhhcyhyZWNlaXZlcikpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJDYW5ub3Qgd3JpdGUgcHJpdmF0ZSBtZW1iZXIgdG8gYW4gb2JqZWN0IHdob3NlIGNsYXNzIGRpZCBub3QgZGVjbGFyZSBpdFwiKTtcclxuICAgIHJldHVybiAoa2luZCA9PT0gXCJhXCIgPyBmLmNhbGwocmVjZWl2ZXIsIHZhbHVlKSA6IGYgPyBmLnZhbHVlID0gdmFsdWUgOiBzdGF0ZS5zZXQocmVjZWl2ZXIsIHZhbHVlKSksIHZhbHVlO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19jbGFzc1ByaXZhdGVGaWVsZEluKHN0YXRlLCByZWNlaXZlcikge1xyXG4gICAgaWYgKHJlY2VpdmVyID09PSBudWxsIHx8ICh0eXBlb2YgcmVjZWl2ZXIgIT09IFwib2JqZWN0XCIgJiYgdHlwZW9mIHJlY2VpdmVyICE9PSBcImZ1bmN0aW9uXCIpKSB0aHJvdyBuZXcgVHlwZUVycm9yKFwiQ2Fubm90IHVzZSAnaW4nIG9wZXJhdG9yIG9uIG5vbi1vYmplY3RcIik7XHJcbiAgICByZXR1cm4gdHlwZW9mIHN0YXRlID09PSBcImZ1bmN0aW9uXCIgPyByZWNlaXZlciA9PT0gc3RhdGUgOiBzdGF0ZS5oYXMocmVjZWl2ZXIpO1xyXG59XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19hZGREaXNwb3NhYmxlUmVzb3VyY2UoZW52LCB2YWx1ZSwgYXN5bmMpIHtcclxuICAgIGlmICh2YWx1ZSAhPT0gbnVsbCAmJiB2YWx1ZSAhPT0gdm9pZCAwKSB7XHJcbiAgICAgICAgaWYgKHR5cGVvZiB2YWx1ZSAhPT0gXCJvYmplY3RcIiAmJiB0eXBlb2YgdmFsdWUgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBleHBlY3RlZC5cIik7XHJcbiAgICAgICAgdmFyIGRpc3Bvc2UsIGlubmVyO1xyXG4gICAgICAgIGlmIChhc3luYykge1xyXG4gICAgICAgICAgICBpZiAoIVN5bWJvbC5hc3luY0Rpc3Bvc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuYXN5bmNEaXNwb3NlIGlzIG5vdCBkZWZpbmVkLlwiKTtcclxuICAgICAgICAgICAgZGlzcG9zZSA9IHZhbHVlW1N5bWJvbC5hc3luY0Rpc3Bvc2VdO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAoZGlzcG9zZSA9PT0gdm9pZCAwKSB7XHJcbiAgICAgICAgICAgIGlmICghU3ltYm9sLmRpc3Bvc2UpIHRocm93IG5ldyBUeXBlRXJyb3IoXCJTeW1ib2wuZGlzcG9zZSBpcyBub3QgZGVmaW5lZC5cIik7XHJcbiAgICAgICAgICAgIGRpc3Bvc2UgPSB2YWx1ZVtTeW1ib2wuZGlzcG9zZV07XHJcbiAgICAgICAgICAgIGlmIChhc3luYykgaW5uZXIgPSBkaXNwb3NlO1xyXG4gICAgICAgIH1cclxuICAgICAgICBpZiAodHlwZW9mIGRpc3Bvc2UgIT09IFwiZnVuY3Rpb25cIikgdGhyb3cgbmV3IFR5cGVFcnJvcihcIk9iamVjdCBub3QgZGlzcG9zYWJsZS5cIik7XHJcbiAgICAgICAgaWYgKGlubmVyKSBkaXNwb3NlID0gZnVuY3Rpb24oKSB7IHRyeSB7IGlubmVyLmNhbGwodGhpcyk7IH0gY2F0Y2ggKGUpIHsgcmV0dXJuIFByb21pc2UucmVqZWN0KGUpOyB9IH07XHJcbiAgICAgICAgZW52LnN0YWNrLnB1c2goeyB2YWx1ZTogdmFsdWUsIGRpc3Bvc2U6IGRpc3Bvc2UsIGFzeW5jOiBhc3luYyB9KTtcclxuICAgIH1cclxuICAgIGVsc2UgaWYgKGFzeW5jKSB7XHJcbiAgICAgICAgZW52LnN0YWNrLnB1c2goeyBhc3luYzogdHJ1ZSB9KTtcclxuICAgIH1cclxuICAgIHJldHVybiB2YWx1ZTtcclxuXHJcbn1cclxuXHJcbnZhciBfU3VwcHJlc3NlZEVycm9yID0gdHlwZW9mIFN1cHByZXNzZWRFcnJvciA9PT0gXCJmdW5jdGlvblwiID8gU3VwcHJlc3NlZEVycm9yIDogZnVuY3Rpb24gKGVycm9yLCBzdXBwcmVzc2VkLCBtZXNzYWdlKSB7XHJcbiAgICB2YXIgZSA9IG5ldyBFcnJvcihtZXNzYWdlKTtcclxuICAgIHJldHVybiBlLm5hbWUgPSBcIlN1cHByZXNzZWRFcnJvclwiLCBlLmVycm9yID0gZXJyb3IsIGUuc3VwcHJlc3NlZCA9IHN1cHByZXNzZWQsIGU7XHJcbn07XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gX19kaXNwb3NlUmVzb3VyY2VzKGVudikge1xyXG4gICAgZnVuY3Rpb24gZmFpbChlKSB7XHJcbiAgICAgICAgZW52LmVycm9yID0gZW52Lmhhc0Vycm9yID8gbmV3IF9TdXBwcmVzc2VkRXJyb3IoZSwgZW52LmVycm9yLCBcIkFuIGVycm9yIHdhcyBzdXBwcmVzc2VkIGR1cmluZyBkaXNwb3NhbC5cIikgOiBlO1xyXG4gICAgICAgIGVudi5oYXNFcnJvciA9IHRydWU7XHJcbiAgICB9XHJcbiAgICB2YXIgciwgcyA9IDA7XHJcbiAgICBmdW5jdGlvbiBuZXh0KCkge1xyXG4gICAgICAgIHdoaWxlIChyID0gZW52LnN0YWNrLnBvcCgpKSB7XHJcbiAgICAgICAgICAgIHRyeSB7XHJcbiAgICAgICAgICAgICAgICBpZiAoIXIuYXN5bmMgJiYgcyA9PT0gMSkgcmV0dXJuIHMgPSAwLCBlbnYuc3RhY2sucHVzaChyKSwgUHJvbWlzZS5yZXNvbHZlKCkudGhlbihuZXh0KTtcclxuICAgICAgICAgICAgICAgIGlmIChyLmRpc3Bvc2UpIHtcclxuICAgICAgICAgICAgICAgICAgICB2YXIgcmVzdWx0ID0gci5kaXNwb3NlLmNhbGwoci52YWx1ZSk7XHJcbiAgICAgICAgICAgICAgICAgICAgaWYgKHIuYXN5bmMpIHJldHVybiBzIHw9IDIsIFByb21pc2UucmVzb2x2ZShyZXN1bHQpLnRoZW4obmV4dCwgZnVuY3Rpb24oZSkgeyBmYWlsKGUpOyByZXR1cm4gbmV4dCgpOyB9KTtcclxuICAgICAgICAgICAgICAgIH1cclxuICAgICAgICAgICAgICAgIGVsc2UgcyB8PSAxO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgICAgIGNhdGNoIChlKSB7XHJcbiAgICAgICAgICAgICAgICBmYWlsKGUpO1xyXG4gICAgICAgICAgICB9XHJcbiAgICAgICAgfVxyXG4gICAgICAgIGlmIChzID09PSAxKSByZXR1cm4gZW52Lmhhc0Vycm9yID8gUHJvbWlzZS5yZWplY3QoZW52LmVycm9yKSA6IFByb21pc2UucmVzb2x2ZSgpO1xyXG4gICAgICAgIGlmIChlbnYuaGFzRXJyb3IpIHRocm93IGVudi5lcnJvcjtcclxuICAgIH1cclxuICAgIHJldHVybiBuZXh0KCk7XHJcbn1cclxuXHJcbmV4cG9ydCBmdW5jdGlvbiBfX3Jld3JpdGVSZWxhdGl2ZUltcG9ydEV4dGVuc2lvbihwYXRoLCBwcmVzZXJ2ZUpzeCkge1xyXG4gICAgaWYgKHR5cGVvZiBwYXRoID09PSBcInN0cmluZ1wiICYmIC9eXFwuXFwuP1xcLy8udGVzdChwYXRoKSkge1xyXG4gICAgICAgIHJldHVybiBwYXRoLnJlcGxhY2UoL1xcLih0c3gpJHwoKD86XFwuZCk/KSgoPzpcXC5bXi4vXSs/KT8pXFwuKFtjbV0/KXRzJC9pLCBmdW5jdGlvbiAobSwgdHN4LCBkLCBleHQsIGNtKSB7XHJcbiAgICAgICAgICAgIHJldHVybiB0c3ggPyBwcmVzZXJ2ZUpzeCA/IFwiLmpzeFwiIDogXCIuanNcIiA6IGQgJiYgKCFleHQgfHwgIWNtKSA/IG0gOiAoZCArIGV4dCArIFwiLlwiICsgY20udG9Mb3dlckNhc2UoKSArIFwianNcIik7XHJcbiAgICAgICAgfSk7XHJcbiAgICB9XHJcbiAgICByZXR1cm4gcGF0aDtcclxufVxyXG5cclxuZXhwb3J0IGRlZmF1bHQge1xyXG4gICAgX19leHRlbmRzOiBfX2V4dGVuZHMsXHJcbiAgICBfX2Fzc2lnbjogX19hc3NpZ24sXHJcbiAgICBfX3Jlc3Q6IF9fcmVzdCxcclxuICAgIF9fZGVjb3JhdGU6IF9fZGVjb3JhdGUsXHJcbiAgICBfX3BhcmFtOiBfX3BhcmFtLFxyXG4gICAgX19lc0RlY29yYXRlOiBfX2VzRGVjb3JhdGUsXHJcbiAgICBfX3J1bkluaXRpYWxpemVyczogX19ydW5Jbml0aWFsaXplcnMsXHJcbiAgICBfX3Byb3BLZXk6IF9fcHJvcEtleSxcclxuICAgIF9fc2V0RnVuY3Rpb25OYW1lOiBfX3NldEZ1bmN0aW9uTmFtZSxcclxuICAgIF9fbWV0YWRhdGE6IF9fbWV0YWRhdGEsXHJcbiAgICBfX2F3YWl0ZXI6IF9fYXdhaXRlcixcclxuICAgIF9fZ2VuZXJhdG9yOiBfX2dlbmVyYXRvcixcclxuICAgIF9fY3JlYXRlQmluZGluZzogX19jcmVhdGVCaW5kaW5nLFxyXG4gICAgX19leHBvcnRTdGFyOiBfX2V4cG9ydFN0YXIsXHJcbiAgICBfX3ZhbHVlczogX192YWx1ZXMsXHJcbiAgICBfX3JlYWQ6IF9fcmVhZCxcclxuICAgIF9fc3ByZWFkOiBfX3NwcmVhZCxcclxuICAgIF9fc3ByZWFkQXJyYXlzOiBfX3NwcmVhZEFycmF5cyxcclxuICAgIF9fc3ByZWFkQXJyYXk6IF9fc3ByZWFkQXJyYXksXHJcbiAgICBfX2F3YWl0OiBfX2F3YWl0LFxyXG4gICAgX19hc3luY0dlbmVyYXRvcjogX19hc3luY0dlbmVyYXRvcixcclxuICAgIF9fYXN5bmNEZWxlZ2F0b3I6IF9fYXN5bmNEZWxlZ2F0b3IsXHJcbiAgICBfX2FzeW5jVmFsdWVzOiBfX2FzeW5jVmFsdWVzLFxyXG4gICAgX19tYWtlVGVtcGxhdGVPYmplY3Q6IF9fbWFrZVRlbXBsYXRlT2JqZWN0LFxyXG4gICAgX19pbXBvcnRTdGFyOiBfX2ltcG9ydFN0YXIsXHJcbiAgICBfX2ltcG9ydERlZmF1bHQ6IF9faW1wb3J0RGVmYXVsdCxcclxuICAgIF9fY2xhc3NQcml2YXRlRmllbGRHZXQ6IF9fY2xhc3NQcml2YXRlRmllbGRHZXQsXHJcbiAgICBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0OiBfX2NsYXNzUHJpdmF0ZUZpZWxkU2V0LFxyXG4gICAgX19jbGFzc1ByaXZhdGVGaWVsZEluOiBfX2NsYXNzUHJpdmF0ZUZpZWxkSW4sXHJcbiAgICBfX2FkZERpc3Bvc2FibGVSZXNvdXJjZTogX19hZGREaXNwb3NhYmxlUmVzb3VyY2UsXHJcbiAgICBfX2Rpc3Bvc2VSZXNvdXJjZXM6IF9fZGlzcG9zZVJlc291cmNlcyxcclxuICAgIF9fcmV3cml0ZVJlbGF0aXZlSW1wb3J0RXh0ZW5zaW9uOiBfX3Jld3JpdGVSZWxhdGl2ZUltcG9ydEV4dGVuc2lvbixcclxufTtcclxuIixudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGwsbnVsbCxudWxsLG51bGxdLCJuYW1lcyI6WyJleHRlbmRTdGF0aWNzIiwiZCIsImIiLCJPYmplY3QiLCJzZXRQcm90b3R5cGVPZiIsIl9fcHJvdG9fXyIsIkFycmF5IiwicCIsInByb3RvdHlwZSIsImhhc093blByb3BlcnR5IiwiY2FsbCIsIl9fZXh0ZW5kcyIsIlR5cGVFcnJvciIsIlN0cmluZyIsIl9fIiwiY29uc3RydWN0b3IiLCJjcmVhdGUiLCJfX2Fzc2lnbiIsImFzc2lnbiIsInQiLCJzIiwiaSIsIm4iLCJhcmd1bWVudHMiLCJsZW5ndGgiLCJhcHBseSIsIl9fc3ByZWFkQXJyYXkiLCJ0byIsImZyb20iLCJwYWNrIiwibCIsImFyIiwic2xpY2UiLCJjb25jYXQiLCJTdXBwcmVzc2VkRXJyb3IiLCJlcnJvciIsInN1cHByZXNzZWQiLCJtZXNzYWdlIiwiZSIsIkVycm9yIiwibmFtZSIsIlJlYWN0IiwidXNlUmVmIiwidXNlQ2FsbGJhY2siLCJ1c2VFZmZlY3QiLCJwYXJzZUlTTyIsInRvRGF0ZSIsInBhcnNlIiwibG9uZ0Zvcm1hdHRlcnMiLCJpc1ZhbGlkRGF0ZSIsImlzQmVmb3JlIiwiZm9ybWF0Iiwic2V0SG91cnMiLCJzZXRNaW51dGVzIiwic2V0U2Vjb25kcyIsImdldElTT1dlZWsiLCJzdGFydE9mRGF5Iiwic3RhcnRPZldlZWsiLCJzdGFydE9mTW9udGgiLCJzdGFydE9mWWVhciIsInN0YXJ0T2ZRdWFydGVyIiwiZW5kT2ZEYXkiLCJlbmRPZldlZWsiLCJlbmRPZk1vbnRoIiwiZGZJc1NhbWVZZWFyIiwiZGZJc1NhbWVNb250aCIsImRmSXNTYW1lUXVhcnRlciIsImRmSXNTYW1lRGF5IiwiZGZJc0VxdWFsIiwiaXNXaXRoaW5JbnRlcnZhbCIsInNldE1vbnRoIiwic2V0UXVhcnRlciIsImdldFllYXIiLCJnZXRNb250aCIsImVuZE9mWWVhciIsImdldFF1YXJ0ZXIiLCJkaWZmZXJlbmNlSW5DYWxlbmRhckRheXMiLCJnZXRIb3VycyIsImdldE1pbnV0ZXMiLCJnZXRTZWNvbmRzIiwic3ViTW9udGhzIiwiZGlmZmVyZW5jZUluQ2FsZW5kYXJNb250aHMiLCJhZGRNb250aHMiLCJzdWJRdWFydGVycyIsImRpZmZlcmVuY2VJbkNhbGVuZGFyUXVhcnRlcnMiLCJhZGRRdWFydGVycyIsInN1YlllYXJzIiwiZGlmZmVyZW5jZUluQ2FsZW5kYXJZZWFycyIsImFkZFllYXJzIiwibWluIiwibWF4IiwiaXNEYXRlIiwiYWRkSG91cnMiLCJhZGRNaW51dGVzIiwiYWRkU2Vjb25kcyIsImlzQWZ0ZXIiLCJjbG9uZUVsZW1lbnQiLCJDb21wb25lbnQiLCJjcmVhdGVSZWYiLCJnZXREYXkiLCJjbHN4IiwiZ2V0RGF0ZSIsImFkZERheXMiLCJhZGRXZWVrcyIsImdldFRpbWUiLCJzZXRZZWFyIiwiZGlmZmVyZW5jZUluRGF5cyIsIlJlYWN0RE9NIiwidXNlRmxvYXRpbmciLCJhdXRvVXBkYXRlIiwiZmxpcCIsIm9mZnNldCIsImFycm93IiwiRmxvYXRpbmdBcnJvdyIsImNyZWF0ZUVsZW1lbnQiLCJzZXQiLCJzdWJXZWVrcyIsInN1YkRheXMiLCJQb3BwZXJDb21wb25lbnQiXSwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7Ozs7SUFBQTtJQUNBO0FBQ0E7SUFDQTtJQUNBO0FBQ0E7SUFDQTtJQUNBO0lB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
