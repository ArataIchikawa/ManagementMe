FROM ruby:2.7.4

ENV TZ Asia/Tokyo
ENV LANG C.UTF-8

RUN curl -sS https://dl.yarnpkg.com/debian/pubkey.gpg | apt-key add - \
    && echo "deb https://dl.yarnpkg.com/debian/ stable main" | tee /etc/apt/sources.list.d/yarn.list \
    && apt-get update -qq \
    && apt-get install -y --no-install-recommends \
    nodejs \
    yarn \
    mariadb-client \
    vim

RUN gem install bundler

RUN mkdir /app
WORKDIR /app

COPY Gemfile Gemfile.lock /app/

RUN bundle config --local set path 'vendor/bundle' \
    && bundle install

CMD ["/bin/bash", "/docker-entrypoint.sh"]