# Usando a imagem oficial do PostgreSQL
FROM postgres:16

# Variáveis de ambiente (padrão, podem ser sobrescritas no docker run ou docker-compose)
ENV POSTGRES_USER=postgres
ENV POSTGRES_PASSWORD=postgres
ENV POSTGRES_DB=steam_da_shopee_DB

# Copiar scripts de inicialização (opcional, se você tiver .sql ou .sh)
# Eles rodam automaticamente na primeira vez que o container sobe
# COPY ./init.sql /docker-entrypoint-initdb.d/

# Porta padrão do PostgreSQL
EXPOSE 5432
