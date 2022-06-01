const locale =
  navigator.languages && navigator.languages.length
    ? navigator.languages[0]
    : navigator.language;

const numberFormatter = new Intl.NumberFormat(locale, {
  style: 'currency',
  currency: 'BRL',
});

const dateFormatter = new Intl.DateTimeFormat(locale);

export function formatAmount(amount: number) {
  return numberFormatter.format(amount);
}

export function formatDate(date: Date) {
  return dateFormatter.format(date);
}
