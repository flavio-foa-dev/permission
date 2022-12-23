/**
 * @param { import("knex").Knex } knex
 * @returns { Promise<void> }
 */
exports.seed = async function(knex) {
  // Deletes ALL existing entries
  await knex('users').del()
  await knex('users').insert([
    {user_name: "Flavio Andrade", user_email: "Flavio@Andrade.com.br", user_password:"1234567890"},
  ]);
};
