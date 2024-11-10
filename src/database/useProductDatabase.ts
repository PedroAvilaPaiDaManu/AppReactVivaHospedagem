import { useSQLiteContext } from "expo-sqlite"

export type ProductDatabase = {
  id: number
  name: string
  telefone: number
}

export function useProductDatabase() {
  const database = useSQLiteContext()

  async function create(data: Omit<ProductDatabase, "id">) {
    const statement = await database.prepareAsync(
      "INSERT INTO clientes (name, telefone) VALUES ($name, $telefone)"
    )

    try {
      const result = await statement.executeAsync({
        $name: data.name,
        $telefone: data.telefone,
      })

      const insertedRowId = result.lastInsertRowId.toLocaleString()

      return { insertedRowId }
    } catch (error) {
      throw error
    } finally {
      await statement.finalizeAsync()
    }
  }

  async function searchByName(name: string) {
    try {
      const query = "SELECT * FROM clientes WHERE name LIKE ?"

      const response = await database.getAllAsync<ProductDatabase>(
        query,
        `%${name}%`
      )

      return response
    } catch (error) {
      throw error
    }
  }

  async function update(data: ProductDatabase) {
    const statement = await database.prepareAsync(
      "UPDATE clientes SET name = $name, telefone = $telefone WHERE id = $id"
    )

    try {
      await statement.executeAsync({
        $id: data.id,
        $name: data.name,
        $telefone: data.telefone,
      })
    } catch (error) {
      throw error
    } finally {
      await statement.finalizeAsync()
    }
  }

  async function remove(id: number) {
    try {
      await database.execAsync("DELETE FROM clientes WHERE id = " + id)
    } catch (error) {
      throw error
    }
  }

  async function show(id: number) {
    try {
      const query = "SELECT * FROM clientes WHERE id = ?"

      const response = await database.getFirstAsync<ProductDatabase>(query, [
        id,
      ])

      return response
    } catch (error) {
      throw error
    }
  }

  return { create, searchByName, update, remove, show }
}